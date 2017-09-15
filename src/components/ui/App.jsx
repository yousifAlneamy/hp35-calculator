import React, { Component } from "react";
import Panel from "../containers/Panel";
import * as KC from "../../keyCodes";
import "../../App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.onKeyIn = this.onKeyIn.bind(this);
	}
	onKeyIn(keyCode) {
		this.props.keyCodes(keyCode);
	}

	render() {
		const props = this.props;
		return (
			<div className="App">
				<form name="calculator">
					<Panel />
					<div className="parent">
						<input className="childInput" type="button" value="xʸ" onClick={() => this.onKeyIn(KC.POW)} />
						<input className="childInput" type="button" value="LOG" onClick={() => this.onKeyIn(KC.LOG)} />
						<input className="childInput" type="button" value="LN" onClick={() => this.onKeyIn(KC.LN)} />
						<input className="childInput" type="button" value="eˣ" onClick={() => this.onKeyIn(KC.EXP)} />
						<input className="childInput" type="button" value="CLR" onClick={() => this.onKeyIn(KC.CLR)} />

						<input className="childInput" type="button" value="√x" onClick={() => this.onKeyIn(KC.SQRT)} />
						<input className="childInput" type="button" value="ARC" onClick={() => this.onKeyIn(KC.ARC)} />
						<input className="childInput" type="button" value="sin" onClick={() => this.onKeyIn(KC.SIN)} />
						<input className="childInput" type="button" value="cos" onClick={() => this.onKeyIn(KC.COS)} />
						<input className="childInput" type="button" value="tan" onClick={() => this.onKeyIn(KC.TAN)} />

						<input className="childInput" type="button" value="¹/x" onClick={() => this.onKeyIn(KC.RECIPROCAL)} />
						<input className="childInput" type="button" value="x↔︎y" onClick={() => this.onKeyIn(KC.SWAP)} />
						<input className="childInput" type="button" value="R↓" onClick={() => this.onKeyIn(KC.ROLL_DOWN)} />
						<input className="childInput" type="button" value="STO" onClick={() => this.onKeyIn(KC.STO)} />
						<input className="childInput" type="button" value="RCL" onClick={() => this.onKeyIn(KC.RCL)} />

						<input className="childInput" type="button" value="ENTER" onClick={() => this.onKeyIn(KC.ENTER)} />
						<input className="childInput" type="button" value="CHS" onClick={() => this.onKeyIn(KC.CHS)} />
						<input className="childInput" type="button" value="EEX" onClick={() => this.onKeyIn(KC.EEX)} />
						<input className="childInput" type="button" value="CLX" onClick={() => this.onKeyIn(KC.CLX)} />
						<br />

						<input className="childInput" type="button" value="-" onClick={() => this.onKeyIn(KC.SUB)} />
						<input className="childInput" type="button" value="7" onClick={() => this.onKeyIn(KC.D7)} />
						<input className="childInput" type="button" value="8" onClick={() => this.onKeyIn(KC.D8)} />
						<input className="childInput" type="button" value="9" onClick={() => this.onKeyIn(KC.D9)} />
						<br />

						<input className="childInput" type="button" value="+" onClick={() => this.onKeyIn(KC.ADD)} />
						<input className="childInput" type="button" value="4" onClick={() => this.onKeyIn(KC.D4)} />
						<input className="childInput" type="button" value="5" onClick={() => this.onKeyIn(KC.D5)} />
						<input className="childInput" type="button" value="6" onClick={() => this.onKeyIn(KC.D6)} />
						<br />

						<input className="childInput" type="button" value="*" onClick={() => this.onKeyIn(KC.MUL)} />
						<input className="childInput" type="button" value="1" onClick={() => this.onKeyIn(KC.D1)} />
						<input className="childInput" type="button" value="2" onClick={() => this.onKeyIn(KC.D2)} />
						<input className="childInput" type="button" value="3" onClick={() => this.onKeyIn(KC.D3)} />
						<br />

						<input className="childInput" type="button" value="÷" onClick={() => this.onKeyIn(KC.DIV)} />
						<input className="childInput" type="button" value="0" onClick={() => this.onKeyIn(KC.D0)} />
						<input className="childInput" type="button" value="." onClick={() => this.onKeyIn(KC.DOT)} />
						<input className="childInput" type="button" value="π" onClick={() => this.onKeyIn(KC.PI)} />
					</div>
				</form>
			</div>
		);
	}
}

export default App;
