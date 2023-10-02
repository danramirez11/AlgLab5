export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	BackgroundColor: string;
};

export enum BackgroundActions {
	'CHANGEBACKGROUNDCOLOR' = 'CHANGEBACKGROUNDCOLOR'
}

export interface ChangeBackgroundAction {
	action: BackgroundActions.CHANGEBACKGROUNDCOLOR;
	payload: "white";
}

export type Actions = ChangeBackgroundAction;