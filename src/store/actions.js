import C from "../constants";
import * as KC from "../keyCodes";
import mathFuncs from "../util/math";

const addDigit = digit => (dispatch, getState) => {
	const { stackShift, refreshEntry } = getState();

	if (stackShift) {
		dispatch({ type: C.SHIFT_UP });
		dispatch({
			type: C.CLX
		});
	} else if (refreshEntry) {
		dispatch({
			type: C.CLX
		});
	}

	dispatch({
		type: C.ADD_DIGIT,
		payload: digit
	});
};

const addDot = () => (dispatch, getState) => {
	const { stackShift, refreshEntry } = getState();
	if (stackShift) {
		dispatch({ type: C.SHIFT_UP });
		dispatch({
			type: C.CLX
		});
	} else if (refreshEntry) {
		dispatch({
			type: C.CLX
		});
	}

	dispatch({
		type: C.ADD_DOT
	});
};

const exchangeXWithY = () => ({
	type: C.EXCHANGE_X_WITH_Y
});
const roleStackDown = () => ({
	type: C.ROLE_DOWN
});
const addEnter = () => ({
	type: C.ENTER
});
const exeArithmeticOperator = funcName => ({
	type: C.EXE_ARITHMETIC_OPERATOR,
	payload: mathFuncs[funcName]
});
const exeNonTriFunction = funcName => ({
	type: C.EXE_NON_TRI_FUNCTION,
	payload: mathFuncs[funcName]
});
const exeTriFunction = funcName => (dispatch, getState) => {
	const { arc } = getState();
	let payload;
	let type;
	if (arc) {
		type = C.EXE_A_TRI_FUNCTION;
		payload = mathFuncs[funcName]["arc"];
	} else {
		type = C.EXE_TRI_FUNCTION;
		payload = mathFuncs[funcName]["normal"];
	}

	dispatch({ type, payload });
};

const exeArcTriFunction = funcName => ({
	type: C.EXE_A_TRI_FUNCTION,
	payload: mathFuncs[funcName]
});
const xPowerY = () => ({ type: C.X_POW_Y });

const recall = () => (dispatch, getState) => {
	const { memory } = getState();

	dispatch({
		type: C.REC,
		payload: memory
	});
};
const storeToMemory = () => (dispatch, getState) => {
	const { stack } = getState();

	dispatch({
		type: C.STO,
		payload: stack[0]
	});
};
// 1/x
const mulInverseX = () => ({ type: C.MUL_INVERSE_X });
const clearX = () => ({ type: C.CLX });
const clearStack = () => ({ type: C.CLR });
const addPI = () => ({ type: C.ADD_PI });
const changeSign = () => ({ type: C.CHS });

const toggleARC = () => (dispatch, getState) => {
	const { arc } = getState();
	dispatch({
		type: C.ARC,
		payload: !arc
	});
};

const enableARC = () => (dispatch, getState) => dispatch({ type: C.ENABLE_ARC });

const addEEX = () => ({ type: C.ADD_EEX });

const addDigitMap = {
	[KC.D0]: () => addDigit("0"),
	[KC.D1]: () => addDigit("1"),
	[KC.D2]: () => addDigit("2"),
	[KC.D3]: () => addDigit("3"),
	[KC.D4]: () => addDigit("4"),
	[KC.D5]: () => addDigit("5"),
	[KC.D6]: () => addDigit("6"),
	[KC.D7]: () => addDigit("7"),
	[KC.D8]: () => addDigit("8"),
	[KC.D9]: () => addDigit("9")
};

const exeArithmeticOperatorMap = {
	[KC.ADD]: () => exeArithmeticOperator(KC.ADD),
	[KC.SUB]: () => exeArithmeticOperator(KC.SUB),
	[KC.MUL]: () => exeArithmeticOperator(KC.MUL),
	[KC.DIV]: () => exeArithmeticOperator(KC.DIV)
};
const exeNonTriFunctionMap = {
	[KC.SQRT]: () => exeNonTriFunction(KC.SQRT),
	[KC.LOG]: () => exeNonTriFunction(KC.LOG),
	[KC.LN]: () => exeNonTriFunction(KC.LN),
	[KC.EXP]: () => exeNonTriFunction(KC.EXP)
};

const exeArcTriFunctionMap = {
	[KC.ASIN]: () => exeArcTriFunction(KC.ASIN),
	[KC.ACOS]: () => exeArcTriFunction(KC.ACOS),
	[KC.ATAN]: () => exeArcTriFunction(KC.ATAN)
};

const exeTriFunctionMap = {
	[KC.SIN]: () => exeTriFunction(KC.SIN),
	[KC.COS]: () => exeTriFunction(KC.COS),
	[KC.TAN]: () => exeTriFunction(KC.TAN)
};

export default {
	...addDigitMap,
	...exeArithmeticOperatorMap,
	...exeNonTriFunctionMap,
	...exeArcTriFunctionMap,
	...exeTriFunctionMap,
	[KC.ARC]: () => toggleARC(),
	[KC.CLR]: () => clearStack(),
	[KC.CLX]: () => clearX(),
	[KC.RCL]: () => recall(),
	[KC.ROLL_DOWN]: () => roleStackDown(),
	[KC.ENTER]: () => addEnter(),
	[KC.DOT]: () => addDot(),
	[KC.SWAP]: () => exchangeXWithY(),
	[KC.POW]: () => xPowerY(),
	[KC.STO]: () => storeToMemory(),
	[KC.RECIPROCAL]: () => mulInverseX(),
	[KC.PI]: () => addPI(),
	[KC.CHS]: () => changeSign(),
	[KC.EEX]: () => addEEX()
};

//const keyCode = key => {
// 	switch (key) {
// 		case KC.D0:
// 		case KC.D1:
// 		case KC.D2:
// 		case KC.D3:
// 		case KC.D4:
// 		case KC.D5:
// 		case KC.D6:
// 		case KC.D7:
// 		case KC.D8:
// 		case KC.D9:
// 			return addDigit(key.substr(1));

// 		case KC.ADD:
// 		case KC.SUB:
// 		case KC.MUL:
// 		case KC.DIV:
// 			return exeArithmeticOperator(key);

// 		case KC.SQRT:
// 		case KC.LOG:
// 		case KC.LN:
// 		case KC.EXP:
// 			return exeNonTriFunction(key);

// 		case KC.ASIN:
// 		case KC.ACOS:
// 		case KC.ATAN:
// 			return exeArcTriFunction(key);

// 		case KC.SIN:
// 		case KC.COS:
// 		case KC.TAN:
// 			return exeTriFunction(key);

// 		case KC.ARC:
// 			return toggleARC();
// 		case KC.CLR:
// 			return clearStack();
// 		case KC.CLX:
// 			return clearX();
// 		case KC.RCL:
// 			return recall();
// 		case KC.ROLL_DOWN:
// 			return roleStackDown();
// 		case KC.ENTER:
// 			return addEnter();
// 		case KC.DOT:
// 			return addDot();
// 		case KC.SWAP:
// 			return exchangeXWithY();
// 		case KC.POW:
// 			return xPowerY();
// 		case KC.STO:
// 			return storeToMemory();
// 		case KC.RECIPROCAL:
// 			return mulInverseX();
// 		case KC.PI:
// 			return addPI();
// 		case KC.CHS:
// 			return changeSign();
// 		case KC.EEX:
// 			return addEEX();
// 	}
// };
