import { connect } from 'react-redux';
import { asArray } from '../../reducers/selectors';
import Search from './search';
import {fetchRestaurants} from '../../actions/restaurant_actions';

const mapStateToProps = (state) => {
    return ({
        restaurants: asArray(state.entities),

    })
}

const mapDispatchToProps = (dispatch) =>  ({
    fetchRestaurants: () => dispatch(fetchRestaurants())
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
