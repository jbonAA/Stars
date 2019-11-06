import React from 'react';
import { Link } from 'react-router-dom'

class Filter extends React.Component {
    constructor(props) {
        super(props)
        //pass index of restaurants into props

        this.state = {
            filters: []
            //onclick update filter
        }

        this.handleDelivery = this.handleDelivery.bind(this)
        this.handleTakeout = this.handleTakeout.bind(this)
        this.handlePrice = this.handlePrice.bind(this)
    }

    handleDelivery() {
        //filter index by delivery
    }

    handlePrice() {
        //filter index by price
    }

    handleTakeout() {
        //filter index by takeout
    }

    handleSelection() {
        //add filters to state
    }

    clearFilters() {
        //when user navigates to show page clear filters
    }

    render () {
        //iterate through the most recent element in state array
        //render restaurant items that have that element.true/make frontend calls
        //no need to map and make ajax calls to backend

        const deliveryicon = (<img className="icon2" src="https://img.icons8.com/material/24/000000/delivery--v1.png"></img>)
        const takeouticon = (<img className="icon1" src="https://img.icons8.com/ios-filled/50/000000/take-away-food.png"></img>)
        return(
            <div className="filter-nav-container">
                <div className="filter-nav">
                    <div className="filter-top">
                        <div className="filter-header">
                            <h2>
                                <span className="restaurants">
                                    Restaurants 
                                    <span> in San Francisco, CA</span>
                                </span>
                            </h2>
                            <p>Showing number/total</p>
                        </div>
                        <div className="filter-selector">
                            <div className="split-selector">   
                                <a href="">San Francisco </a>
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
                                <button className="filt">$</button>
                                <button className="filt">$$</button>
                                <button className="filt">$$$</button>
                                <button className="filt">$$$$</button>
                            </div>
                            <div className="cuisine-filters">
                                <button className="filt">American</button>
                                <button className="filt">Breakfast</button>
                                <button className="filt">French</button>
                            </div>
                            <div className="takeout">
                                <button className="filt"> {takeouticon} Takeout</button>
                                <button className="filt"> {deliveryicon} Delivery</button>
                            </div>
                        </div>
                </div>

            </div>
        )
    }

}

export default Filter
