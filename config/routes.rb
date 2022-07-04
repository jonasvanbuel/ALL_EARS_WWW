Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#coming_soon'
  get 'demo', to: 'pages#demo'
  # get 'virginia_overton_2022', to: 'pages#exhibition'
end
