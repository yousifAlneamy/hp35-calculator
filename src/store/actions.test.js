import * as KC from "../keyCodes";
import storeFactory from "./index";
import keyCodes from "./actions";

//console.log(store);

test("Add 2 digits to stack", () => {
	const store = storeFactory();
	store.dispatch(keyCodes[KC.D1]);
	store.dispatch(keyCodes[KC.D9]);
	const { stack, arc, stackShift, memory, refreshEntry } = store.getState();

	expect(stack).toEqual(["19", "0", "0", "0"]);
	expect(arc).toBe(false);
	expect(stackShift).toBe(false);
	expect(memory).toBe("0");
	expect(refreshEntry).toBe(false);
});

test("Add 2 digits to stack and change sign to negative", () => {
	const store = storeFactory();
	store.dispatch(keyCodes[KC.D1]);
	store.dispatch(keyCodes[KC.D9]);
	store.dispatch(keyCodes[KC.CHS]);
	const { stack, arc, stackShift, memory, refreshEntry } = store.getState();

	expect(stack).toEqual(["-19", "0", "0", "0"]);
	expect(arc).toBe(false);
	expect(stackShift).toBe(false);
	expect(memory).toBe("0");
	expect(refreshEntry).toBe(false);
});

test("Calc Pow function", () => {
	const store = storeFactory();
	store.dispatch(keyCodes[KC.D5]);
	store.dispatch(keyCodes[KC.ENTER]);
	store.dispatch(keyCodes[KC.D9]);
	store.dispatch(keyCodes[KC.POW]);
	let { stack, arc, stackShift, memory, refreshEntry } = store.getState();
	stack = stack.map(Number);
	expect(stack).toEqual([Math.pow(9, 5), 0, 0, 0]);
	expect(arc).toBe(false);
	expect(stackShift).toBe(true);
	expect(memory).toBe("0");
	expect(refreshEntry).toBe(false);
});

test("find LOG of x", () => {
	const store = storeFactory();
	store.dispatch(keyCodes[KC.D5]);
	store.dispatch(keyCodes[KC.LOG]);
	let { stack, arc, stackShift, memory, refreshEntry } = store.getState();
	stack = stack.map(Number);
	expect(stack).toEqual([Math.log10(5), 0, 0, 0]);
	expect(arc).toBe(false);
	expect(stackShift).toBe(true);
	expect(memory).toBe("0");
	expect(refreshEntry).toBe(false);
});

test("find LN of x", () => {
	const store = storeFactory();
	store.dispatch(keyCodes[KC.D5]);
	store.dispatch(keyCodes[KC.D5]);
	store.dispatch(keyCodes[KC.LN]);
	let { stack, arc, stackShift, memory, refreshEntry } = store.getState();
	stack = stack.map(Number);
	expect(stack).toEqual([Math.log(55), 0, 0, 0]);
	expect(arc).toBe(false);
	expect(stackShift).toBe(true);
	expect(memory).toBe("0");
	expect(refreshEntry).toBe(false);
});

test("find LN of x", () => {
	const store = storeFactory();
	store.dispatch(keyCodes[KC.D5]);
	store.dispatch(keyCodes[KC.D5]);
	store.dispatch(keyCodes[KC.LN]);
	let { stack, arc, stackShift, memory, refreshEntry } = store.getState();
	stack = stack.map(Number);
	expect(stack).toEqual([Math.log(55), 0, 0, 0]);
	expect(arc).toBe(false);
	expect(stackShift).toBe(true);
	expect(memory).toBe("0");
	expect(refreshEntry).toBe(false);
});