Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]

    resources :regions, only: [:index, :show] do
      resources :neighborhoods, only: [:index]
    end

    resources :neighborhoods, only: [:show] do
      resources :reviews, only: [:index, :create, :destroy]
      resources :images, only: [:index, :create]
    end
  end

  root to: 'static_pages#root'
end
