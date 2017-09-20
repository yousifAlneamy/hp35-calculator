import React, { Component } from "react";
import * as KC from "../../keyCodes";
import "../../App.css";
import Calculator from "../containers/Calculator";
import Program from "../containers/Program";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Calculator />
				<Program />
			</div>
		);
	}
}

export default App;
