const rawMainTemplate = `
const protoProvider = require('@sipsynergy/proto-valid');

/**
 @typedef {Object} ProtoProvider
 <% _.forEach(messages, function(message) { %> * @property {<%- message %>} <%- message %>\n<% }); %>
 <% _.forEach(services, function(service) { %> * @property {<%- service %>} <%- service %>\n<% }); %>
 */
 
/**
 * @returns {ProtoProvider}
 */
const provider = function(options) {
	
	const root = protoProvider(<%= json %>, options);

	<%= content %>
	
	return {
 <% _.forEach(messages, function(message) { %>
		<%= message %>: <%= message %>,
 <% }); %>
 <% _.forEach(services, function(service) { %>
		<%= service %>: <%= service %>,
 <% }); %>
	};
};

module.exports = provider;
`;

const _ = require('lodash');
const mainTemplate = _.template(rawMainTemplate);
const read = require('../util/read');
const pathToName = require('./util/pathToName');
const messageDefinition = require('./definitons/message');
const serviceDefinition = require('./definitons/service');

function generate(data) {
	let root = {},
		listMessages = [],
		listServices = [],
		content = '';

	_.forEach(data, d => {
		let pkg = read.getPackage(d),
			messages = read.get(d, 'message'),
			services = read.get(d, 'service');

		_.forEach(messages, message => {
			let m = prepareMessage(message),
				path = `${pkg}.${message.name}`;

			listMessages.push(pathToName(message.name));
			content += messageDefinition(message.name, m.content, path);
			_.set(root, path, m);
		});

		_.forEach(services, service => {
			let s = prepareService(service),
				path = `${pkg}.${service.name}`;

			listServices.push(pathToName(service.name));
			content += serviceDefinition(service.name, s.content, path);
			_.set(root, path, s);
		})
	});

	return mainTemplate({
		messages: listMessages,
		services: listServices,
		content: content,
		json: JSON.stringify(root)
	});
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