Rails.application.routes.draw do


  
  resources :appointments, only: [:index, :create, :destroy]

  resources :comp_users, only: [:create, :show, :update, :destroy]

  resources :exercises, only: [:create]

  resources :recommended_equipments, only: [:create]

  resources :patient_profiles, only: [:index, :show, :create, :update]

  resources :patients, only: [:create, :update, :destroy]

  resources :physical_therapists, only: [:index]

  get "/keysToSimplyPT", to: "comp_users#keysToSimplyPT"

  post "/signup", to: "comp_users#create"

  get "/me", to: "comp_users#show"

  patch "/me", to: "comp_users#update"

  delete "/me", to: "comp_users#destroy"

  post "/login", to: "sessions#create"

  delete "/logout", to: "sessions#destroy"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
