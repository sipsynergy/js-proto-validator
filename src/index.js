import get from './util/get';
import each from './util/each';
import merge from './util/merge';
import messageProvider from './message';
import serviceProvider from './service';
import enumProvider from './enum';

let defaultOptions = {
	ignoreTypes: []
};

export default function protoProvider(json, options) {
	let loaded = {};
	let opts = merge(defaultOptions, options);

	return function root(path) {
		if (path instanceof Array) {
			let result = null;
			each(path, p => {
				if (result) {
					return;
				}
				try {
					result = root(p);
				} catch(e) {}
			});
			if (result) {
				return result;
			} else {
				throw new Error(`Definition [${path.join(', ')}] not found`);
			}
		}
		if (loaded[path]) {
			return loaded[path];
		}
		let definition = get(json, path, null);
		if (definition === null) {
			throw new Error(`Definition [${path}] not found`);
		}

		switch (definition.type) {
			case 'message':
				return loaded[path] = messageProvider(path, definition.content, root, opts);
			case 'service':
				return loaded[path] = serviceProvider(path, definition.content, root, opts);
			case 'enum':
				return enumProvider(path, definition.content);
		}
		throw new Error('Definition found but unrecognized');
	}
}