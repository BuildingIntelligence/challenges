require 'sinatra/base'

class LoginPage < Sinatra::Base
	set :public_folder, File.dirname(__FILE__) + '/public'

	get('/') do
		erb :index
	end

	post('/login') do
		if (user_params["email"] == "admin@example.com" && user_params["password"] == "password123")
			[200, "success"]
		else
			[400, "failure"]
		end
	end

end

def user_params
  permitted_fields = ["email", "password"]
  params["user"].select {|k,v| permitted_fields.include?(k)}
end
