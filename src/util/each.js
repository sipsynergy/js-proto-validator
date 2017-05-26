export default function each(collection, fn) {
	let e = Array.isArray(collection) ? eachArray : eachObj;
	return e(collection, fn);
}

function eachArray(collection, fn) {
	for (let i = 0; i < collection.length; ++i) {
		if (fn(collection[i], i)) {
			break;
		}
	}
	return collection;
}

function eachObj(collection, fn) {
	let keys = Object.keys(collection);
	return eachArray(keys, key => {
		fn(collection[key], key);
	});
}