Rails.application.routes.draw do
  root 'root#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  namespace :api do
  namespace :v1 do
    get 'message', to: 'message#index'
    resources :message, only: [:index]
  end
end
  # Defines the root path route ("/")
  # root "articles#index"
  
end
