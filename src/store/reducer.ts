import { AppState } from '../types/store';

import { Actions, BackgroundActions } from '../types/store';
import { appState } from './index';

export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
	console.log(currentAction);
	const { action, payload } = currentAction;

	switch (action) {
		case BackgroundActions.CHANGEBACKGROUNDCOLOR:
			return {
				...currentState,
				BackgroundColor: payload,
				
			};

			
		default:
			return currentState;
	}


};
