require 'sinatra'

get '/' do
	"home"
	erb :home
end

get '/about' do
	"About"
end

get '/menu' do
	"menu"
end

get '/contact' do
	"contact"
end

post 'contact' do
	
end


# on this page we have the listing of all the pages. Our separate erbs and variables from our contact page will go on this later