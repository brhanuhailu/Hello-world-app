class Api::V1::MessageController < ApplicationController
    def index
        random_message = Greet.order("RANDOM()").first
        render json: { message: random_message.text}
    end
end
