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
        return(
            <div>
                <div className="filter-nav">
                    <h2>Filter Restaurants In San Francisco</h2>
                    <div className="filter-features">
                        <div className="price-filters">
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>
                        <div className="cuisine-filters">
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>
                        <div className="takeout">
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>
                    </div>
                </div>
                

            </div>
        )
    }

}

export default Filter
