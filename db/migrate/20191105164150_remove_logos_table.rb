class RemoveLogosTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :logos
  end
end
