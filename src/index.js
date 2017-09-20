import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/ui/App";
import { Provider } from "react-redux";
import C from "./constants";

import storeFactory from "./store";
import { keyCode } from "./store/actions";

import registerServiceWorker from "./registerServiceWorker";
const store = storeFactory();
console.log(store);

//store.subscribe(() => console.log(store.getState()));
window.store = store;

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();

// import C from "./constants";
// import storeFactory from "./store";
// import { keyCode } from "./store/actions";
// import * as KC from "./keyCodes";

// const store = storeFactory();

// //store.subscribe(() => console.log(store.getState()));
// window.store = store;

// store.dispatch(keyCode(KC.D9));

// store.dispatch(keyCode(KC.DOT));

// store.dispatch(keyCode(KC.EEX));

// store.dispatch(keyCode(KC.D1));

// store.dispatch(keyCode(KC.ENTER));

// store.dispatch(keyCode(KC.ADD));
// store.dispatch(keyCode(KC.D9));
