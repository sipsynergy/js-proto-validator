import each from './util/each';

const arrayTypes = ['bytes'];
const stringTypes = ['string','bytes'];
const numberTypes = ['double', 'float', 'int32', 'int64', 'uint32', 'uint64', 'sint32', 'sint64', 'fixed32', 'sfixed32', 'sfixed64'];

export default function getDefault(type) {
	if (type.repeated || arrayTypes.indexOf(type) >= 0) {
		return [];
	}
	if (stringTypes.indexOf(type) >= 0) {
		return '';
	}
	if (numberTypes.indexOf(type) >= 0) {
		return 0;
	}
	switch (type) {
		case 'bool':
			return false;
		case 'google.protobuf.Timestamp':
			return new Date();
	}
	return null;
}

export function toObjectType(type, value, root, namespace) {
	if (arrayTypes.indexOf(type) >= 0) {
		return toObjectType({ typename: type, repeated: true });
	}
	if (type.repeated) {
		let result = [];
		if (value && value instanceof Array) {
			each(value, val => {
				result.push(toObjectType(type.typename, val, root, namespace));
			});
		}
		return result;
	}
	if (stringTypes.indexOf(type) >= 0) {
		return String(value);
	}
	if (numberTypes.indexOf(type) >= 0) {
		return parseFloat(value);
	}
	switch (type) {
		case 'bool':
			return Boolean(value);
		case 'google.protobuf.Timestamp':
			return (new Date(value)).getTime();
	}
	let typeName = type;
	if (type.indexOf('.') < 0) {
		typeName = [namespace, type].join('.');
	}
	let rootType = root(typeName);

	if (rootType.toObject && value.toObject) {
		return value.toObject();
	}
	return value;
}

export function verify(type, value, root, namespace) {
	if (arrayTypes.indexOf(type) >= 0) {
		return verify({ typename: type, repeated: true });
	}
	if (type.repeated) {
		if (value && value instanceof Array) {
			let result = true;
			each(value, val => {
				if (!verify(type.typename, val, root, namespace)) {
					result = false;
				}
			});
			return result;
		}
		return false;
	}
	if (stringTypes.indexOf(type) >= 0) {
		return typeof value === 'string';
	}
	if (numberTypes.indexOf(type) >= 0) {
		return typeof value === 'number';
	}
	switch (type) {
		case 'bool':
			return typeof value === 'boolean';
		case 'google.protobuf.Timestamp':
			return value instanceof Date;
	}
	let rootType = root([namespace, type].join('.'));
	if (rootType.$verify) {
		return rootType.$verify(value);
	}
	throw new Error(`Type ${type} not recognized`);
}