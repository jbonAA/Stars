import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../../actions/restaurant_actions';

const mapStateToProps = (state) => {
    return ({
        errors: state.errors.session,
        userId: state.session.id,
    })
}

const mapDispatchToProps = (dispatch) => ({
    createReview: (review) => dispatch(createReview(review)),
    clearErrors: () => dispatch(clearErrors)
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)

