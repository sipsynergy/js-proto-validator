const stringTypes = ['string','bytes'];
const numberTypes = ['double', 'float', 'int32', 'int64', 'uint32', 'uint64', 'sint32', 'sint64', 'fixed32', 'sfixed32', 'sfixed64'];

export default function getDefault(type) {
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
	throw new Error(`Type ${type} not recognized`);
}

export function toObjectType(type, value) {
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
	throw new Error(`Type ${type} not recognized`);
}

export function verify(type, value) {
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
	throw new Error(`Type ${type} not recognized`);
}