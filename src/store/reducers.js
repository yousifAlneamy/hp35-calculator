import C from "../constants";
import { combineReducers } from "redux";

const degreesToRadians = degrees => degrees * Math.PI / 180.0;
const radiansToDegrees = radians => radians * 180.0 / Math.PI;

const stackActionMap = {
	[C.ADD_DIGIT]: ({ payload, x, y, z, t }) => {
		let newX;
		if (x === "0" || x === "-0" || x === "+0") {
			if (payload === "0") {
				return [x, y, z, t];
			} else {
				const isNegative = x.startsWith("-");
				newX = isNegative ? "-" : "";
				newX += payload;
				return [newX, y, z, t];
			}
		}

		if (x.includes("e")) {
			const isEEXNegative = x.includes("e-");
			if (x.endsWith("+0") || x.endsWith("-0")) {
				if (payload === "0") {
					return [x, y, z, t];
				} else {
					newX = x.substr(0, x.indexOf("e") + 1);
					newX += isEEXNegative ? "-" : "+";
					newX += payload;
					return [newX, y, z, t];
				}
			}

			if (x.length - x.indexOf("e") <= 3) {
				newX = x + payload;
				return [newX, y, z, t];
			} else {
				return [x, y, z, t];
			}
		}

		newX = x + payload;
		return [newX, y, z, t];
	},
	[C.SHIFT_UP]: ({ x, y, z }) => [x, x, y, z],
	[C.ENTER]: ({ x, y, z }) => [x, x, y, z],
	[C.EXCHANGE_X_WITH_Y]: ({ x, y, z, t }) => [y, x, z, t],
	[C.SET_X]: ({ payload, x, y, z }) => [payload, x, y, z],
	[C.ADD_PI]: ({ x, y, z }) => [Math.PI.toString(), x, y, z],
	[C.ROLE_DOWN]: ({ x, y, z, t }) => [y, z, t, x],
	[C.X_POW_Y]: ({ x, y, z, t }) => [Math.pow(Number(y), Number(x)).toString(), z, t, t],
	[C.SHIFT_DOWN]: ({ x, y, z }) => [x, y, z, z],
	[C.CLR]: () => ["0", "0", "0", "0"],
	[C.CLX]: ({ y, z, t }) => ["0", y, z, t],
	[C.REC]: ({ payload, x, y, z }) => [payload, x, y, z],
	[C.EXE_ARITHMETIC_OPERATOR]: ({ payload, x, y, z, t }) => [payload(Number(y), Number(x)).toString(), z, t, t],
	[C.EXE_NON_TRI_FUNCTION]: ({ payload, x, y, z, t }) => [payload(Number(x)).toString(), y, z, t], // ln - log - e^x sqrt
	[C.EXE_TRI_FUNCTION]: ({ payload, x, y, z, t }) => [payload(degreesToRadians(Number(x))).toString(), y, z, z], // sin - cos - tan
	[C.EXE_A_TRI_FUNCTION]: ({ payload, x, y, z, t }) => [radiansToDegrees(payload(Number(x))).toString(), y, z, z], // asin - cos - atan
	[C.MUL_INVERSE_X]: ({ x, y, z, t }) => [(1 / Number(x)).toString(), y, z, t],
	[C.CHS]: ({ x, y, z, t }) => {
		const isEEX = x.includes("e");
		let newX;
		if (isEEX) {
			const isEEXNegative = x.includes("e-");
			let signIndex;
			if (isEEXNegative) {
				signIndex = x.lastIndexOf("-");
				newX = x.substr(0, signIndex) + "+" + x.substr(signIndex + 1);
			} else {
				signIndex = x.lastIndexOf("+");
				newX = x.substr(0, signIndex) + "-" + x.substr(signIndex + 1);
			}
			return [newX, y, z, t];
		}

		if (x.startsWith("-")) {
			newX = "+" + x.substr(1);
		} else {
			newX = "-" + (x.startsWith("+") ? x.substr(1) : x.substr(0));
		}
		return [newX, y, z, t];
	},
	[C.ADD_DOT]: ({ x, y, z, t }) => {
		if (x.includes("e")) {
			return [x, y, z, t];
		}

		if (x.includes(".")) {
			return [x, y, z, t];
		}
		const newX = x + ".";
		return [newX, y, z, t];
	},
	[C.ADD_EEX]: ({ x, y, z, t }) => {
		if (x.includes("e")) {
			return [x, y, z, t];
		}
		let newX;
		if (x === "0" || x === "-0" || x === "+0") {
			newX = x.substr(1) + "1e+0";
		} else {
			newX = x + "e+0";
		}
		return [newX, y, z, t];
	}
};

export const stack = (state = ["0", "0", "0", "0"], action) => {
	const [x, y, z, t] = state;
	const { type, payload } = action;
	const params = { x, y, z, t, payload };

	if (stackActionMap.hasOwnProperty(type)) {
		return stackActionMap[type](params);
	}

	return state;
};

export const stackShift = (state = false, action) => {
	switch (action.type) {
		case C.EXE_ARITHMETIC_OPERATOR:
		case C.EXCHANGE_X_WITH_Y:
		case C.ROLE_DOWN:
		case C.SET_X:
		case C.EXE_NON_TRI_FUNCTION:
		case C.EXE_TRI_FUNCTION:
		case C.EXE_A_TRI_FUNCTION:
		case C.X_POW_Y:
		case C.REC:
		case C.STO:
		case C.MUL_INVERSE_X:
		case C.ADD_PI:
		case C.ROLE_DOWN:
			return true;

		case C.ADD_DOT:
		case C.CLR:
		case C.CLX:
		case C.ADD_DIGIT:
		case C.ENTER:
		case C.ADD_EEX:
			return false;

		default:
			return state;
	}
};

const memory = (state = "0", action) => (action.type === C.STO ? action.payload : state);

const arc = (state = false, action) => {
	switch (action.type) {
		case C.ARC:
			return action.payload;

		case C.ENABLE_ARC:
			return true;

		default:
			return false;
	}
};

const refreshEntry = (state = false, action) => {
	switch (action.type) {
		case C.ENTER:
			return true;
		case C.CLR:
		case C.CLX:
			return false;

		default:
			return state;
	}
};

const singleReducer = combineReducers({
	stack,
	stackShift,
	memory,
	arc,
	refreshEntry
});

export default singleReducer;
