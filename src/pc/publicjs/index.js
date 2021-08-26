import PubSub from "pubsub-js";
import { editingStatus } from "../../store/store";
import switchComponents from "@components/allComponents"; //汇总的组件

export function getParents(el, name) {
  //向上查找指定类名，如父元素有指定类名则返回自身
  let dom = el;
  if (!el?.className?.indexOf) return;
  if (el.className.indexOf(name) === -1) {
    for (let i = 0; i < Infinity; i++) {
      if (!dom.parentNode) return;
      if (
        dom.parentNode.nodeName === "BODY" ||
        dom.parentNode.nodeName === "#document"
      ) {
        return false;
      }
      if (dom.parentNode.className.indexOf(name) === -1) {
        dom = dom.parentNode;
      } else {
        return dom;
      }
    }
  }
  return el;
}
//节流
export function throttle(func, time) {
  let timer = null;
  return function (event) {
    if (timer) return;
    timer = setTimeout(() => {
      func(event);
      timer = null;
    }, time);
  };
}

export function homePageMouseMove(componentJson, type) {
  return (e) => {
    //在编辑时调整右上角悬浮窗位置
    const target = getParents(e.target, "componentContainer");
    if (!target || !target.parentNode) return;

    const num = target.parentNode.getAttribute("flag"); //选中组件的下标
    // console.log(componentJson, componentJson[num], num)
    const info = {
        display: "block",
        width: `${target.offsetWidth}px`,
        height: `0px`,
        left: `${target.offsetLeft}px`,
        top: `${target.offsetTop}px`,
      },
      activeObjInfo = {
        num,
        componentJson,
        type,
        isContainer:
          num && componentJson[num].component === "ComponentContainer"
            ? true
            : false,
      };
    //更改悬浮窗位置
    PubSub.publish("changeSelectionPosition", info);
    //选中之后把页面的组件数据   以及选择的组件下标传到悬浮小窗口中
    PubSub.publish("getActiveObj", activeObjInfo);
  };
}

export function seekComponents(componentJson, type) {
  //遍历页面结构  ,如果时编辑状态会监听鼠标移动事件 形成选中框加悬浮窗

  if (!editingStatus.getState()) {
    //不是编辑状态下少一层div
    const ary = [];
    componentJson.forEach((item, index) => {
      ary.push(switchComponents(item.component, item.props, index));
    });
    return ary;
  }

  return componentJson.map((item, index) => {
    return (
      <div
        className={`componentContainer ${
          editingStatus.getState() ? "hoverBorder" : ""
        }`}
        onMouseMove={
          editingStatus.getState() && item.component !== "AddModule"
            ? throttle(homePageMouseMove(componentJson, type), 300)
            : null
        }
        key={index}
        flag={index}
      >
        {switchComponents(item.component, item.props)}
      </div>
    );
  });
}
