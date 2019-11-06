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
        url: `api/restaurant/${id}`
    })
);
