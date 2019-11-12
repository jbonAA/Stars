class Api::ReviewsController < ApplicationController

    def create
        @review = current_user.reviews.new(review_params)
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def show
        @review = Review.find_by(id: params[:id])
        if @review
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end







    private

    def review_params
        params.require(:review).permit(:title, :description, :stars, :restaurant_id, :user_id)
    end

end
