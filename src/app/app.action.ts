import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class CounterActions  {
	
	static INCREMENT = 'INCREMENT';
	static DECREMENT = 'DECREMENT';	
	static ADD_TODO = 'ADD_TODO';
	static REMOVE_TODO = 'REMOVE_TODO';

	increment() : any {
		return {type: CounterActions.INCREMENT};
	}

	decrement() : any {
		return {type: CounterActions.DECREMENT};
	}

	addTodo(todo) : any {
		return {type: CounterActions.ADD_TODO, payload: todo};
	}

	removeTodo(todo) : any {
		return {type: CounterActions.REMOVE_TODO, payload: todo};
	}

}