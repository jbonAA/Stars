import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ProtectedRoute } from '../util/route_util'
import LoginContainer from './session/login_container'
import SignupContainer from './session/signup_container';
import NavBarContainer from './nav_bar/nav_bar_container'
import Footer from './nav_bar/footer';
import HomeContainer from './home/home_container';

const App = () => (
    <div>
        <Switch>
            {/* <AuthRoute exact path="/" component={GreetingContainer} /> */}
            <Route exact path="/" component={HomeContainer} />
            <ProtectedRoute path="/login" component={LoginContainer} />
            <ProtectedRoute path="/signup" component={SignupContainer} />
            {/* <Route path="/" component={Footer} /> */}
            <Redirect to="/" />
        </Switch>
    </div>
)

export default App