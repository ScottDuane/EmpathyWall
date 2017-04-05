class Api::NotesController < ApplicationController
  def index
    @notes = Note.all
  end

  def create
    @note = Note.create!(note_params)
    render :show
  end

  private
  def note_params
    params.require(:note).permit(:content, :color)
  end
end
