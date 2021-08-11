import React from "react";
import renderer from "react-test-renderer";
import Footer from "../index";
import { BrowserRouter as Router } from "react-router-dom";

describe("PC:<Footer />", () => {
  it("render", () => {
    const wrapper = renderer.create(
      <Router>
        <Footer />
      </Router>
    );
    let tree = wrapper.toJSON();

    //渲染测试
    expect(tree).toMatchSnapshot();
  });
});
