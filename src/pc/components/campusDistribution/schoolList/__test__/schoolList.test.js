import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import SchoolList from "../index";

describe("PC:<SchoolList />", () => {
  it("render", () => {
    const wrapper = renderer.create(<SchoolList />);
    let tree = wrapper.toJSON();

    //渲染测试
    expect(tree).toMatchSnapshot();
  });
  it("paging event", () => {
    const NUM = 2;
    const wrapper = shallow(<SchoolList />);

    wrapper.find("Pagination").simulate("change", NUM);
    expect(wrapper.find("Pagination").prop("current")).toBe(NUM);
  });

});
