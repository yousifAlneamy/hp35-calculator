import React, { Component } from "react";

class PowButton extends Component {
	render() {
		return (
			<div className="PowButton">
				<input type="button" value="Xy" onClick={() => console.log("PowButton clicked")} />
			</div>
		);
	}
}

export default PowButton;
