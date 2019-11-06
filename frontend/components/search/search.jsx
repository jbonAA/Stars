import React from 'react';
import RestaurantIndex from './restaurant_index';

const Search = ({restaurants}) => (
    <div className="search-restaurant-index">
        <RestaurantIndex restaurants = {restaurants} />
    </div>
)

export default Search;