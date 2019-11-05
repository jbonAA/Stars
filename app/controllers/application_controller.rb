class ApplicationController < ActionController::Base
    helper_method :logged_in?, :current_user

    def current_user
        @current_user ||= User.find_by_session_token(session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def require_log_in
        #probably include this with protected routes
    end

    def login(user)
        user.reset_session_token
        session[:session_token] = user.session_token
        @current_user = user

    end

    def logout
        current_user.try(:reset_session_token)
        session[:session_token] = nil
    end

end
