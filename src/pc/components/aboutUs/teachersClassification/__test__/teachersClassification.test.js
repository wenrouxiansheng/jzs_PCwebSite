import React from "react";
import renderer from "react-test-renderer";
import TeachersClassification from "../index";
import { shallow } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";

describe("PC:<TeachersClassification />", () => {
  it("render", () => {
    const wrapper = renderer.create(
      <Router>
        <TeachersClassification />
      </Router>
    );
    let tree = wrapper.toJSON();
    //渲染测试
    expect(tree).toMatchSnapshot();
  });

  const wrapper = shallow(<TeachersClassification />);
  it("paging event", () => {
    const NUM = 3;

    wrapper.find("Pagination").simulate("change", NUM);
    expect(wrapper.find("Pagination").prop("current")).toBe(NUM);
  });

  it("teacher class event", () => {
    const TYPE = 1;
    wrapper.find(".nav li").at(TYPE).simulate("click");
    expect(wrapper.state("category")).toBe(TYPE);
  });
});
