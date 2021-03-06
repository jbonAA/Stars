import React from 'react';
import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import Login from './login';

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    last: (window.location.hash.slice(1))

})

const mapDispatchToProps = dispatch => ({
    login: (formUser) => dispatch(login(formUser)),
    clearErrors: () => dispatch(clearErrors)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)