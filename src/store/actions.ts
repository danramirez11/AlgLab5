import { BackgroundActions } from '../types/store';

export const changeUp = (payload: any) => {
	return {
		action: BackgroundActions.CHANGEUP,
		payload,
	};
};

export const changeMid = (payload: any) => {
	return {
		action: BackgroundActions.CHANGEMID,
		payload,
	};
};

export const changeDown = (payload: any) => {
	return {
		action: BackgroundActions.CHANGEDOWN,
		payload,
	};
};