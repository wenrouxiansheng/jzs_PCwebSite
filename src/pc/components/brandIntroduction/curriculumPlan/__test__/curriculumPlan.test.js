import React from "react";
import renderer from "react-test-renderer";
import CurriculumPlan from "../index";

const data = [
  {
    id: 1,
    img: "",
    text: [
      "桔子树艺术教育培训在对超过数十万名学员的教学过程中，针对不同年龄段、学习不同课程、有不同问题、具备不同基础、拥有不同条件、不同上课频率、不同学习周期、不同的学习需求等全方位出发，制定形成了一套桔子树特别的新型教学模式——坚持实施<span style='color: #ffab32'>“一位学员、一份计划、一种方法”</span>的针对性教学模式，即“私人订制教学计划”。",
    ],
    type: "left",
  },
];
describe("PC:<CurriculumPlan />", () => {
  it("render", () => {
    const wrapper = renderer.create(
      <CurriculumPlan style={{ color: "red" }} data={data} />
    );
    let tree = wrapper.toJSON();

    //渲染测试
    expect(tree).toMatchSnapshot();
  });
});
