import React from 'react';
import RestaurantIndexItem from './restaurant_index_items';
// import Filter from '../nav_bar/filter';


const RestaurantIndex = ({restaurants, filters, fetchRestaurant}) => {
    
    let filtered_restaurants = []
    debugger

    restaurants.forEach((rest) => {
        if (rest.state === window.localStorage.getItem(location)){
            filtered_restaurants.push(rest)
        }
    })

    let further_filt_restaurants = []
    filtered_restaurants.forEach((rest) => {
        let included = true;
        Object.keys(JSON.parse(localStorage.getItem(filters))).forEach((key) => {
            if(key.toString() === "description"){
                if ((JSON.parse(localStorage.getItem(filters)))[key] === ""){
                    included = true
                }else{
                    console.log(rest[key])
                    if (rest[key].includes((JSON.parse(localStorage.getItem(filters))[key]))){
                        included = true
                    }else{
                        included = false
                    }
                }
            }else{
                if ((JSON.parse(localStorage.getItem(filters)))[key] === ""){
                    included = true
                }else{
                    if (rest[key] !== JSON.parse(localStorage.getItem(filters))[key]){
                        included = false
                    }
                }
            }
        })
        if (included === true){
            further_filt_restaurants.push(rest)
        }
    })
    debugger
    return (
    <div id="center">
        <div className="inner-restaurant-index">
            {/* <Filter total={filtered_restaurants.length}/> */}
            {further_filt_restaurants.map(restaurant => (
                <div> <RestaurantIndexItem
                    restaurant={restaurant}
                    photos={restaurant.photoUrls}
                    key={restaurant.id}
                    fetchRestaurant={fetchRestaurant}
                />
                    <br/>
                </div>
            ))}
        </div>
    </div>
    )
}

export default RestaurantIndex