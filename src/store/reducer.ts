import { AppState } from '../types/store';

import { Actions, BackgroundActions } from '../types/store';
import { appState } from './index';

export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
	console.log(currentAction);
	const { action, payload } = currentAction;

	switch (action) {
		case BackgroundActions.CHANGEUP:
		  return {
			...currentState,
			up: payload,
		  };

		  case BackgroundActions.CHANGEMID:
		  return {
			...currentState,
			mid: payload,
		  };

		  case BackgroundActions.CHANGEDOWN:
		  return {
			...currentState,
			down: payload,
		  };
		default:
		  return currentState;
	  }

};
