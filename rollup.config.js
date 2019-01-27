import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';

export default {
	input: ['src/index.ts'],
	output: [{
		dir: 'build/modern',
		format: 'es',
		sourcemap: true,

	}, {
		dir: 'build/nomodule',
		format: 'amd',
		sourcemap: true,
	}],
	plugins: [
    resolve({
		browser: true,
		jsnext: true,
		module: true,
	}),
	typescript()
  ]
};
