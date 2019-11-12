export const fetchRestaurants = data => (
    $.ajax({
        method: "GET",
        url: "api/restaurants",
        data: {
            data
        }
    })
)

export const fetchRestaurant = id => (
    $.ajax({
        method: "GET",
        url: `api/restaurants/${id}`
    })
);

export const createReview = review => {

    return (
    $.ajax({
        method: "POST",
        url: "api/reviews",
        data: {review}
    })
)
}