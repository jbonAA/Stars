import React from 'react';
import Welcome from './welcome';
import {logout} from '../../actions/session_actions';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {    
    return (
        {currentUser: state.session.id,
        user: state.entities.users[state.session.id]}
    )
}

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)