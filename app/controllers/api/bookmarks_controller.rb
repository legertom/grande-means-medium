
class Api::BookmarksController < ApplicationController

  def index
    @bookmarks = Bookmark.all
    render json: @bookmarks
  end
    def create
      Bookmark.create(bookmark_params)
    end

    def user_bookmarks

      @bookmarks = Bookmark.where(user_id: params[:user])

      posts = []

      @bookmarks.each do |b|

        posts << b.post

      end

      render json: posts

    end
    
    def destroy
      Bookmark.find(params[:id]).destroy
    end
    def destroy_all
      Bookmark.delete_all
    end
  
    private
      def bookmark_params
        params.require(:bookmark).permit(:post_id, :user_id)
      end
  end
  