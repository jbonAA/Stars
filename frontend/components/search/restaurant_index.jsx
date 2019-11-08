import React from 'react';
import RestaurantIndexItem from './restaurant_index_items';
import Filter from '../nav_bar/filter';
//react component
//listen using 
//maybe ui reducer for default location & handles
const RestaurantIndex = ({restaurants}) => {
    let filtered_restaurants = []
    restaurants.forEach((rest) => {
        if (rest.state === window.localStorage.getItem(location)) {
            filtered_restaurants.push(rest)
        }
    })
    

    return (
    <div className="inner-restaurant-index">
        <Filter total={filtered_restaurants.length}/>
        <p className="all-results">All Results</p>
        {filtered_restaurants.map(restaurant => (
            
            <div> <RestaurantIndexItem
                restaurant={restaurant}
                key={restaurant.id} />
                <br/>
            </div>
        ))}
    </div>
    )
}

export default RestaurantIndex