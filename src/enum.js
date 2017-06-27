import each from './util/each';

export default function enumProvider(path, fields) {

	let enumObj = {
	};

	each(fields, field => {
		enumObj[field.name] = field.val;
	});

	enumObj.$verify = function(value) {
		if (value === null) {
			return true;
		}
		let valid = false;
		each(enumObj, (val, key) => {
			if (value === val) {
				valid = true;
			}
		});
		return valid;
	};

	return enumObj;
}