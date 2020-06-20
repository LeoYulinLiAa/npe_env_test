class CreateTodos < ActiveRecord::Migration[5.2]
  def change
    create_table :todos do |t|
      t.references :user, foreign_key: true, null: false
      t.string :content, null: false
      t.boolean :done, null: false

      t.timestamps null: false
    end
  end
end
