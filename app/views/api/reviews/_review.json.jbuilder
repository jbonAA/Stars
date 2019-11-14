json.extract! review, :id, :title, :description, :stars, :restaurant_id, :user_id
json.username review.user.first_name
json.total review.user.reviews.length