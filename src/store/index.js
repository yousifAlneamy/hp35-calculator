import C from "../constants";
import appReducer from "./reducers";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

const consoleMessages = store => next => action => {
	// console.log(
	// 	`
	//   Dispatch action => ${action.type}

	// State before ${JSON.stringify(store.getState())}

	// `
	// );

	let result = next(action);
	console.log(
		`
  Dispatch action type    ==> ${action.type}
  Dispatch action payload ==> ${action.payload}

  State After ${JSON.stringify(store.getState())}
  `
	);
	return result;
};

export default (initialState = {}) => applyMiddleware(thunk, consoleMessages)(createStore)(appReducer, initialState);
