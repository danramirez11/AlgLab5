import { BackgroundActions } from '../types/store';

export const change = (payload: any) => {
	return {
		action: BackgroundActions.CHANGEBACKGROUNDCOLOR,
		payload,
	};
};