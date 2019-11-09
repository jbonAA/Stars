import React from 'react';
import { Link } from 'react-router-dom';
//refactor
import RestaurantIndex from '../search/restaurant_index';


class Filter extends React.Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     takeout: ""
        // }

        this.filters = {}

        this.handleDelivery = this.handleDelivery.bind(this)
        this.handleTakeout = this.handleTakeout.bind(this)
        this.handlePrice = this.handlePrice.bind(this)
    }

    componentDidMount() {
        this.props.fetchRestaurants()

        if (window.localStorage.getItem(location) === "undefined" ||
            ["CA", "NV", "WY"].includes(this.props.loc)) {
            window.localStorage.setItem(location, this.props.loc)
        }
    }

    handleDelivery() {
        //filter index by delivery
    }

    handlePrice() {
        //filter index by price
    }

    handleTakeout(e) {
        e.preventDefault();
        // debugger
        e.currentTarget.id="green"
        this.filters[e.target.value] = true
        window.localStorage.setItem(this.filters, JSON.stringify(this.filters))
        this.forceUpdate()
    }

    handleCuisine() {
        //add filters to state
    }

    clearFilters() {
        //set object from local storage to be empty on click to show
    }

    render () {
        //iterate through the most recent element in state array
        //render restaurant items that have that element.true/make frontend calls
        //no need to map and make ajax calls to backend
        // debugger
        let state = window.localStorage.getItem(location)
        let display;
        if(state === 'CA'){
            display = "California"
        }else if (state === 'NV') {
            display = "Nevada"
        }else if (state === 'WY'){
            display="Wyoming"
        }

        
            
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
                            <p>Showing number/{this.props.total}</p>
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
                            <button className="filt" onClick={this.handlePrice}>$</button>
                            <button className="filt" onClick={this.handlePrice}>$$</button>
                            <button className="filt" onClick={this.handlePrice}>$$$</button>
                            <button className="filt" onClick={this.handlePrice}>$$$$</button>
                        </div>
                        <div className="cuisine-filters">
                            <button className="filt" onClick={this.handleCuisine}>American</button>
                            <button className="filt">Breakfast</button>
                            <button className="filt">French</button>
                        </div>
                        <div className="takeout">
                            <button className="filt" onClick={this.handleTakeout} value="takeout"> {takeouticon} Takeout</button>
                            <button className="filt" value="delivery"> {deliveryicon} Delivery</button>
                        </div>
                    </div>
                </div>
            </div>
                <div>
                <RestaurantIndex className="search-restaurant-index"
                    restaurants={this.props.restaurants}
                    loc={this.props.loc}
                    filters={this.filters}
                    />

                </div>
        </div>
        )
    }

}

export default Filter
