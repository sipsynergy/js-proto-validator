const _ = require('lodash');
const read = require('../util/read');

function generate(data) {
	let root = {};
	_.forEach(data, d => {
		let pkg = read.getPackage(d),
			messages = read.get(d, 'message'),
			services = read.get(d, 'service');

		_.forEach(messages, message => {
			_.set(root, `${pkg}.${message.name}`, prepareMessage(message));
		});

		_.forEach(services, service => {
			_.set(root, `${pkg}.${service.name}`, prepareService(service));
		})
	});

	return root;
}

function prepareMessage(message) {
	return {
		type: 'message',
		content: _.map(read.get(message, 'field'), field => {
			delete field.repeated;
			delete field.fieldNo;
			delete field.type;
			return field;
		}, {})
	};
}

function prepareService(service) {
	return {
		type: 'service',
		content: _.map(read.get(service, 'rpc'), rpc => {
			delete rpc.type;
			delete rpc.opts;
			return rpc;
		})
	};
}

module.exports = {
	generate
}