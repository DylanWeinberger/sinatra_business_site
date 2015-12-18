require 'sinatra'
require 'sendgrid-ruby'

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
	erb :contact
end

post '/contact' do

	puts '******************'
	puts params.inspect
	@name = params[:name]
	@email = params[:email]
	erb :contactSuccess
end

get'/contactSuccess' do
		erb :contactSuccess
end


# on this page we have the listing of all the pages. Our separate erbs and variables from our contact page will go on this later