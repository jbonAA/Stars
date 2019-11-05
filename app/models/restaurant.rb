class Restaurant < ApplicationRecord
    validates :name, :description, :website, presence: true
    validates :city, :state, :established, presence: true
    validates :phone, :hours, presence: true
    validates :address, presence: true, uniqueness: true

end
