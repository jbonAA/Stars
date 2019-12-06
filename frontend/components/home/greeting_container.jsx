import React from 'react';
import { logout } from '../../actions/session_actions';
import { connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import Greeting from './greeting';

const mapStateToProps = (state) => {
    return ({ 
        currentUser: state.session.id,
        user: state.entities.users[state.session.id], 
        restaurants: state.entities.restaurants
    })
}

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Greeting))