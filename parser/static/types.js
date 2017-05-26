function getDefault(type) {
	switch (type) {
		case 'string':
		case 'bytes':
			return '""';
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
			return '0';
		case 'bool':
			return 'false';
		case 'google.protobuf.Timestamp':
			return 'new Date()';
	}
	throw new Error(`Type ${type} not recognized`);
}

module.exports = {
	getDefault
}