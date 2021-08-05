import React from "react";
import renderer from "react-test-renderer";
import Header from "../index";

test("PC:Header 组件测试", () => {
  const component = renderer.create(<Header />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  //渲染测试
});
