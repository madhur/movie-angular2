import { applyMiddleware, Store, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./combine-reducers.service";

const applyReduxDevTools = (<any>window).devToolsExtension;
const composeArgs = [
	applyMiddleware(thunk)
];

applyReduxDevTools ? composeArgs.push((<any>window).devToolsExtension()) : function noop() { };

const enhancer = compose.apply(compose, composeArgs);

export const store: Store<any> = createStore(rootReducer, {}, enhancer); 