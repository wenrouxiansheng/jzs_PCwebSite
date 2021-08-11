import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import ZoomCarousel from "../index";

describe("PC:<ZoomCarousel />", () => {
  it("render", () => {
    const wrapper = renderer.create(<ZoomCarousel />);
    let tree = wrapper.toJSON();

    //渲染测试
    expect(tree).toMatchSnapshot();
  });

  const wrapper = mount(<ZoomCarousel />);

  it("next event", () => {
    //下一张
    wrapper.find(".next").simulate("click");
    expect(wrapper.state("currentSub")).toBe(2);
  });
  it("prev event", () => {
    //上一张
    wrapper.find(".prev").simulate("click");
    //使用的同一个wrapper 状态会延续 所以是1不是0
    expect(wrapper.state("currentSub")).toBe(1);
  });
});
