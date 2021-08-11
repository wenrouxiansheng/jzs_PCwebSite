import React from "react";
import renderer from "react-test-renderer";
import Paragraph from "../index";

describe("PC:<Paragraph />", () => {
  it("render", () => {
    const wrapper = renderer.create(
      <Paragraph text="测试" style={{ color: "red" }} />
    );
    let tree = wrapper.toJSON();

    //渲染测试
    expect(tree).toMatchSnapshot();
  });
});
