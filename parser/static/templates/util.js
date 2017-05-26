const _ = require('lodash');

function validateType(type, value) {
	switch (type) {
		case 'string':
			return _.isString(value);
		case 'bytes':
			return _.isArrayLike(value) || _.isString(value);
		case 'double':
		case 'float':
		case 'int32':
		case 'int64':
		case 'uint32':
		case 'uint64':
		case 'sint32':
		case 'sint64':
		case 'fixed32':
		case 'fixed64':
		case 'sfixed32':
		case 'sfixed64':
			return _.isNumber(value);
		case 'bool':
			return _.isBoolean(value);
		case 'google.protobuf.Timestamp':
			return _.isDate(value);
	}
	throw new Error(`Unrecognized type ${type} of value ${value}`);
}

function castType(type, value) {
	switch (type) {
		case 'string':
			return String(value);
		case 'bytes':
			return value;
		case 'double':
		case 'float':
			return parseFloat(value);
		case 'int32':
		case 'int64':
		case 'uint32':
		case 'uint64':
		case 'sint32':
		case 'sint64':
		case 'fixed32':
		case 'fixed64':
		case 'sfixed32':
		case 'sfixed64':
			return parseInt(value);
		case 'bool':
			return Boolean(value);
		case 'google.protobuf.Timestamp':
			return new Date(value);
	}
	throw new Error(`Unrecognized type ${type} of value ${value}`);
}

