import React from 'react';
//refactor
// import RestaurantIndex from './restaurant_index';


import HomeContainer from '../home/home_container'
import Filter from '../nav_bar/filter';
import IndexDropdown from '../nav_bar/index-dropdown';

class Search extends React.Component {
    constructor(props){
        super(props)
        
    }

    render() {
        let display;
        if (this.props.restaurants){
            display = (
                <div>
                    <Filter
                        restaurants = {this.props.restaurants}
                        loc={this.props.location.query}
                        fetchRestaurants={this.props.fetchRestaurants}
                        fetchRestaurant={this.props.fetchRestaurant}
                    />
                </div>
            )
        }else{
            display = null
        }

        return (
            <div>
                <HomeContainer />
                <IndexDropdown />
                {/* <br/>
                <br/> */}
                {display}
            </div>
        )
    }
}
export default Search;