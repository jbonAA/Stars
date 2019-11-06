class Review < ApplicationRecord
    validates :title, :description, presence: true
    validates :restaurant_id, :user_id, presence: true

    belongs_to :user
    belongs_to :restaurant
end
