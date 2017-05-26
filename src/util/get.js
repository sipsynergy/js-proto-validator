import each from './each'

export default function get(obj, pathToValue, defaultValue) {
	let segments = pathToValue.split('.'),
		currentValue = obj,
		result;

	each(segments, segment => {
		if (currentValue[segment] === undefined) {
			result = defaultValue;
			return true;
		}
		currentValue = currentValue[segment]
	});

	if (result === undefined) {
		result = currentValue;
	}

	return result;
}