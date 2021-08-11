import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import Form from "../index";

describe("PC:<Form />", () => {
  it("render", () => {
    const wrapper = renderer.create(<Form />);
    let tree = wrapper.toJSON();

    //渲染测试
    expect(tree).toMatchSnapshot();
  });

  it("submit event", () => {
    const wrapper = mount(<Form />);
    wrapper.find("input#username").simulate("change", {
      target: {
        value: "13",
      },
    });
    wrapper.find("input#phone").simulate("change", {
      target: {
        value: "13161686315",
      },
    });
    wrapper.find("input#course").simulate("click");
    wrapper.find(".ant-select-item").at(1).simulate("click");
    console.log(wrapper.find("input#course").text())
    // wrapper.find("input#username").simulate("change", {
    //   target: {
    //     value: "13",
    //   },
    // });
  });
});
