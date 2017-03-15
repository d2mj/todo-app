// import { Action } from 'redux';

import { CounterActions } from './app/app.action';

export interface IAppState {
	count : number;
	arr? : any;
}

export const INITIAL_STATE : IAppState = { 
	count : 0, 
	arr : []
};

function getTodoArray(arr, payload){
	
	for (var i =0; i < arr.length; i++)
			if (arr[i].title === payload.title) {
				arr.splice(i,1);
			break;
	}	
	return arr;
			
}

function addTodoArray(arr, payload){
	arr.push(payload);
	return arr;
}

export function rootReducer(state : IAppState, action: any) : any {
	switch (action.type) {
		case CounterActions.INCREMENT: return {
			count: state.count + 1, 
			arr: state.arr
		};
			
		case CounterActions.DECREMENT: return {
			count: state.count - 1, 	
			arr: state.arr		
		};
		
		case CounterActions.ADD_TODO: return { 
			count: state.count,
			arr: addTodoArray(state.arr, action.payload)
		};

		case CounterActions.REMOVE_TODO: return {
			count: state.count, 
			arr: getTodoArray(state.arr, action.payload)
		}

		default:
			// code...
			break;
	}
	
	// We don't care about any other actions right now.
  	return state;
}