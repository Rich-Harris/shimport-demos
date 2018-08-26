const input = document.querySelector('#input');
const output = document.querySelector('#output');
const time = document.querySelector('#time');

input.value = `
import foo from './foo.js';
import { a, b } from './bar.js';
import * as baz from './baz.js';

export const answer = 42;
`.trim();

function update() {
	const start = window.performance.now();
	const transformed = __shimport__.transform(input.value, 'demo.js');
	const duration = window.performance.now() - start;

	output.value = transformed;
	time.textContent = `transformed in ${duration.toFixed(2)}ms`;
}

input.addEventListener('input', update);
update();