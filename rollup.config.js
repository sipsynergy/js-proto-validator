import uglify from 'rollup-plugin-uglify';
import buble from 'rollup-plugin-buble';

export default {
	entry: './src/index.js',
	dest: './dist/proto-valid.min.js',
	external: ['whatwg-fetch'],
	format: 'cjs',
	plugins: [
		buble(),
		uglify()
	]
};