import React from "react";
import renderer from "react-test-renderer";
import History from "../index";

describe("PC:<History />", () => {
  it("render", () => {
    const wrapper = renderer.create(<History />);
    let tree = wrapper.toJSON();

    //渲染测试
    expect(tree).toMatchSnapshot();
  });
});
