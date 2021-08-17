import React from "react";
import renderer from "react-test-renderer";
import { act } from "react-dom/test-utils";
import { mount } from "enzyme";
import Form from "../index";
describe("PC:<Form />", () => {
  //延缓更新
  const waitForComponentToPaint = async (wrapper) => {
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve));
      wrapper.update();
    });
  };

  it("render", () => {
    const wrapper = renderer.create(<Form />);
    let tree = wrapper.toJSON();

    //渲染测试
    expect(tree).toMatchSnapshot();
  });

  it("submit event", async () => {
    const wrapper = mount(<Form />);

    wrapper
      .find("input#username")
      .simulate("change", { target: { value: "111" } });
    wrapper
      .find("input#phone")
      .simulate("change", { target: { value: 15883285589 } });

    //课程选择
    //模拟点出列表
    wrapper.find(".ant-select-selector").at(0).simulate("mousedown");

    await waitForComponentToPaint(wrapper);

    //模拟选择列表选项
    wrapper.find(".ant-select-item-option").at(0).simulate("click");
    expect(wrapper.find(".ant-select-item-option").length).toEqual(3);
    await waitForComponentToPaint(wrapper);

    /**
     * 校区选择 因为两个选择器所以第三个开始才是属于第二个选择器的选项
     * !如果第一个选择器的选项增加可能会导致第二个选择不上
     * */
    wrapper.find(".ant-select-selector").at(1).simulate("mousedown");

    await waitForComponentToPaint(wrapper);
    expect(wrapper.find(".ant-select-item-option").length).toEqual(6);

    wrapper.find(".ant-select-item-option").at(4).simulate("click");

    wrapper.find("form").at(1).simulate("submit");

    //以下是之前失败的 实验
    // wrapper.find("input#course").simulate("change", { target: { value: 1 } });

    // console.log(wrapper.find(".ant-select-item-option").length)

    // wrapper.find("Select").at(0).setProps({ value: "1" });

    // console.log(wrapper.find("input#username").getDOMNode().value);

    // const selectCourse = mount(wrapper.find("Select").get(0));
    // selectCourse.setProps({ value: "1" });
    // console.log(selectCourse.props())
    // selectCourse.setProps({ open: true });

    // console.log(wrapper.find('form').get(1))
    // console.log(wrapper.find(".ant-select-item-option").length, ">>>>>");
    // expect(selectCourse.find(".ant-select-open").length).toBe(1);
  });
});
