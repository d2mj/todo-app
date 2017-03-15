import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs';

import { CounterActions } from './app.action';
import { IAppState } from 'store';
import { Todo } from './todo';
import {TodoDataService} from './todo-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService],
})



export class AppComponent implements OnInit {

  ngOnInit(){
      this.obj.subscribe(res =>{
        console.log("jo bhi ", res);
      })
  }
  @select(['arr']) obj : Observable <any>;
  
    todos;
    newTodo : Todo = new Todo();
    count: number;
    subscription;

  constructor(private todoDataService: TodoDataService, 
              private ngRedux: NgRedux<IAppState>,
              private actions: CounterActions){
 	   this.todos = this.todoDataService.todos;
     this.subscription = ngRedux.select<number>('count')
                         .subscribe(newCount => this.count = newCount);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  addTodo(){
  	this.todoDataService.addTodo(this.newTodo);
    this.ngRedux.dispatch(this.actions.addTodo(this.newTodo));
    this.newTodo = new Todo();
    this.todos = this.getTodos();
  }

  toggleTodoComplete(todo){
  	this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo){
  	this.todoDataService.deleteTodoById(todo.id);
  	this.todos = this.getTodos();
    this.ngRedux.dispatch(this.actions.removeTodo(todo));
  }

  getTodos(){
  	return  this.todoDataService.getAllTodos();
  }

  increment() {
      this.ngRedux.dispatch(this.actions.increment());
  } 
  decrement() {
      this.ngRedux.dispatch(this.actions.decrement());
  } 

}
