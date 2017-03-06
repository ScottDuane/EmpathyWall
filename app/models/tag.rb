class Tag < ActiveRecord::Base
  validates :name, :occurrences, presence: true
  has_many :notes
end
