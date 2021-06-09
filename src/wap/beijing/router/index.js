import React, { Component, Suspense, lazy } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const Loading = <div>骨架屏</div>
export default class wapBeijingRouter extends Component {
    render() {
        return (
            <Suspense fallback={Loading}>
                <Switch>
                    <Route path="/site/wap/beijing/home" component={lazy(() => import('../views'))} />
                    <Route path="/site/wap/beijing/brandIntroduction" component={lazy(() => import('../views/brandIntroduction'))} />
                    <Route path="/site/wap/beijing/teachersList" component={lazy(() => import('../views/teachersList'))} />
                    <Route path="/site/wap/beijing/studentShow" component={lazy(() => import('../views/studentShow'))} />
                    <Route path="/site/wap/beijing/newsList" component={lazy(() => import('../views/newsList'))} />
                    <Redirect to="/site/wap/beijing/home" />
                </Switch>
            </Suspense>
        )
    }
}
