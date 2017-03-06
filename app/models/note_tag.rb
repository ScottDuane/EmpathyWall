class NoteTag < ActiveRecord::Base
  validates :note_id, :tag_id, presence: true
  belongs_to :tag
  belongs_to :note
end
