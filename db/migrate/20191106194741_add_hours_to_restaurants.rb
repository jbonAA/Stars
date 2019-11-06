class AddHoursToRestaurants < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :hours, :text, array: true, default: []
  end
end
