import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import HomePage from '../views/homePage/homePage';
import BrandIntroduction from '../views/brandIntroduction/brandIntroduction';

export default class router extends Component {
    render() {
        return (
            <main>
                <Route path="/home" component={HomePage} />
                <Route path="/brandIntroduction" component={BrandIntroduction} />
                <Redirect to="/home" />
            </main>
        )
    }
}