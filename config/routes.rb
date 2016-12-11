Rails.application.routes.draw do
  root 'page#index'
  get 'page/index'
  get '/about', to: 'page#about'
  get '/writing', to: 'page#writs'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
