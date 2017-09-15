import C from "../constants";
import { nonTriFunctions, triFunctions, binaryFunctions } from "../util/math";
import KC from "../keyCodes";

export const keyCode = key => {
	switch (key) {
		case KC.D0:
		case KC.D1:
		case KC.D2:
		case KC.D3:
		case KC.D4:
		case KC.D5:
		case KC.D6:
		case KC.D7:
		case KC.D8:
		case KC.D9:
			return addDigit(key.substr(1));

		case KC.ADD:
		case KC.SUB:
		case KC.MUL:
		case KC.DIV:
			return exeArithmeticOperator(key);

		case KC.SQRT:
		case KC.LOG:
		case KC.LN:
		case KC.EXP:
			return exeNonTriFunction(key);

		case KC.SIN:
		case KC.COS:
		case KC.TAN:
			return exeTriFunction(key);

		case KC.ARC:
			return toggleARC();
		case KC.CLR:
			return clearStack();
		case KC.CLX:
			return clearX();
		case KC.RCL:
			return recall();
		case KC.ROLL_DOWN:
			return roleStackDown();
		case KC.ENTER:
			return addEnter();
		case KC.DOT:
			return addDot();
		case KC.SWAP:
			return exchangeXWithY();
		case KC.POW:
			return xPowerY();
		case KC.STO:
			return storeToMemory();
		case KC.RECIPROCAL:
			return mulInverseX();
		case KC.PI:
			return addPI();
		case KC.CHS:
			return changeSign();
		case KC.EEX:
			return addEEX();
	}
};

export const addDigit = digit => (dispatch, getState) => {
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

export const addDot = () => (dispatch, getState) => {
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

export const exchangeXWithY = () => ({
	type: C.EXCHANGE_X_WITH_Y
});
export const roleStackDown = () => ({
	type: C.ROLE_DOWN
});
export const addEnter = () => ({
	type: C.ENTER
});
export const exeArithmeticOperator = funcName => ({
	type: C.EXE_ARITHMETIC_OPERATOR,
	payload: binaryFunctions[funcName]
});
export const exeNonTriFunction = funcName => ({
	type: C.EXE_NON_TRI_FUNCTION,
	payload: nonTriFunctions[funcName]
});
export const exeTriFunction = funcName => (dispatch, getState) => {
	const { arc } = getState();
	let func;
	if (arc) {
		func = triFunctions[funcName]["arc"];
	} else {
		func = triFunctions[funcName]["normal"];
	}

	dispatch({
		type: C.EXE_TRI_FUNCTION,
		payload: func
	});
};
export const xPowerY = () => ({ type: C.X_POW_Y });

export const recall = () => (dispatch, getState) => {
	const { memory } = getState();

	dispatch({
		type: C.REC,
		payload: memory
	});
};
export const storeToMemory = () => (dispatch, getState) => {
	const { stack } = getState();

	dispatch({
		type: C.STO,
		payload: stack[0]
	});
};
// 1/x
export const mulInverseX = () => ({ type: C.MUL_INVERSE_X });
export const clearX = () => ({ type: C.CLX });
export const clearStack = () => ({ type: C.CLR });
export const addPI = () => ({ type: C.ADD_PI });
export const changeSign = () => ({ type: C.CHS });

export const toggleARC = () => (dispatch, getState) => {
	const { arc } = getState();
	dispatch({
		type: C.ARC,
		payload: !arc
	});
};

export const addEEX = () => ({ type: C.ADD_EEX });
