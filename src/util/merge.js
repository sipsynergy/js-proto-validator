import each from './each';

export default function merge() {
	let result = arguments[0];
	each(Array.prototype.slice.call(arguments).slice(1), obj => {
		each(obj, (val, key) => {
			if (val instanceof Object && result[key] && result[key] instanceof Object) {
				result[key] = merge(result[key], val);
			} else {
				result[key] = val;
			}
		});
	})
	return result;
}