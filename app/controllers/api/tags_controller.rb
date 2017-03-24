class Api::TagsController < ApplicationController
  def index
    @tags = Tag.all
  end

  def create
    @tag = Tag.create!(tag_params)
    render :show
  end

  private
  def tag_params
    params.require(:tag).permit(:name, :occurrences)
  end
end
