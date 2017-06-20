import each from './util/each';
import getDefault, { toObjectType, verify } from './type';

/**
 * A number, or a string containing a number.
 * @typedef {Object} TypedMessage
 * @property {string} __type
 * @property {Function} create
 * @property {Function} toObject
 * @property {Function} verify
 */

/**
 * Creates a message of the specified type.
 *
 * @param path
 * @param fields
 * @param options
 * @returns {TypedMessage}
 */
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

	TypedMessage.__type = path;
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