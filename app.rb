require 'sinatra'

get '/' do
  erb :index
end

get '/article' do
  erb :index  
end
