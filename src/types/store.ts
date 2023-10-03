export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	up: string;
	mid: string;
	down: string;
};

export enum BackgroundActions {
	'CHANGEUP' = 'CHANGEUP',
	'CHANGEMID' = 'CHANGEMID',
	'CHANGEDOWN' = 'CHANGEDOWN'
}

export interface ChangeUpAction {
	action: BackgroundActions.CHANGEUP;
	payload: "white";
}

export interface ChangeMidAction {
	action: BackgroundActions.CHANGEMID;
	payload: "white";
}

export interface ChangeDownAction {
	action: BackgroundActions.CHANGEDOWN;
	payload: "white";
}

export type Actions = ChangeUpAction | ChangeMidAction | ChangeDownAction;