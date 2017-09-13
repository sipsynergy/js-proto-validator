import each from './util/each';
import getDefault, { toObjectType, verify } from './type';

/**
 * A number, or a string containing a number.
 * @typedef {Object} TypedMessage
 * @property {string} __type
 * @property {Function} create
 * @property {Function} toObject
 * @property {Function} $verify
 */

/**
 * Creates a message of the specified type.
 *
 * @param path
 * @param fields
 * @param root
 * @param options
 * @returns {TypedMessage}
 */
export default function messageProvider(path, fields, root, options) {

	let parameterMap = {};

	each(fields, field => {
		if (options.ignoreTypes.indexOf(field.typename) < 0) {
			if (field.repeated) {
				parameterMap[field.name] = field;
			} else {
				parameterMap[field.name] = field.typename;
			}
		}
	});

	function TypedMessage(parameters) {
		each(parameterMap, (value, key) => {
			if (parameters[key] !== null && parameters.hasOwnProperty(key)) {
				this[key] = parameters[key];
			}
		});
	}

	TypedMessage.__type = path;
	let segments = path.split('.');
	segments.pop();
	TypedMessage.__namespace = segments.join('.');
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
				obj[name] = toObjectType(type, this[name], root, TypedMessage.__namespace);
			}
		});
		return obj;
	}

	TypedMessage.$verify = function(message) {
		let result = true;

		each(parameterMap, (type, name) => {
			if (!verify(type, message[name], root, TypedMessage.__namespace)) {
				result = false;
				return true;
			}
		});

		return result;
	}

	return TypedMessage;
}