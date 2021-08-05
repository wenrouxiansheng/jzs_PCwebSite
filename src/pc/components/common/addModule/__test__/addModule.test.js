import React from "react";
import renderer from "react-test-renderer";
import { shallow, configure } from "enzyme";
import AddModule from "../index";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("PC:addModule 组件测试", () => {
  const component = renderer.create(<AddModule />);
  let tree = component.toJSON();

  //渲染测试
  expect(tree).toMatchSnapshot();
  const addModule = shallow(<AddModule />);
  addModule.find("p").forEach(item => {
    item.simulate('click');
  })
});