import C from "../constants";
import { combineReducers } from "redux";

const degreesToRadians = degrees => degrees * Math.PI / 180.0;
const radiansToDegrees = radians => radians * 180.0 / Math.PI;

export const stack = (state = ["0", "0", "0", "0"], action) => {
	let [x, y, z, t] = state;
	let { payload, type } = action;
	switch (type) {
		case C.ADD_DIGIT: {
			let newX;
			if (x === "0" || x === "-0" || x === "+0") {
				if (payload === "0") {
					return state;
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
						return state;
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
					return state;
				}
			}

			newX = x + payload;
			return [newX, y, z, t];
		}

		case C.SHIFT_UP:
		case C.ENTER:
			return [x, x, y, z];

		case C.EXCHANGE_X_WITH_Y:
			return [y, x, z, t];

		case C.SET_X:
			return [payload, y, z, t];

		case C.ADD_PI:
			return [Math.PI.toString(), x, y, z];

		case C.ROLE_DOWN:
			return [y, z, t, x];

		case C.X_POW_Y:
			return [Math.pow(Number(x), Number(y)).toString(), z, t, t];

		case C.SHIFT_DOWN:
			return [x, y, z, z];

		case C.CLR:
			return ["0", "0", "0", "0"];

		case C.CLX:
			return ["0", y, z, t];

		case C.REC:
			return [payload, x, y, z];

		case C.EXE_ARITHMETIC_OPERATOR:
			return [payload(Number(y), Number(x)).toString(), z, t, t];

		case C.EXE_NON_TRI_FUNCTION: // ln - log - e^x sqrt
			return [payload(Number(x)).toString(), y, z, t];

		case C.EXE_TRI_FUNCTION: // sin - cos - tan
			return [payload(degreesToRadians(Number(x))).toString(), y, z, z];

		case C.EXE_A_TRI_FUNCTION: // asin - cos - atan
			return [radiansToDegrees(payload(Number(x))).toString(), y, z, z];

		case C.MUL_INVERSE_X:
			return [(1 / Number(x)).toString(), y, z, t];

		case C.CHS: {
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
		}

		case C.ADD_DOT: {
			if (x.includes("e")) {
				return state;
			}

			if (x.includes(".")) {
				return state;
			}
			const newX = x + ".";
			return [newX, y, z, t];
		}

		case C.ADD_EEX: {
			if (x.includes("e")) {
				return state;
			}
			let newX;
			if (x === "0" || x === "-0" || x === "+0") {
				newX = x.substr(1) + "1e+0";
			} else {
				newX = x + "e+0";
			}
			return [newX, y, z, t];
		}
		default:
			return state;
	}
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
