class Api::NoteTagsController < ApplicationController
  def index
    @matches = NoteTag.all
  end

  def create
    @match = NoteTag.create!(note_tag_params)
    render :show
  end

  private
  def note_tag_params
    params.require(:note_tag).permit(:note_id, :tag_id)
  end
end
