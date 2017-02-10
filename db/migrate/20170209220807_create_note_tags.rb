class CreateNoteTags < ActiveRecord::Migration
  def change
    create_table :note_tags do |t|
      t.integer :note_id
      t.integer :tag_id 
      t.timestamps
    end
  end
end
