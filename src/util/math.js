export const nonTriFunctions = {
	sqrt: Math.sqrt,
	log: Math.log10,
	ln: Math.log,
	exp: Math.exp
};

export const triFunctions = {
	sin: { normal: Math.sin, arc: Math.asin },
	cos: { normal: Math.cos, arc: Math.acos },
	tan: { normal: Math.tan, arc: Math.atan }
};

export const binaryFunctions = {
	add(a, b) {
		return a + b;
	},
	sub(a, b) {
		return a - b;
	},
	mul(a, b) {
		return a * b;
	},
	div(a, b) {
		return a / b;
	}
};
