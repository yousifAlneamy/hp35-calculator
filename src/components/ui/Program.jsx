import React, { Component } from "react";
import * as KC from "../../keyCodes";

class Program extends Component {
	constructor(props) {
		super(props);
		this.runProgram = this.runProgram.bind(this);
		this.state = { input: "" };
		this.handleChange = this.handleChange.bind(this);
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
		} else {
			alert("Syntax Error!");
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
			<div className="program">
				<textarea rows="4" cols="50" onChange={this.handleChange} placeholder="Write program here" />
				<button onClick={this.runProgram} type="button">
					Run Program
				</button>
			</div>
		);
	}
}

export default Program;
