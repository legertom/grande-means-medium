class Post < ApplicationRecord
    has_many :bookmarks
    belongs_to :user
end
