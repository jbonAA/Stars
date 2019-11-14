json.restaurant do
    json.partial! '/api/restaurants/restaurant', restaurant: @restaurant
    json.reviewIds @restaurant.reviews.pluck(:id)
    json.photoUrls @restaurant.photos.map { |file| url_for(file) }
end

@restaurant.reviews.each do |review|
    json.reviews do 
        json.set! review.id do 
            json.partial! 'api/reviews/review', review: review
        end
    end
end

