import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ProtectedRoute } from '../util/route_util'
import LoginContainer from './session/login_container'
import SignupContainer from './session/signup_container';
import NavBarContainer from './nav_bar/nav_bar_container'
import Footer from './nav_bar/footer';
import HomeContainer from './home/home_container';
import SearchContainer from './search/search_container';
import RestaurantShowContainer from './restaurants/restaurant_show_container'
import ReviewFormContainer from './restaurants/review_form_container'
import ConstructionComponent from '../components/construction/construction'

const App = () => (
    <div>
  
        <Switch>
            {/* <AuthRoute exact path="/" component={GreetingContainer} /> */}
            <Route exact path="/construction" component={ConstructionComponent} />
            <Route exact path="/restaurants/:restaurantId/review/new" component={ReviewFormContainer} />
            <Route exact path="/restaurants/:restaurantId" component={RestaurantShowContainer} />
            <Route exact path="/restaurants" component={SearchContainer} />
            <Route exact path="/" component={HomeContainer} />
            <ProtectedRoute path="/login" component={LoginContainer} />
            <ProtectedRoute path="/signup" component={SignupContainer} />
            {/* <Route path="/" component={Footer} /> */}
            <Redirect to="/" />
        </Switch>
    </div>
)

export default App