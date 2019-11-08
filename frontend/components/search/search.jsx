import React from 'react';
import RestaurantIndex from './restaurant_index';
// import Filter from '../nav_bar/filter';
import HomeContainer from '../home/home_container'

class Search extends React.Component {
    constructor(props){
        super(props)
        
    }

    componentDidMount() {
        this.props.fetchRestaurants()
        
        if (window.localStorage.getItem(location) === "undefined" ||
        ["CA", "NV", "WY"].includes(this.props.location.query)) {
            window.localStorage.setItem(location, this.props.location.query)
        }
    }
// window.localStorage.getItem(location) !== this.props.location.query)
    // componentDidUpdate(prevProps) {
    //     if (prevProps.location.query !== this.props.location.query){

    //     } 
    // }

    render() {
        let display;
        if (this.props.restaurants){
            display = (
                <div className="search-restaurant-index">
                    <RestaurantIndex 
                        restaurants={this.props.restaurants}
                        loc={this.props.location.query} />
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