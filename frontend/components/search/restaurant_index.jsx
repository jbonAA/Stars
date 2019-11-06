import React from 'react';
import RestaurantIndexItem from './restaurant_index_items';

const RestaurantIndex = ({restaurants}) => (
    <div className="inner-restaurant-index">
        {restaurants.map(restaurant => (
            <RestaurantIndexItem
                restaurant={restaurant}
                key={restaurant.id} />
        ))}
    </div>
)

export default RestaurantIndex