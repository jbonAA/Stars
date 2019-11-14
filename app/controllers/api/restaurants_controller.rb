class Api::RestaurantsController < ApplicationController

    def index
        @restaurants = Restaurant.with_attached_photos.all
        render :index
    end

    def show
        @restaurant = Restaurant.find(params[:id])
        render :show
    end

    def restaurant_params
        params.require(:restaurant).permit(photos: [])
    end

end
