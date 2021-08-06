import React from "react";
import renderer from "react-test-renderer";
import { shallow, configure, render } from "enzyme";
import ArtNewsList from "../index";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("PC:artNewsList", () => {
  it("渲染测试", () => {
    const component = renderer.create(<ArtNewsList />);
    let tree = component.toJSON();

    //渲染测试
    expect(tree).toMatchSnapshot();
  });

  it("分页事件测试", () => {
    const num = 3;
    const component = shallow(<ArtNewsList />);
    // const a = component.find("Pagination").simulate("change", num).prop('pageSize')
    // component.find("Pagination").simulate("change", a)

    expect(component.find("Pagination").simulate("change", num)).toBe(3);
  });
});
