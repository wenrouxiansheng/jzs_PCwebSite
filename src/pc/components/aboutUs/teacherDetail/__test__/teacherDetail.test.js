import React from "react";
import renderer from "react-test-renderer";
import TeacherDetail from "../index";

describe("PC:<TeacherDetail />", () => {
  it("render", () => {
    const wrapper = renderer.create(<TeacherDetail style={{ color: "red" }} />);
    let tree = wrapper.toJSON();

    //渲染测试
    expect(tree).toMatchSnapshot();
  });
});
