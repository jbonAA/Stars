import { connect } from 'react-redux';
import ReviewIndex from './review_index';


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


export default connect(mapStateToProps, null)(ReviewIndex)