import React, { Component } from "react";

class Panel extends Component {
	render() {
		const [x, y, z, t] = this.props.stack;
		return (
			<div className="panel">
				<div>t: {t}</div>
				<div>z: {z}</div>
				<div>y: {y}</div>
				<div>x: {x}</div>
			</div>
		);
	}
}

export default Panel;
