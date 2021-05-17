import React, { Component } from 'react'
import './style.scss'
import adorn from '@assets/brandIntroduction/course/polygon.png'
export default class curriculumPlanComponent extends Component {
    state = {
        data: [
            {
                id: 1, img: require('../../../assets/brandIntroduction/course/class1.png').default, text: [
                    "桔子树艺术教育培训在对超过数十万名学员的教学过程中，针对不同年龄段、学习不同课程、有不同问题、具备不同基础、拥有不同条件、不同上课频率、不同学习周期、不同的学习需求等全方位出发，制定形成了一套桔子树特别的新型教学模式——坚持实施<span style='color: #ffab32'>“一位学员、一份计划、一种方法”</span>的针对性教学模式，即“私人订制教学计划”。"
                ], type: 'left'
            },
            {
                id: 2, img: require('../../../assets/brandIntroduction/course/class2.png').default, text: [
                    "经过几十万次实战调整和总结，使桔子树<span style='color: #ffab32'>“私人订制教学计划”</span>的教学模式、方法、体系不断完善、创新，从而摆脱了传统艺术教育在教学模式与方法上，因学院化导致的“单一死板”的缺点。",
                    "只要学员选择了桔子树，无论学员选择的是一对一课程，还是多人集体课程，学员在桔子树所享受到的，不仅仅是一位老师提供的教学服务，而是桔子树整个团队体系为一位学员所提供和制定的全方位的“针对性教学服务”。"
                ], type: 'right'
            },
            {
                id: 3, img: require('../../../assets/brandIntroduction/course/class3.png').default, text: [
                    "桔子树艺术开设艺术课程全面，上课时间灵活有弹性。",
                    "尤其是在少儿艺术教学中，引入“奥尔夫音乐教学法”到课堂中，教学游戏化，使孩子们在玩游戏中高高兴兴地学习音乐，增强孩子的学习兴趣，实践证明这是非常有效的教学方式。"
                ], type: 'left'
            },
        ]
    }
    textNode = (data) => {
        //两处复用  封装text节点
        return <div className="text">
            {
                data.text.map((text, j) => {
                    return <p dangerouslySetInnerHTML={{ __html: text }} key={j}></p>
                })
            }
            {
                ["", "", ""].map((item, index) => {
                    return <img src={adorn} alt="" className="adorn" key={index} />
                })
            }
        </div>
    }
    retrievalNode = () => {
        const { data } = this.props;
        //检索数据生成节点
        return data.map((item) => {
            if (item.type === 'left') {
                return <div className="imgText" key={item.id}>
                    <div className="image">
                        <img src={item.img} alt="" />
                    </div>
                    {
                        this.textNode(item)
                    }
                </div>
            }
            if (item.type === 'right') {
                return <div className="imgText" key={item.id}>
                    {
                        this.textNode(item)
                    }
                    <div className="image">
                        <img src={item.img} alt="" />
                    </div>
                </div>
            }
            return null//如果都不是才会返回null
        })
    }
    render() {
        const { style } = this.props
        return (
            <div className="curriculumPlan" style={{...style}}>
                {
                    this.retrievalNode()
                }
                <div className="consult-button">
                    <button>预约测评</button>
                    <button>咨询课程</button>
                </div>
            </div>
        )
    }
}
