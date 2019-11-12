import { connect } from 'react-redux';
import { fetchRestaurant } from '../../actions/restaurant_actions';
import { selectRestaurant, selectReviewsForRestaurant } from '../../reducers/selectors';
import RestaurantShow from './restaurant_show';
import restaurantReducer from '../../reducers/restaurant_reducer';

const mapStateToProps = (state, { match }) => {
    const restaurantId = parseInt(match.params.restaurantId);
    const show = state.entities.restaurants.restaurant;
    const reviews = state.entities.restaurants.reviews

    // const restaurant = selectRestaurant(state.entities, restaurantId)
    // const reviews = selectReviewsForRestaurant(state.entities, restaurant)
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