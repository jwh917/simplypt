Rails.application.routes.draw do
  
  resources :patient_profiles
  resources :exercises
  resources :appointments
  resources :patients
  resources :physical_therapists
  resources :comp_users


  post "/signup", to: "comp_users#create"

  get "/all_comp_users", to: "comp_users#all"


  get "/email_service", to: "comp_users#email_service"
  get "/email_key", to: "comp_users#email_key"
  get "/exercise_key", to: "comp_users#exercise_key"

  
  
  get "/me", to: "comp_users#show"

  patch "/me", to: "comp_users#update"

  delete "/me", to: "comp_users#destroy"


  post "/login", to: "sessions#create"

  delete "/logout", to: "sessions#destroy"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
