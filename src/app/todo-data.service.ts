import { Injectable } from '@angular/core';
import { NgReduxModule, NgRedux} from '@angular-redux/store';


import { Todo } from './todo';


@Injectable()
export class TodoDataService {

	lastId: number = 0;

	todos: Todo[] = [];

  	constructor() { }

  	//simulate POST /todos
  	addTodo(todo: Todo): TodoDataService{
  		if(!todo.id){
  			todo.id = ++this.lastId;
  		}
  		this.todos.push(todo);
  		return this;
  	}

  	//simulate DELETE /todos/:id
  	deleteTodoById(id: number): TodoDataService{
  		this.todos = this.todos.filter(todo =>todo.id !== id);
  		return this;
  	}

  	//simulate PUT /todos/:id
  	updateTodoById(id: number, values: Object={}): Todo {
  		let todo = this.getTodoById(id);
  		if(!todo){
  			return null;
  		}
  		Object.assign(todo, values);
  		return todo;
  	}

  	getAllTodos(): Todo[] {
  		return this.todos;
  	}

  	getTodoById(id: number): Todo {
  		return this.todos.filter(todo => todo.id === id).pop();
  	}

  	toggleTodoComplete(todo: Todo){
  		let updatedTodo = this.updateTodoById(todo.id, {
  			complete : !todo.complete
  		});
  		return updatedTodo;
  	}

}
