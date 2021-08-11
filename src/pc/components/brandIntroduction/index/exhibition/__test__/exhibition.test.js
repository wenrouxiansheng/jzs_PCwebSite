import React from "react";
import renderer from "react-test-renderer";
import Exhibition from "../index";

describe("PC:<Exhibition />", () => {
  it("render", () => {
    const wrapper = renderer.create(<Exhibition />);
    let tree = wrapper.toJSON();

    //渲染测试
    expect(tree).toMatchSnapshot();
  });
});
