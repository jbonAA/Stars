import { connect } from 'react-redux';
import { asArray } from '../../reducers/selectors';
import Search from './search';
import {fetchRestaurants, fetchRestaurant} from '../../actions/restaurant_actions';

const mapStateToProps = (state) => {
    
    return ({
        restaurants: asArray(state.entities),

    })
}

const mapDispatchToProps = (dispatch) =>  ({
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    fetchRestaurant: (id) => dispatch(fetchRestaurant(id))

})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
