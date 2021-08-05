import React from "react";
import renderer from "react-test-renderer";
import Title from "../index";

test("PC:title 组件测试", () => {
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

  // 手动触发回调
  // tree.props.onMouseEnter();
  // 重新渲染
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
