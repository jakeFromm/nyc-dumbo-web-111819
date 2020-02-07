Rails.application.routes.draw do
  
  resources :snacks, only: [:index, :create]
  resources :users, only: [:show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end