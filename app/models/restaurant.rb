class Restaurant < ApplicationRecord
    validates :name, :description, :website, presence: true
    validates :city, :state, presence: true
    validates :phone, :hours, presence: true
    validates :address, presence: true, uniqueness: true

    has_many :reviews
    # has_many_attached :photos

    def average_rating
        reviews.average(:rating)
    end
end
