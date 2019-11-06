class RemoveEstablishedFromRestaurants < ActiveRecord::Migration[5.2]
  def change
    remove_column :restaurants, :established
  end
end
