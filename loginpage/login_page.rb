require 'sinatra/base'
require 'pry'
class LoginPage < Sinatra::Base
	set :public_folder, File.dirname(__FILE__) + '/public'

	get('/') do
		erb :index
	end

	get('/forgot_password') do
		[200, "forgot password"]
	end

	post('/login') do
		puts "   Email: #{params[:email]}"
		puts "Password: #{params[:password]}"
		
		if (params[:email] =="admin@example.com" && params[:password] == "password123")
			@user = "admin@example.com"
		else
			@error = "Unable to find user, please try again."
		end
		if request.xhr?
			if @user
				status 200
				erb :'partials/_success', layout: false, locals: {user: @user}
			else
				erb :'partials/_failure', layout: false, locals: {error: @error}
			end
		else
			if @user
				[200, "successfully logged in"]
			else
				[400, "Unable to find user."]
			end
		end

	end
end