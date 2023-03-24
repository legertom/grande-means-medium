class Api::PostsController < ApplicationController
    before_action :set_post,  only: [:show, :update, :destroy]
    
    def index 
      
      @posts = Post.select("posts.*, bookmarks.id as post_id,bookmarks.user_id").left_joins(:bookmarks).all
      # @posts.bookmarks
      render json: @posts
    end
    def show
      render json: @post
    end
    def create
      @post = Post.new(post_params)
      if @post.save
          render json: @post
      else
          render json: @post.errors, status: :unprocessable_entity
      end
    end
    def update
      if @post.update(post_params)
          render json: @post
      else
          render json: @post.errors, status: :unprocessable_entity
      end
    end
    def destroy
      Post.find(params[:id]).destroy
    end
      private
          def set_post
              @post = Post.find(params[:id])
          end
  
          def post_params
              params.require(:post).permit(:id, :title, :body , :author_id, :user_id , :username , :photoUrl)
          end
  
  
  end
  