import { connect } from 'react-redux';
import { asArray } from '../../reducers/selectors';
import Search from './search'

const mapStateToProps = (state) => ({
    restaurants: asArray(state.entities.restaurants)
})

export default connect(mapStateToProps, null)(Search)
