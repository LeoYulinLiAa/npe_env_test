Rails.application.routes.draw do

  resources :users, only: %i[create show index] do
    resources :todos, only: %i[index]
  end
  resources :todos, only: %i[create update show]
  resources :sessions, only: %i[create destroy]

end
