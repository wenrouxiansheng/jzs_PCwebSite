import React from "react";
import renderer from "react-test-renderer";
import Title from "../index";

describe("PC:title", () => {
  it("渲染测试", () => {
    const component = renderer.create(
      <Title
        info={{
          title: "为什么选择桔子树",
          subTitle: "Core advantages",
        }}
        style={{
          color: "red",
        }}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
