import React from 'react';
import RestaurantIndexItem from './restaurant_index_items';
// import Filter from '../nav_bar/filter';


const RestaurantIndex = ({restaurants, filters}) => {
    // debugger
    let filtered_restaurants = []
    console.log(restaurants)
    restaurants.forEach((rest) => {
        if (rest.state === window.localStorage.getItem(location)){
            filtered_restaurants.push(rest)
        }
    })

    let further_filt_restaurants = []
    filtered_restaurants.forEach((rest) => {
        let included = true;
        Object.keys(JSON.parse(localStorage.getItem(filters))).forEach((key) => {
            console.log(rest[key])
            if (rest[key] !== JSON.parse(localStorage.getItem(filters))[key]){
                included = false
            } 
        })
        if (included === true){
            further_filt_restaurants.push(rest)
        }
    })



    //         if ((Object.keys(JSON.parse(localStorage.getItem(filters)))).length > 0){
    //             Object.keys(JSON.parse(localStorage.getItem(filters))).forEach((key) => {
    //                 let check = JSON.parse(localStorage.getItem(filters))[key]
    //                 if (rest.key === check){
    //                     filtered_restaurants.push(rest)
    //                 }
    //             })
    //         }else{
    //             filtered_restaurants.push(rest)
    //         }
    //     }
    // })    
    // debugger

    return (
    <div className="inner-restaurant-index">
        {/* <Filter total={filtered_restaurants.length}/> */}
        <p className="all-results">All Results</p>
        {further_filt_restaurants.map(restaurant => (
            
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