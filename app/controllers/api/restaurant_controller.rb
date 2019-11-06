class Api::RestaurantsController < ApplicationController

    def index
        @restaurant = Restaurant.all
        render :index
    end

    def show
        @restaurant = Restaurant.find(params[:id])
        render :show
    end

end
