import React from 'react';
import { logout } from '../../actions/session_actions';
import { connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import Greeting from './greeting';
import {fetchRestaurant} from '../../actions/restaurant_actions'

const mapStateToProps = (state) => {
    return ({ 
        currentUser: state.session.id,
        user: state.entities.users[state.session.id], 
        restaurants: state.entities.restaurants
    })
}

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchRestaurant: (id) => dispatch(fetchRestaurant(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Greeting))