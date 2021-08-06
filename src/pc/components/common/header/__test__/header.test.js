import React from "react";
import renderer from "react-test-renderer";
import Header from "../index";

describe("PC:Header", () => {
  it("渲染测试", () => {
    const component = renderer.create(<Header />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    //渲染测试
  });
});
