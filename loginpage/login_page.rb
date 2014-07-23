require 'sinatra/base'

class LoginPage < Sinatra::Base
	set :public_folder, File.dirname(__FILE__) + '/public'

	get('/') do
		erb :index
	end

	post('/login') do
		puts params[:email]
		puts params[:password]
	end
end