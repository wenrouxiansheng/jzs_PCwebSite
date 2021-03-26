import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import HomePage from '../views/homePage/homePage';
import BrandIntroduction from '../views/brandIntroduction';
import DevelopmentHistory from '../views/brandIntroduction/developmentHistory';
import CurriculumPlan from '../views/brandIntroduction/curriculumPlan';

import DanceTraining from '../views/danceTraining';
import ChildrenDance from '../views/danceTraining/childrenDance';
import HipHop from '../views/danceTraining/hipHop';
import DanceGrading from '../views/artGrading/artExamDance';
import LatinGrading from '../views/artGrading/artExamDance/latinGrading';
import Teachers from '../views/aboutUs/teachers';

export default class router extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path="/home" component={HomePage} />{/**首页 */}
                    {/*品牌介绍*/}
                    <Route path="/brandIntroduction/history" component={DevelopmentHistory} />{/**历史历程 */}
                    <Route path="/brandIntroduction/course" component={CurriculumPlan} />{/**教研课程 */}
                    <Route path="/brandIntroduction" component={BrandIntroduction} />{/**品牌介绍综合页 */}
                    {/* 舞蹈培训 */}
                    <Route path="/danceTraining/hipHop" component={HipHop} />{/**街舞综合页 */}
                    <Route path="/danceTraining/childrenDance" component={ChildrenDance} />{/**少儿舞蹈 */}
                    <Route path="/danceTraining" component={DanceTraining} />{/**舞蹈培训综合 */}
                    {/* 艺术考级 */}
                    <Route path="/artGrading/artExamDance/latinGrading" component={LatinGrading} />{/**国标舞考级 */}
                    <Route path="/artGrading/artExamDance" component={DanceGrading} />{/**舞蹈考级综合 */}
                    {/* 关于我们 */}
                    <Route path="/teachers" component={Teachers} />{/**师资力量 */}
                    <Redirect to="/home" />
                </Switch>
            </main>
        )
    }
}