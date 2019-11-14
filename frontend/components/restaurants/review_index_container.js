import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { deleteReview, fetchRestaurant} from '../../actions/restaurant_actions'


const mapStateToProps = (state, ownProps) => {
    // let reviews;
    // debugger
    // if (Object.values(state.entities.restaurants.restaurant).length === 0){
    //     reviews = []
    // }else{
    //     reviews = Object.values(state.entities.restaurants.restaurant.reviewIds)
    // }
    
    return ({
        reviews: ownProps.reviews,
        currentUser: state.session.id
    })

}

const mapDispatchToProps = (dispatch) => ({
    delete: (id) => dispatch(deleteReview(id)),
    fetchRestaurant: (id) => dispatch(fetchRestaurant(id))
    
})
export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex)