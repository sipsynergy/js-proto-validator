import get from './util/get';
import merge from './util/merge';
import messageProvider from './message';
import serviceProvider from './service';

let defaultOptions = {
	ignoreTypes: []
};

export default function protoProvider(json, options) {
	let loaded = {};
	let opts = merge(defaultOptions, options);

	return function root(path) {
		if (loaded[path]) {
			return loaded[path];
		}
		let definition = get(json, path, null);
		if (definition === null) {
			throw new Error('Definition not found');
		}

		if (definition.type === 'message') {
			return loaded[path] = messageProvider(path, definition.content, opts);
		} else {
			return loaded[path] = serviceProvider(path, definition.content, root, opts);
		}
	}
}