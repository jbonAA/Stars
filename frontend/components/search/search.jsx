import React from 'react';
import RestaurantIndex from './restaurant_index';
// import Filter from '../nav_bar/filter';
import HomeContainer from '../home/home_container'

class Search extends React.Component {
    constructor(props){
        super(props)
        this.props.fetchRestaurants()
    }

    componentDidMount() {
        this.props.fetchRestaurants()
    }

    render() {
        let display;
        if (this.props.restaurants){
            display = (
                <div className="search-restaurant-index">
                    <RestaurantIndex restaurants={this.props.restaurants} />
                </div>
            )
        }else{
            display = null
        }
        return (
            <div>
                <HomeContainer />
                {/* <Filter /> */}
                <br/>
                <br/>
                {display}
            </div>
        )
    }
}
export default Search;