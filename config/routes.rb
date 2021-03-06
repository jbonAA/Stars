Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :restaurants, only: [:index, :show]
    resources :reviews, only: [:create, :destroy, :show]
    resource :session, only: [:create, :destroy]
  end

  resources :construction, only: [:index]

end
