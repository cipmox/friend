class Friend < ApplicationRecord
    validates :first_name, presence: true, length: { minimum: 3, maximum: 50 }
  	validates :last_name, presence: true, length: { minimum: 3, maximum: 50 }
	validates :image, presence: true

	has_one_attached :image 
end
