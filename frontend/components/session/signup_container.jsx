import { connect } from 'react-redux';
import { signUp, clearErrors } from '../../actions/session_actions'
import Signup from './signup'

const mapStateToProps = (state) => ({
    errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
    signUp: formUser => dispatch(signUp(formUser)),
    clearErrors: () => dispatch(clearErrors)
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup)