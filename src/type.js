import each from './util/each';

const arrayTypes = ['bytes'];
const arrayTypeMap = {
	bytes: 'string'
};
const stringTypes = ['string','bytes'];
const numberTypes = ['double', 'float', 'int32', 'int64', 'uint32', 'uint64', 'sint32', 'sint64', 'fixed32', 'sfixed32', 'sfixed64'];

export default function getDefault(type) {
	if (type.repeated || arrayTypes.indexOf(type.typename) >= 0) {
		return [];
	}
	if (stringTypes.indexOf(type.typename) >= 0) {
		return '';
	}
	if (numberTypes.indexOf(type.typename) >= 0) {
		return 0;
	}
	switch (type.typename) {
		case 'bool':
			return false;
		case 'google.protobuf.Timestamp':
			return new Date();
	}
	return null;
}

export function toObjectType(type, value, root, namespace) {
	if (arrayTypes.indexOf(type.typename) >= 0) {
      type.repeated = true;
      type.typename = arrayTypeMap[type.typename];
	}
	if (type.repeated) {
		let result = [];
		if (value && value instanceof Array) {
			each(value, val => {
				result.push(toObjectType({ typename: type.typename }, val, root, namespace));
			});
		}
		return result;
	}
	if (stringTypes.indexOf(type.typename) >= 0) {
		return String(value);
	}
	if (numberTypes.indexOf(type.typename) >= 0) {
		return parseFloat(value);
	}
	switch (type.typename) {
		case 'bool':
			return Boolean(value);
		case 'google.protobuf.Timestamp':
			return (new Date(value)).getTime();
	}
	let typeName = type.typename;
	if (type.indexOf('.') < 0) {
		typeName = [namespace, type.typename].join('.');
	}
	let rootType = root(typeName);

	if (rootType.toObject && value.toObject) {
		return value.toObject();
	}
	return value;
}

export function verify(type, value, root, namespace) {
	if (!type.required) {
		return true;
	}
	if (arrayTypes.indexOf(type.typename) >= 0) {
		type.repeated = true;
		type.typename = arrayTypeMap[type.typename];
	}
	if (type.repeated) {
		if (value && value instanceof Array) {
			let result = true;
			each(value, val => {
				if (!verify(type, val, root, namespace)) {
					result = false;
				}
			});
			return result;
		}
		return false;
	}
	if (stringTypes.indexOf(type.typename) >= 0) {
		return typeof value === 'string';
	}
	if (numberTypes.indexOf(type.typename) >= 0) {
		return typeof value === 'number';
	}
	switch (type.typename) {
		case 'bool':
			return typeof value === 'boolean';
		case 'google.protobuf.Timestamp':
			return value instanceof Date;
	}
	let rootType = root([namespace, type.typename].join('.'));
	if (rootType.$verify) {
		return rootType.$verify(value);
	}
	throw new Error(`Type ${type.typename} not recognized`);
}