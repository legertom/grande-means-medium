Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users
    resources :posts
    resources :profiles
    resources :bookmarks
    resources  :followings
    
    post "/user_bookmarks", to: "bookmarks#user_bookmarks"
    delete "/destroy_all", to: "bookmarks#destroy_all"
    delete "/destroy_all_following", to: "followings#destroy_all_following"
    
    resource :session, only: [:create, :destroy]
    
  end
  
end
