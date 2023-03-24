
class Api::FollowingsController < ApplicationController

    def index
       @followings = Following.all
       render json: @followings
    end
    def create
        Following.create(following_params)
    end
  
    def user_followings
  
        @followings = Following.where(user_id: params[:user])
  
        users = []
  
        @bookmarks.each do |b|
  
          users << b.user
  
        end
  
        render json: users
  
    end
    
      
    def destroy
        Following.find(params[:id]).destroy
    end
    def destroy_all_following
        Following.delete_all
      end
    private
    def following_params
          params.require(:following).permit(:follower_id, :followed_id, :user_id)
    end
 end
    