// import C from "../constants";
import appReducer from "./reducers";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";

// const consoleMessages = store => next => action => {
// 	// console.log(
// 	// 	`
// 	//   Dispatch action => ${action.type}

// 	// State before ${JSON.stringify(store.getState())}

// 	// `
// 	// );

// 	const result = next(action);
// 	console.log(
// 		`
//   Dispatch action type    ==> ${action.type}
//   Dispatch action payload ==> ${action.payload}

//   State After ${JSON.stringify(store.getState())}
//   `
// 	);
// 	return result;
// };

// composeEnhancers added
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (initialState = {}) =>
	composeEnhancers(applyMiddleware(thunk, logger))(createStore)(appReducer, initialState);
