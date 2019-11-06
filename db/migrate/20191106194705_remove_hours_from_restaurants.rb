class RemoveHoursFromRestaurants < ActiveRecord::Migration[5.2]
  def change
    remove_column :restaurants, :hours
  end
end
