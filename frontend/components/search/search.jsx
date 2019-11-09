import React from 'react';
//refactor
// import RestaurantIndex from './restaurant_index';


import HomeContainer from '../home/home_container'
import Filter from '../nav_bar/filter';
import IndexDropdown from '../nav_bar/index-dropdown';

class Search extends React.Component {
    constructor(props){
        super(props)
        // debugger
        
    }

    // componentDidMount() {
    //     this.props.fetchRestaurants()
        
    //     if (window.localStorage.getItem(location) === "undefined" ||
    //     ["CA", "NV", "WY"].includes(this.props.location.query)) {
    //         window.localStorage.setItem(location, this.props.location.query)
    //     }
    // }
    //probably erase V
// window.localStorage.getItem(location) !== this.props.location.query)
    // componentDidUpdate(prevProps) {
    //     if (prevProps.location.query !== this.props.location.query){

    //     } 
    // }

    render() {
        let display;
        if (this.props.restaurants){
            display = (
                <div>
                    <Filter
                        restaurants = {this.props.restaurants}
                        loc={this.props.location.query}
                        fetchRestaurants={this.props.fetchRestaurants} />
                </div>
            )
        }else{
            display = null
        }



        //refactor
        // let display;
        // if (this.props.restaurants){
        //     display = (
        //         <div className="search-restaurant-index">
        //             <RestaurantIndex 
        //                 restaurants={this.props.restaurants}
        //                 loc={this.props.location.query} />
        //         </div>
        //     )
        // }else{
        //     display = null
        // }
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