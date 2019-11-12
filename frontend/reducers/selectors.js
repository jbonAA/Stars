
export const selectReviewsForRestaurant = ({restaurants, reviews}, restaurant) => {
    return restaurant.reviewIds.map(reviewId => reviews[reviewId])
}
export const selectRestaurant = ({restaurants}, restuarantId) => {
    return restaurants[restuarantId] || {reviewIds: [] };
}

export const asArray = ({restaurants}) => (
    Object.keys(restaurants).map(key => restaurants[key])
);
