class Api::RestaurantsController < ApplicationController

    def index
        @restaurants = Restaurant.all
        if params[:location]
            cookies[:location] = params[:location] || "CA"
        end
        render :index
        
    end

    def show
        @restaurant = Restaurant.find(params[:id])
        render :show
    end

end
