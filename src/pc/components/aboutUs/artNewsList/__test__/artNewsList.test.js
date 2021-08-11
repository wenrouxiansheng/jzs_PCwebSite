import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import ArtNewsList from "../index";

describe("PC:<ArtNewsList />", () => {
  it("render", () => {
    const wrapper = renderer.create(<ArtNewsList />);
    let tree = wrapper.toJSON();

    //渲染测试
    expect(tree).toMatchSnapshot();
  });

  it("paging event", () => {
    const NUM = 3;
    const wrapper = shallow(<ArtNewsList />);

    wrapper.find("Pagination").simulate("change", NUM);
    expect(wrapper.find("Pagination").prop("current")).toBe(NUM);
  });

  // it("mount", () => {
  //   const wrapper = mount(<ArtNewsList />);
  //   wrapper.find(".ant-pagination-item").at(2).simulate("click");
  //   expect(wrapper.find(".ant-pagination-item-active").text()).toBe("3");
  // });
});
