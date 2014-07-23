require 'sinatra/base'

class LoginPage < Sinatra::Base
	set :public_folder, File.dirname(__FILE__) + '/public'

	get('/') do
		erb :index
	end

	post('/login') do
		puts "   Email: #{params[:email]}"
		puts "Password: #{params[:password]}"

		if true
			[200, "success"]
		else
			[400, "failure"]
		end
	end
end