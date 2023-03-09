Rails.application.routes.draw do
  
  resources :patient_profiles
  resources :exercises
  resources :appointments
  resources :patients
  resources :physical_therapists
  resources :administrators
  resources :comp_users

  # post "/login", to: "sessions#create"

  # delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
