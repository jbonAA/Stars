
export const selectReviewsForRestaurant = (restaurant) => {
    return restaurant.reviewIds
}
export const selectRestaurant = ({restaurants}, restaurantId) => {
    return restaurants[restaurantId] || {reviewIds: [] };
}

export const asArray = ({restaurants}) => (
    Object.keys(restaurants).map(key => restaurants[key])
);
