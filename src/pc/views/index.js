import React, { Suspense, Component } from "react";
import { ConfigProvider, Skeleton } from "antd";
import { Route, Redirect, Switch } from "react-router-dom";
import zhCN from "antd/lib/locale/zh_CN";

import Header from "@components/common/header";
import Nav from "@components/common/horizontalNav";
import Footer from "@components/common/footer";
import SuspendedWindow from "@components/common/suspendedWindow"; //右侧悬浮窗
import SelectionModifiers from "@components/common/selectionModifiers"; //右侧悬浮窗
import { routeList, pcPathName } from "../router";
import { editingStatus } from "../../store/store";
import { changeEditingStatus } from "../../store/actions";
import "../assets/css/pcStyle.scss"; //pc的固定样式
import { getIsEditState } from "@src/public/getStorage";

//页面汇总文件

//懒加载需要配合Suspense
//骨架屏
const loadingStyle = {
  width: "1200px",
  margin: "0 auto",
  minHeight: "1000px",
  padding: "50px 0px",
};

const Loading = (
  <div className="lazyLoading" style={loadingStyle}>
    <Skeleton.Image active style={{ width: "1200px", height: "480px" }} />
    <Skeleton active />
    <Skeleton active />
    <Skeleton active />
    <Skeleton active />
    <Skeleton active />
  </div>
);

export default class page extends Component {
  state = {
    routeType: false, //控制跳转是打开新标签还是当前页
  };
  componentDidMount() {
    const isPhone = navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
    const screenWidth = document.body.clientWidth;

    //移动端跳转
    if (isPhone !== null || screenWidth < 1200) {
      this.props.history.push("/site/wap");
    }
    //以下是编辑状态时的操作
    if (!getIsEditState()) return;

    editingStatus.dispatch(changeEditingStatus(1));
    this.setState({
      routeType: true,
    });
  }
  render() {
    const { routeType } = this.state;
    return (
      <ConfigProvider locale={zhCN}>
        <main className="pcResetStyle">
          <Header />
          <Nav routeType={routeType} />
          <Suspense fallback={Loading}>
            <Switch>
              {routeList.map((item, index) => {
                return (
                  <Route {...item} path={pcPathName + item.path} key={index} />
                );
              })}
              <Redirect to="/site/pc/home" />
            </Switch>
            {editingStatus.getState() && <SelectionModifiers />}
          </Suspense>
          <SuspendedWindow />
          <Footer />
        </main>
      </ConfigProvider>
    );
  }
}
