import React from "react";
import renderer from "react-test-renderer";
import Introduce from "../index";

describe("PC:<Introduce />", () => {
  it("render", () => {
    const wrapper = renderer.create(<Introduce />);
    let tree = wrapper.toJSON();

    //渲染测试
    expect(tree).toMatchSnapshot();
  });
});
