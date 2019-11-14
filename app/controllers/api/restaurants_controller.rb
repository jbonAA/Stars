class Api::RestaurantsController < ApplicationController

    def index
        @restaurants = Restaurant.all
        render :index
    end

    def show
        @restaurant = Restaurant.with_attached_photos.find(params[:id])
        render :show
    end

    def restaurant_params
        params.require(:restaurant).permit(photos: [])
    end

end
