class TweetsController < ApplicationController
  before_action :require_logged_in!

  def create
    # simulate latency
    sleep(1)

    @tweet = current_user.tweets.build(tweet_params)

    # Modified here to render the tweet instead of changing the page. This might cause problems?
    if @tweet.save
      render json: @tweet
    else
      # Lazy: even respond with JSON to invalid HTML request.
      render json: @tweet.errors.full_messages, status: 422
    end
  end

  def show

    if current_user.nil?
      # let them log in
      redirect_to new_session_url
      return
    end

    @tweet = Tweet.find(params[:id])

    respond_to do |format|
      format.html { render :show }
      format.json { render :show }
    end
  end

  private
  def tweet_params
    params.require(:tweet).permit(:content, mentioned_user_ids: [])
  end
end
