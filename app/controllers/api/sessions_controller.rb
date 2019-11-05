class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by(email: params['user']['email'])
        if @user && (@user.is_password?(params['user']['password']))
            login(@user)
        else
            render json: ["Invalid email/password combination"], status: 422
        end
    end

    def destroy
        @user = User.find_by(current_user.id)
        if current_user
            logout
            render "api/users/show"
        else
            render json: ["Nobody signed in"], status: 404
        end
    end

end
