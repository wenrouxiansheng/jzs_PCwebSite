import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import HomePage from '../views/homePage/homePage';
import BrandIntroduction from '../views/brandIntroduction';
import DevelopmentHistory from '../views/brandIntroduction/developmentHistory';
import CurriculumPlan from '../views/brandIntroduction/curriculumPlan';

import DanceTraining from '../views/danceTraining';
import ChildrenDance from '../views/danceTraining/childrenDance';

export default class router extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path="/home" component={HomePage} />
                    {/*品牌介绍*/}
                    <Route path="/brandIntroduction/history" component={DevelopmentHistory} />
                    <Route path="/brandIntroduction/course" component={CurriculumPlan} />
                    <Route path="/brandIntroduction" component={BrandIntroduction} />
                    {/* 舞蹈培训 */}
                    <Route path="/danceTraining/childrenDance" component={ChildrenDance} />
                    <Route path="/danceTraining" component={DanceTraining} />
                    <Redirect to="/home" />
                </Switch>
            </main>
        )
    }
}