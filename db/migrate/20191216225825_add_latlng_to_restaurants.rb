class AddLatlngToRestaurants < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :latlng, :text, array: true, default: []
  end
end
