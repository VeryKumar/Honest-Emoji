Rails.application.routes.draw do
  resources :chat_rooms, only: [:index, :create, :show]
  resources :messages, only: [:create]
   # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

   mount ActionCable.server => '/cable'
end
