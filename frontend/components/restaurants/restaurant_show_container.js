import { connect } from 'react-redux';
import { fetchRestaurant } from '../../actions/restaurant_actions';
import RestaurantShow from './restaurant_show';
import { selectRestaurant, selectReviewsForRestaurant } from '../../reducers/selectors';

const mapStateToProps = (state, { match }) => {
    
    
    const restaurantId = parseInt(match.params.restaurantId);
    const show = selectRestaurant(state.entities, restaurantId);
    const reviews = selectReviewsForRestaurant(state.entities, show)
    // const show = state.entities.restaurants[restaurantId];
    // const reviews = show.reviewIds;

    return {
        restaurantId,
        show,
        reviews 
    };
};

const mapDispatchToProps = dispatch => ({
    fetchRestaurant: id => dispatch(fetchRestaurant(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow)