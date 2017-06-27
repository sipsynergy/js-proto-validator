function protoToJSType(typeName) {
	if (typeName.indexOf('[]') >= 0) {
		return 'Array';
	}
	switch(typeName) {
		case 'string':
		case 'double':
		case 'float':
			return typeName
		case 'bytes':
			return 'string'
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
			return 'int';
		case 'bool':
			return 'boolean';
		case 'google.protobuf.Timestamp':
			return 'Date';
	}
	return typeName
}

module.exports = protoToJSType;