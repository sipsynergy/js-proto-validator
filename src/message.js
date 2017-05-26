import each from './util/each';
import getDefault, { toObjectType, verify } from './type';

export default function messageProvider(path, fields, options) {

	let parameterMap = {};

	each(fields, field => {
		if (options.ignoreTypes.indexOf(field.typename) < 0) {
			parameterMap[field.name] = field.typename;
		}
	});

	function TypedMessage(parameters) {
		each(parameterMap, (value, key) => {
			if (parameters[key] !== null && parameters.hasOwnProperty(key)) {
				this[key] = parameters[key];
			}
		});
	}

	TypedMessage.type = path;
	each(parameterMap, (type, name) => {
		TypedMessage.prototype[name] = getDefault(type);
	});

	TypedMessage.create = function(parameters) {
		return new TypedMessage(parameters);
	}

	TypedMessage.prototype.toObject = function() {
		let obj = {};
		each(parameterMap, (type, name) => {
			if (this[name] !== null && this[name] !== getDefault(type)) {
				obj[name] = toObjectType(type, this[name]);
			}
		});
		return obj;
	}

	TypedMessage.verify = function(message) {
		let result = true;

		each(parameterMap, (type, name) => {
			if (!verify(type, message[name])) {
				result = false;
				return true;
			}
		});

		return result;
	}

	return TypedMessage;
}