import { connectRouter, RouterState } from 'connected-react-router';

export const routerSelector = (state: any) => state.router as RouterState;

export const reducer = (history: any) => connectRouter(history);
