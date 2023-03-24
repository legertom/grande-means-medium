class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save 
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show 
        @user = User.find_by(id: params[:id])
        if @user 
            render :show
        else
            render json: ["User does not exist"], status: 404
        end
    end
    def destroy
        User.find(params[:id]).destroy
      end
    
    def update
        @user = User.find_by(id: params[:id])
        if @user.update(user_params)
            render :show
        else
            render json:@user.errors.full_messages, status: 422
        end
    end

    def index 
        @users = User.select("users.*, followings.id as follow_id , followed_id,posts ").left_joins(:followings,:posts).all
        render json: @users
    end

    def user_params 
        params.require(:user).permit(:username, :email, :password)
    end

end