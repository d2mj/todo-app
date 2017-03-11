import { Component } from '@angular/core';
import { Todo } from './todo';
import {TodoDataService} from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService],
})

export class AppComponent {

  todos;
  newTodo : Todo = new Todo();

  constructor(private todoDataService: TodoDataService){
 	 this.todos = this.todoDataService.todos;

  }

  addTodo(){
  	this.todoDataService.addTodo(this.newTodo);
  	this.newTodo = new Todo();
 	this.todos = this.getTodos();
  }

  toggleTodoComplete(todo){
  	this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo){
  	this.todoDataService.deleteTodoById(todo.id);
  	 this.todos = this.getTodos();
  }

  getTodos(){
  	return  this.todoDataService.getAllTodos();
  }

}
