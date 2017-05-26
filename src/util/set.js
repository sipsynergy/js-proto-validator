import each from './each'

export default function set(obj, pathToValue, value) {
	let segments = pathToValue.split('.'),
		currentValue = obj;
	each(segments.slice(0, segments.length -1), segment => {
		if (!currentValue[segment]) {
			currentValue[segment] = {};
		}
		currentValue = currentValue[segment]
	});

	currentValue[segments[segments.length - 1]] = value;
	return obj;
}