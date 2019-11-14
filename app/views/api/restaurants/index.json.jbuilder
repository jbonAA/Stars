@restaurants.each do |restaurant|
    json.set! restaurant.id do 
        json.partial! 'restaurant', restaurant: restaurant
        json.photoUrls restaurant.photos.map { |file| url_for(file) }
        json.reviewIds restaurant.reviews.map { |el| el.stars }
    end
end
