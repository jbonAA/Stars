import React from 'react';
import { Route, AuthRoute } from 'react-router-dom';
import LoginContainer from './session/login_container'
import SignupContainer from './session/signup_container';
import NavBarContainer from './nav_bar/nav_bar_container'
import Footer from './nav_bar/footer';
import HomeContainer from './home/home_container';

const App = () => (
    <div>
        {/* <AuthRoute exact path="/" component={GreetingContainer} /> */}
        <Route exact path="/" component={HomeContainer} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/signup" component={SignupContainer} />
        {/* <Route path="/" component={Footer} /> */}
        
    </div>
)

export default App