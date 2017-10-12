import React, { Component } from "react";
import * as KC from "../../keyCodes";

class Program extends Component {
	constructor(props) {
		super(props);
		this.runProgram = this.runProgram.bind(this);
		this.state = {
			errorMessage: "",
			input: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.clearText = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({ input: event.target.value });
	}

	runProgram() {
		const inputLines = this.state.input
			.trim()
			.split("\n")
			.map(line => line.trim().toLowerCase())
			.filter(line => Boolean(line));

		console.log(inputLines);
		if (this.isCompilable(inputLines)) {
			for (const line of inputLines) {
				if (this.isNumber(line)) {
					this.addNumber(line);
				} else {
					this.exeFunction(line);
				}
			}
			this.setState({
				errorMessage: ""
			});
		} else {
			this.setState({
				errorMessage: "Syntax Error!"
			});
		}
	}
	isCompilable(inputLines) {
		for (const line of inputLines) {
			if (!this.isKeyCode(line.toUpperCase()) && !this.isNumber(line)) {
				return false;
			}
		}
		return true;
	}
	isKeyCode(input) {
		return Boolean(KC[input]);
	}
	isNumber(input) {
		return !Number.isNaN(Number(input));
	}
	addNumber(number) {
		this.props.addNumber(number);
	}
	exeFunction(keycode) {
		this.props.exeFunction(keycode);
	}
	render() {
		return (
			<div className="programDiv">
				<textarea
					name="styled-textarea"
					id="styled"
					onChange={this.handleChange}
					placeholder="Write program here..."
				/>
				{this.state.errorMessage ? (
					<div className="errorMessage">{this.state.errorMessage}</div>
				) : (
					""
				)}

				<button
					id="programBtn"
					className="button glow-button blueBtn"
					onClick={this.runProgram}
				>
					Run Program
				</button>
			</div>
		);
	}
}

export default Program;
