export const selectRestaurant = ({restaurants}, restuarantId) => {
    return restaurants[restuarantId] || {reviewIds: [] };
}

export const asArray = ({restaurants}) => (
    Object.keys(restaurants).map(key => restaurants[key])
);