import React from "react";
import renderer from "react-test-renderer";
import ContactInfo from "../index";

describe("PC:<ContactInfo />", () => {
  it("render", () => {
    const wrapper = renderer.create(<ContactInfo />);
    let tree = wrapper.toJSON();

    //渲染测试
    expect(tree).toMatchSnapshot();
  });
});
