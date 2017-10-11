import React, { Component } from "react";
import * as KC from "../../keyCodes";

class Calculator extends Component {
	constructor(props) {
		super(props);
		this.onKeyIn = this.onKeyIn.bind(this);
	}
	onKeyIn(keyCode) {
		this.props.keyCodes(keyCode);
	}

	render() {
		const [x, y, z, t] = this.props.stack;
		return (
			<div className="calculator">
				<div className="panel">
					<div className="stack">t:{t}</div>
					<div className="stack">z:{z}</div>
					<div className="stack">y:{y}</div>
					<div className="stack">x:{x}</div>
				</div>

				<div className="funcContainer">
					<div className="funcRow">
						<div className="btnDiv">
							<label htmlFor="button" className="funcBtnLable">
								{"y​x"}
							</label>
							<br />
							<button
								className="funcBtn blackBtn"
								onClick={() => this.onKeyIn(KC.POW)}
							/>
						</div>
						<div className="btnDiv">
							<label htmlFor="button" className="funcBtnLable">
								log
							</label>
							<br />
							<button
								className="funcBtn blackBtn"
								onClick={() => this.onKeyIn(KC.LOG)}
							/>
						</div>
						<div className="btnDiv">
							<label htmlFor="button" className="funcBtnLable">
								ln
							</label>
							<br />
							<button
								className="funcBtn blackBtn"
								onClick={() => this.onKeyIn(KC.LN)}
							/>
						</div>
						<div className="btnDiv">
							<label htmlFor="button" className="funcBtnLable">
								eˣ
							</label>
							<br />
							<button
								className="funcBtn blackBtn"
								onClick={() => this.onKeyIn(KC.EXP)}
							/>
						</div>
						<div className="btnDiv">
							<label htmlFor="button" className="funcBtnLable">
								CLR
							</label>
							<br />
							<button
								className="funcBtn blueBtn"
								onClick={() => this.onKeyIn(KC.CLR)}
							/>
						</div>
					</div>

					<div className="funcRow">
						<div className="btnDiv">
							<label htmlFor="button" className="funcBtnLable">
								√x
							</label>
							<br />
							<button
								className="funcBtn blackBtn"
								onClick={() => this.onKeyIn(KC.SQRT)}
							/>
						</div>
						<div className="btnDiv">
							<label htmlFor="button" className="funcBtnLable">
								arc
							</label>
							<br />
							<button
								className="funcBtn grayBtn"
								onClick={() => this.onKeyIn(KC.ARC)}
							/>
						</div>
						<div className="btnDiv">
							<label htmlFor="button" className="funcBtnLable">
								sin
							</label>
							<br />
							<button
								className="funcBtn grayBtn"
								onClick={() => this.onKeyIn(KC.SIN)}
							/>
						</div>
						<div className="btnDiv">
							<label htmlFor="button" className="funcBtnLable">
								cos
							</label>
							<br />
							<button
								className="funcBtn grayBtn"
								onClick={() => this.onKeyIn(KC.COS)}
							/>
						</div>
						<div className="btnDiv">
							<label htmlFor="button" className="funcBtnLable">
								tan
							</label>
							<br />
							<button
								className="funcBtn grayBtn"
								onClick={() => this.onKeyIn(KC.TAN)}
							/>
						</div>
					</div>

					<div className="funcRow">
						<div className="btnDiv">
							<label htmlFor="button" className="funcBtnLable">
								¹/x
							</label>
							<br />
							<button
								className="funcBtn blackBtn"
								onClick={() => this.onKeyIn(KC.RECIPROCAL)}
							/>
						</div>
						<div className="btnDiv">
							<label htmlFor="button" className="funcBtnLable">
								x↔︎y
							</label>
							<br />
							<button
								className="funcBtn blackBtn"
								onClick={() => this.onKeyIn(KC.SWAP)}
							/>
						</div>
						<div className="btnDiv">
							<label htmlFor="button" className="funcBtnLable">
								R↓
							</label>
							<br />
							<button
								className="funcBtn blackBtn"
								onClick={() => this.onKeyIn(KC.ROLL_DOWN)}
							/>
						</div>
						<div className="btnDiv">
							<label
								htmlFor="button"
								className="funcBtnLable"
								onClick={() => this.onKeyIn(KC.STO)}
							>
								STO
							</label>
							<br />
							<button className="funcBtn blackBtn" />
						</div>
						<div className="btnDiv">
							<label htmlFor="button" className="funcBtnLable">
								RCL
							</label>
							<br />
							<button
								className="funcBtn blackBtn"
								onClick={() => this.onKeyIn(KC.RCL)}
							/>
						</div>
					</div>

					<div className="funcRow">
						<div id="enterBtnDiv" className="btnDiv">
							<button
								id="enterBtn"
								className="funcBtn blueBtn"
								onClick={() => this.onKeyIn(KC.ENTER)}
							>
								Enter↑
							</button>
							<br />
						</div>
						<div className="btnDiv">
							<label htmlFor="button" className="funcBtnLable">
								CH S
							</label>
							<br />
							<button
								className="funcBtn blueBtn"
								onClick={() => this.onKeyIn(KC.CHS)}
							/>
						</div>
						<div className="btnDiv">
							<label htmlFor="button" className="funcBtnLable">
								E EX
							</label>
							<br />
							<button
								className="funcBtn blueBtn"
								onClick={() => this.onKeyIn(KC.EEX)}
							/>
						</div>
						<div className="btnDiv">
							<label htmlFor="button" className="funcBtnLable">
								CL 𝓧
							</label>
							<br />
							<button
								className="funcBtn blueBtn"
								onClick={() => this.onKeyIn(KC.CLX)}
							/>
						</div>
					</div>

					<div className="arithmeticRow">
						<div className="operatorBtnDiv">
							<button
								className="operatorBtn blueBtn"
								onClick={() => this.onKeyIn(KC.SUB)}
							>
								-
							</button>
						</div>
						<div className="numBtnDiv">
							<button
								className="numBtn whiteBtn"
								onClick={() => this.onKeyIn(KC.D7)}
							>
								7
							</button>
						</div>
						<div className="numBtnDiv">
							<button
								className="numBtn whiteBtn"
								onClick={() => this.onKeyIn(KC.D8)}
							>
								8
							</button>
						</div>
						<div className="numBtnDiv">
							<button
								className="numBtn whiteBtn"
								onClick={() => this.onKeyIn(KC.D9)}
							>
								9
							</button>
						</div>
					</div>

					<div className="arithmeticRow">
						<div className="operatorBtnDiv">
							<button
								className="operatorBtn blueBtn"
								onClick={() => this.onKeyIn(KC.ADD)}
							>
								+
							</button>
						</div>
						<div className="numBtnDiv">
							<button
								className="numBtn whiteBtn"
								onClick={() => this.onKeyIn(KC.D4)}
							>
								4
							</button>
						</div>
						<div className="numBtnDiv">
							<button
								className="numBtn whiteBtn"
								onClick={() => this.onKeyIn(KC.D5)}
							>
								5
							</button>
						</div>
						<div className="numBtnDiv">
							<button
								className="numBtn whiteBtn"
								onClick={() => this.onKeyIn(KC.D6)}
							>
								6
							</button>
						</div>
					</div>

					<div className="arithmeticRow">
						<div className="operatorBtnDiv">
							<button
								className="operatorBtn blueBtn"
								onClick={() => this.onKeyIn(KC.MUL)}
							>
								X
							</button>
						</div>
						<div className="numBtnDiv">
							<button
								className="numBtn whiteBtn"
								onClick={() => this.onKeyIn(KC.D1)}
							>
								1
							</button>
						</div>
						<div className="numBtnDiv">
							<button
								className="numBtn whiteBtn"
								onClick={() => this.onKeyIn(KC.D2)}
							>
								2
							</button>
						</div>
						<div className="numBtnDiv">
							<button
								className="numBtn whiteBtn"
								onClick={() => this.onKeyIn(KC.D3)}
							>
								3
							</button>
						</div>
					</div>

					<div className="arithmeticRow">
						<div className="operatorBtnDiv">
							<button
								className="operatorBtn blueBtn"
								onClick={() => this.onKeyIn(KC.DIV)}
							>
								÷
							</button>
						</div>
						<div className="numBtnDiv">
							<button
								className="numBtn whiteBtn"
								onClick={() => this.onKeyIn(KC.D0)}
							>
								0
							</button>
						</div>
						<div className="numBtnDiv">
							<button
								className="numBtn whiteBtn"
								onClick={() => this.onKeyIn(KC.DOT)}
							>
								•
							</button>
						</div>
						<div className="numBtnDiv">
							<button
								className="numBtn whiteBtn"
								onClick={() => this.onKeyIn(KC.PI)}
							>
								π
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Calculator;
