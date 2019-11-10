import { connect } from 'react-redux';
import { fetchRestaurant } from '../../actions/restaurant_actions';
import { selectRestaurant } from '../../reducers/selectors';
import RestaurantShow from './restaurant_show';

const mapStateToProps = (state, { match }) => {
    const restaurantId = parseInt(match.params.restaurantId);
    const restaurant = selectRestaurant(state.entities, restaurantId);
    return {
        restaurantId,
        restaurant
    };
};

const mapDispatchToProps = dispatch => ({
    fetchRestaurant: id => dispatch(fetchRestaurant(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantShow)