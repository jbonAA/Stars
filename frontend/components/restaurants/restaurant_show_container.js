import { connect } from 'react-redux';
import { fetchRestaurant } from '../../actions/restaurant_actions';
import RestaurantShow from './restaurant_show';
import restaurantReducer from '../../reducers/restaurant_reducer';

const mapStateToProps = (state, { match }) => {
    
    const restaurantId = parseInt(match.params.restaurantId);
    const show = state.entities.restaurants.restaurant;
    const reviews = state.entities.restaurants.reviews
   
    

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