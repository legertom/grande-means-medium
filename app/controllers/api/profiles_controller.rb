class Api::ProfilesController < ApplicationController
    def create
        @profile = Profile.new(profile_params)
        if @profile.save 
            render json: @profile
        else
            render json: @profile.errors, status: :unprocessable_entity
        end
    end

    def show 
        @profile = Profile.find_by(user_id: params[:id])
        if @profile
            render json: @profile
        else
            render json: ["User does not exist"], status: 404
        end
    end
    def destroy
        Profile.find(params[:id]).destroy
      end
    
    def update
        @profile = Profile.find_by(user_id: params[:id])
        if @profile.update(profile_params)
            render json: @profile
        else
            render json:@profile.errors.full_messages, status: 422
        end
    end

    def index 
        @profiles = Profile.all
        render json: @profiles
    end

    def profile_params 
        params.require(:profile).permit(:user_id, :bio, :photoUrl, :url)
    end

end
