import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { deleteReview, fetchRestaurant} from '../../actions/restaurant_actions'


const mapStateToProps = (state) => {
    let reviews;
    if (Object.values(state.entities.restaurants).length === 0){
        reviews = []
    }else{
        reviews = Object.values(state.entities.restaurants.reviews)
    }

    return ({
        reviews: reviews,
        currentUser: state.session.id
    })
}

const mapDispatchToProps = (dispatch) => ({
    delete: (id) => dispatch(deleteReview(id)),
    fetchRestaurant: (id) => dispatch(fetchRestaurant(id))
    
})
export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex)