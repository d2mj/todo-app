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

export function rootReducer(state : IAppState, action: any) : any {
	switch (action.type) {
		case CounterActions.INCREMENT: return {
			count: state.count + 1, 
			arr: state.arr.map(todo => todo)
		};
			
		case CounterActions.DECREMENT: return {
			count: state.count - 1, 	
			arr: state.arr.map(todo => todo)		
		};
		
		case CounterActions.ADD_TODO: return { 
			count: state.count+10,
			arr: state.arr.concat(action.payload) 
		};

		case CounterActions.REMOVE_TODO: return {
			count: state.count-10, 
			arr: state.arr.filter(todo=> todo.id !== action.payload.id)
		}

		default:
			// code...
			break;
	}
	
	// We don't care about any other actions right now.
  	return state;
}