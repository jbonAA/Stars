import React from 'react';
import RestaurantIndexItem from './restaurant_index_items';
import Filter from '../nav_bar/filter';

const RestaurantIndex = ({restaurants}) => {
    return (
    <div className="inner-restaurant-index">
        <Filter />
        <p className="all-results">All Results</p>
        {restaurants.map(restaurant => (
            <div> <RestaurantIndexItem
                restaurant={restaurant}
                total={restaurants.length}
                key={restaurant.id} />
                <br/>
            </div>
        ))}
    </div>
    )
}

export default RestaurantIndex