json.restaurant do
    json.partial! '/api/restaurants/restaurant', restaurant: @restaurant
    json.reviewIds @restaurant.reviews.pluck(:id)
end

@restaurant.reviews.each do |review|
    json.reviews do 
        json.set! review.id do 
            json.partial! 'api/reviews/review', review: review
        end
    end
end

