import React from "react";
import renderer from "react-test-renderer";
import TeacherStandards from "../index";

describe("PC:<TeacherStandards />", () => {
  it("render", () => {
    const wrapper = renderer.create(
      <TeacherStandards style={{ color: "red" }} />
    );
    let tree = wrapper.toJSON();

    //渲染测试
    expect(tree).toMatchSnapshot();
  });
});
