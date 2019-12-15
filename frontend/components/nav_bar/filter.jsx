import React from 'react';
import { Link } from 'react-router-dom';
//refactor
import RestaurantIndex from '../search/restaurant_index';
// import IndexMap from '../map/index_map';


class Filter extends React.Component {
    constructor(props) {
        super(props)


        // this.state = {
        //     location: localStorage.getItem(location),
        //     takeout: "",
        //     delivery: "",
        //     price: "",
        //     description: ""
        // }


        this.filters = {}


        this.handleTakeout = this.handleTakeout.bind(this)
        this.handlePrice = this.handlePrice.bind(this)
        this.handleCuisine = this.handleCuisine.bind(this)
    }


    componentDidMount() {
        this.props.fetchRestaurants()

        if (window.localStorage.getItem(location) === "undefined" ||
            ["CA", "NV", "WY"].includes(this.props.loc)) {
            window.localStorage.setItem(location, this.props.loc)
        }
    }

    handlePrice(e) {
        e.preventDefault();
        if (e.currentTarget.id === "green") {
            this.filters[e.target.value] = ""
            e.currentTarget.id = ""
            window.localStorage.setItem(this.filters, JSON.stringify(this.filters))
            this.forceUpdate()
        } else {
            e.currentTarget.id = "green"
            
            this.filters[e.target.value] = e.target.textContent
            window.localStorage.setItem(this.filters, JSON.stringify(this.filters))
            this.forceUpdate()
        }
    }

    handleTakeout(e) {
        e.preventDefault();
        if (e.currentTarget.id === "green"){
            this.filters[e.target.value] = ""
            e.currentTarget.id = ""
            window.localStorage.setItem(this.filters, JSON.stringify(this.filters))
            this.forceUpdate()
        }else{
            e.currentTarget.id="green"
            this.filters[e.target.value] = true
            window.localStorage.setItem(this.filters, JSON.stringify(this.filters))
            this.forceUpdate()
        }
    }

    handleCuisine(e) {
        e.preventDefault();
        if (e.currentTarget.id === "green") {
            this.filters[e.target.value] = ""
            e.currentTarget.id = ""
            window.localStorage.setItem(this.filters, JSON.stringify(this.filters))
            this.forceUpdate()
        } else {
            e.currentTarget.id = "green"
            this.filters[e.target.value] = e.target.textContent
            window.localStorage.setItem(this.filters, JSON.stringify(this.filters))
            this.forceUpdate()
        }
    }

    clearFilters() {
        //set object from local storage to be empty on click to show
    }

    render () {
        //iterate through the most recent element in state array
        //render restaurant items that have that element.true/make frontend calls
        //no need to map and make ajax calls to backend
        debugger



        // let map;
        // let locat;
        // if(this.props.restaurants.length > 0){
        //     if(localStorage.getItem(location) === "CA"){
        //         locat = "San Francisco, CA"
        //     }else if(localStorage.getItem(location) === "NV"){
        //         locat = "Las Vegas, NV"
        //     }else{
        //         locat = "Jackson, WY"
        //     }

        //     map = (
        //         <div>
        //             <IndexMap restaurants={this.props.restaurants}
        //             location={locat} />
        //         </div>
        //     )
        // }else{
        //     map = null
        // }
        



        let state = window.localStorage.getItem(location)
        let display;
        if(state === 'CA'){
            display = "California"
        }else if (state === 'NV') {
            display = "Nevada"
        }else if (state === 'WY'){
            display="Wyoming"
        }

        
        let number = window.localStorage.getItem(number)
        let total = window.localStorage.getItem(total)
        const deliveryicon = (<img className="icon2" src="https://img.icons8.com/material/24/000000/delivery--v1.png"></img>)
        const takeouticon = (<img className="icon1" src="https://img.icons8.com/ios-filled/50/000000/take-away-food.png"></img>)
        return(
        <div>
            <div className="filter-nav-container">
                <div className="filter-nav">
                    <div className="filter-top">
                        <div className="filter-header">
                            <h2>
                                <span className="restaurants">
                                    Restaurants in 
                                    <span> {display}</span>
                                </span>
                            </h2>
                            <p className="all-results">All Results</p>
                        </div>
                        <div className="filter-selector">
                            <div className="split-selector">   
                                <a href="">{display} </a>
                                <p className="no-margin">></p>
                                <a href="">Restaurants</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="filter-features">
                    <div className="each-filter-feature">
                        <button className="filt">All Filters</button>
                        <div className="price-filters">
                            <button className="filt" onClick={this.handlePrice} value="price">$</button>
                            <button className="filt" onClick={this.handlePrice} value="price">$$</button>
                            <button className="filt" onClick={this.handlePrice} value="price">$$$</button>
                            <button className="filt" onClick={this.handlePrice} value="price">$$$$</button>
                        </div>
                        <div className="cuisine-filters">
                            <button className="filt" onClick={this.handleCuisine} value="description">American</button>
                            <button className="filt" onClick={this.handleCuisine} value="description">Breakfast</button>
                            <button className="filt" onClick={this.handleCuisine} value="description">French</button>
                        </div>
                        <div className="takeout">
                            <button className="filt" onClick={this.handleTakeout} value="takeout">{takeouticon}Takeout</button>
                            <button className="filt" onClick={this.handleTakeout} value="delivery">{deliveryicon}Delivery</button>
                        </div>
                    </div>
                </div>
            </div>
                <div id="index-items">
                <RestaurantIndex className="search-restaurant-index"
                    restaurants={this.props.restaurants}
                    loc={this.props.loc}
                    filters={this.filters}
                    fetchRestaurant={this.props.fetchRestaurant}
                    />

                {/* {map} */}
                </div>
        </div>
        )
    }

}

export default Filter
