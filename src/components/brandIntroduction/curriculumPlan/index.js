import React, { Component } from 'react'
import './style.scss'
import img1 from '@assets/brandIntroduction/course/class1.png'
import img2 from '@assets/brandIntroduction/course/class2.png'
import img3 from '@assets/brandIntroduction/course/class3.png'
import adorn from '@assets/brandIntroduction/course/polygon.png'

export default class curriculumPlanComponent extends Component {
    render() {
        return (
            <div className="curriculumPlan">
                <div className="imgText">
                    <div className="image">
                        <img src={img1} alt=""></img>
                    </div>
                    <div className="text">
                        <p>桔子树艺术教育培训在对超过数十万名学员的教学过程中，针对不同年龄段、学习不同课程、有不同问题、具备不同基础、拥有不同条件、不同上课频率、不同学习周期、不同的学习需求等全方位出发，制定形成了一套桔子树特别的新型教学模式——坚持实施<span className="color">“一位学员、一份计划、一种方法”</span>的针对性教学模式，即“私人订制教学计划”。</p>
                    </div>
                </div>
                <div className="imgText">
                    <div className="text">
                        <p>经过几十万次实战调整和总结，使桔子树<span className="color">“私人订制教学计划”</span>的教学模式、方法、体系不断完善、创新，从而摆脱了传统艺术教育在教学模式与方法上，因学院化导致的“单一死板”的缺点。</p>
                        <p>只要学员选择了桔子树，无论学员选择的是一对一课程，还是多人集体课程，学员在桔子树所享受到的，不仅仅是一位老师提供的教学服务，而是桔子树整个团队体系为一位学员所提供和制定的全方位的“针对性教学服务”。</p>
                    </div>
                    <div className="image">
                        <img src={img2} alt=""></img>
                    </div>
                </div>
                <div className="imgText">
                    <div className="image">
                        <img src={img3} alt=""></img>
                    </div>
                    <div className="text">
                        <p>桔子树艺术开设艺术课程全面，上课时间灵活有弹性。</p>
                        <p>尤其是在少儿艺术教学中，引入“奥尔夫音乐教学法”到课堂中，教学游戏化，使孩子们在玩游戏中高高兴兴地学习音乐，增强孩子的学习兴趣，实践证明这是非常有效的教学方式。</p>
                    </div>
                </div>
                <div className="consult-button">
                    <button>预约测评</button>
                    <button>咨询课程</button>
                </div>
                <img src={adorn} alt="" className="adorn"/>
                <img src={adorn} alt="" className="adorn"/>
                <img src={adorn} alt="" className="adorn"/>
                <img src={adorn} alt="" className="adorn"/>
                <img src={adorn} alt="" className="adorn"/>
                <img src={adorn} alt="" className="adorn"/>
                <img src={adorn} alt="" className="adorn"/>
            </div>
        )
    }
}
