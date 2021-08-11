import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import AddModule from "../index";

describe("PC:<AddModule />", () => {
  it("render", () => {
    const wrapper = renderer.create(<AddModule />);
    let tree = wrapper.toJSON();

    //渲染测试
    expect(tree).toMatchSnapshot();
  });

  it("message event", () => {
    const wrapper = shallow(<AddModule />);
    wrapper.find("p").forEach((item) => {
      item.simulate("click");
    });
  });
});
