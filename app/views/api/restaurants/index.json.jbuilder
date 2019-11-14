@restaurants.each do |restaurant|
    json.set! restaurant.id do 
        json.partial! 'restaurant', restaurant: restaurant
        json.photoUrls restaurant.photos.map { |file| url_for(file) }
        json.reviewIds []
    end
end
