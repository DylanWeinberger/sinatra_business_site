require 'sinatra'
require 'sendgrid-ruby'

get '/' do
	"home"
	erb :home
end

get '/about' do
	erb :about
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
	@comment = params[:textarea]
	mail_to(@email, @comment)
	
erb :contactSuccess
end

get'/contactSuccess' do
		erb :contactSuccess
end



def mail_to(email, text)
	
	client = SendGrid::Client.new do |c|   
	c.api_key = ENV['SENDGRID_API_KEY'] 
	end

	mail = SendGrid::Mail.new do |m|   
	m.to = 'djweinbe@gmail.com'   
	m.from = @email  
	m.subject = 'Hello Jabba!'   
	m.text = text
	end
	
res = client.send(mail) 
puts res.code 
puts res.body
end

# on this page we have the listing of all the pages. Our separate erbs and variables from our contact page will go on this later