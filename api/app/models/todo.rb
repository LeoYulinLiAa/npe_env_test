class Todo < ApplicationRecord

  validates :user_id, :content, presence: true
  validates :done, inclusion: { in: [true, false] }

  belongs_to :user
end
