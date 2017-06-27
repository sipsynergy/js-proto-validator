const rawMainTemplate = `
import protoProvider from '@sipsynergy/proto-valid'
import options from './config.js'

const root = protoProvider(<%= json %>, options);
export default root;
`;

const _ = require('lodash');
const mainTemplate = _.template(rawMainTemplate);
const read = require('../util/read');
const createPkgDefinition = require('./definitons/pkg');

function generate(data) {
	let root = {
			name: "root"
		};

	_.forEach(data, d => {
		let pkg = read.getPackage(d),
			messages = read.get(d, 'message'),
			services = read.get(d, 'service'),
			enums = read.get(d, 'enum');

		ensurePackage(pkg, root);

		_.forEach(enums, en => {
			_.set(root, `${pkg}.${en.name}`, prepareEnum(en));
		});

		_.forEach(messages, message => {
			_.set(root, `${pkg}.${message.name}`, prepareMessage(message));
		});

		_.forEach(services, service => {
			_.set(root, `${pkg}.${service.name}`, prepareService(service));
		})
	});
	let rootDefinition = {
		path: 'sipsynergy.index',
		content: mainTemplate({
			json: JSON.stringify(root)
		})
	}

	return _.concat([rootDefinition], createPkgDefinition(root));

}

function prepareEnum(en) {
	return {
		type: 'enum',
		name: en.name,
		content: _.map(read.get(en, 'enumField'), field => {
			delete field.type;
			delete field.opts;
			return field;
		})
	}
}

function prepareMessage(message) {
	return {
		type: 'message',
		name: message.name,
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
		name: service.name,
		content: _.map(read.get(service, 'rpc'), rpc => {
			delete rpc.type;
			delete rpc.opts;
			return rpc;
		})
	};
}

function ensurePackage(path, root) {
	let segments = path.split('.'),
		currentPosition = root;

	_.forEach(segments, segment => {
		if (!currentPosition[segment]) {
			currentPosition[segment] = {
				type: 'pkg',
				name: segment
			}
		}
		currentPosition = currentPosition[segment];
	})
}

module.exports = {
	generate
}