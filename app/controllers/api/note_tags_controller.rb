class Api::NoteTagsController < ApplicationController
  def index
    @note_tags = NoteTag.all
  end

  def create
    @note_tag = NoteTag.create!(note_tag_params)
    render :show
  end

  private
  def note_tag_params
    params.require(:note_tag).permit(:note_id, :tag_id)
  end
end
