//include props to pass in fetch from database
//Allow people to search for by restaurant name
//also allow links to filter

import React from 'react';
import Home from './home';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';

// const mapStateToProps = (state) => ({
//     currentUser: state.entities.users[state.session.id]
// })

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(null, mapDispatchToProps)(Home)
