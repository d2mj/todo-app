/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import {Todo} from './todo';
import { TodoDataService } from './todo-data.service';
import {AppComponent} from './app.component';
import { FormsModule } from '@angular/forms';

describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService],
    });
  });

  it('should ...', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllTodos()', ()=>{
  		it('should return an empty array bydefault', inject([TodoDataService], (service: TodoDataService) => {
  			expect(service.getAllTodos()).toEqual([]);
  		}))

  		it('should return all todo', inject([TodoDataService], (service: TodoDataService) => {
  			let todo1 = new Todo({title: 'hello 1', complete: false});
  			let todo2 = new Todo({title: 'hello 2', complete: true});
  			service.addTodo(todo1);
  			service.addTodo(todo2);
  			expect(service.getAllTodos()).toEqual([todo1, todo2]);
  		}))
  });

  describe('#save(todo)', ()=>{
  		it('should automatically assign an incrementing id', inject([TodoDataService], (service: TodoDataService) => {
  			let todo1 = new Todo({title: 'Hello 1', complete: false});
      		let todo2 = new Todo({title: 'Hello 2', complete: true});
      		service.addTodo(todo1);
  			service.addTodo(todo2);
  			expect(service.getTodoById(1)).toEqual(todo1);
  			expect(service.getTodoById(2)).toEqual(todo2);
		}))
  });

  describe('#deleteTodoById(id)', ()=>{
  		it('should remove todo with the corresponding id', inject([TodoDataService], (service: TodoDataService) => {
  			let todo1 = new Todo({title: 'Hello 1', complete: false});
      		let todo2 = new Todo({title: 'Hello 2', complete: true});
      		service.addTodo(todo1);
  			service.addTodo(todo2);
  			expect(service.getAllTodos()).toEqual([todo1, todo2]);
  			service.deleteTodoById(1);
  			expect(service.getAllTodos()).toEqual([todo2]);
  			service.deleteTodoById(2);
  			expect(service.getAllTodos()).toEqual([]);
  		}));

  		it('should not removing anything if todo with corresponding id not found', inject([TodoDataService], (service: TodoDataService) => {
  			let todo1 = new Todo({title: 'Hello 1', complete: false});
      		let todo2 = new Todo({title: 'Hello 2', complete: true});
      		service.addTodo(todo1);
  			service.addTodo(todo2);
  			expect(service.getAllTodos()).toEqual([todo1, todo2]);
  			service.deleteTodoById(3);
  			expect(service.getAllTodos()).toEqual([todo1, todo2]);
  		}));
  });

  describe('#updateTodoById(id, value)', ()=>{
  		it('should return todo with corresponding id and updated data', inject([TodoDataService], (service: TodoDataService) =>{
  			let todo = new Todo({title: 'hello', complete: false});
  			service.addTodo(todo);
  			let updatedTodo = service.updateTodoById(1, {
  				title: 'new title'
  			});
  			expect(updatedTodo.title).toEqual('new title');
  		}));

  		it('should return null if todo not found', inject([TodoDataService], (service: TodoDataService) => {
  			let todo = new Todo({title: 'hello 1', complete: false});
  			service.addTodo(todo);
  			let updatedTodo = service.updateTodoById(2, {
  				title: 'new title'
  			});
  			expect(updatedTodo).toEqual(null);
  		}));
  });

  describe('#toggleTodoComplete()', ()=>{
  		it('should return the updated todo with inverse complete status', inject([TodoDataService], (service: TodoDataService) => {
  			let todo = new Todo({title: 'hello 1', complete: false});
  			service.addTodo(todo);
  			let updatedTodo = service.toggleTodoComplete(todo);
  			expect(updatedTodo.complete).toEqual(true);
  			service.toggleTodoComplete(todo);
  			expect(updatedTodo.complete).toEqual(false);
  		}));
  });

});
