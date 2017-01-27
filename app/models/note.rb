class Note < ActiveRecord::Base
  validates :content, presence: true

  has_many :tags

end