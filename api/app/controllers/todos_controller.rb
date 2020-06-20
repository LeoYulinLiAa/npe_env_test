class TodosController < ApplicationController

  before_action :require_logged_in, only: %i[create update destroy]

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render :show
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def update
    @todo = Todo.find_by_id(params[:id])
    if @todo.update(todo_params)
      render :show
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def show
    @todo = Todo.find_by_id(params[:id])
  end

  def destroy
    todo = Todo.find_by_id(params[:id])
    if todo
      todo.destroy
      render status: 204
    else
      render status: 404
    end
  end

  private

  def todo_params
    params.require(:todo).permit(:content, :done)
  end

end
