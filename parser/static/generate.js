const fs = require('fs');
const _ = require('lodash')

const read = require('../util/read');
const types = require('./types');

const templateOptions = {
	interpolate: /__([^_ ]+)__/g,
	evaluate: new RegExp('\/\/<\%(.*)\%>', 'gm')
};

const pkgTmpl = _.template(fs.readFileSync(require.resolve('./templates/package.tmpl.js')).toString(), templateOptions);
const messageTmpl = _.template(fs.readFileSync(require.resolve('./templates/message.tmpl.js')).toString(), templateOptions);
const serviceTmpl = _.template(fs.readFileSync(require.resolve('./templates/service.tmpl.js')).toString(), templateOptions);
const utilTmpl = fs.readFileSync(require.resolve('./templates/util.js')).toString();


module.exports = function generate(data) {
	let result = utilTmpl;

	if (_.isArray(data)) {
		_.forEach(data, d => {
			result += handleGenerate(d);
		})
	} else {
		result += handleGenerate(data);
	}

	return result
}

function handleGenerate(data) {
	let pkg = _.camelCase(read.getPackage(data)),
		messages = read.get(data, 'message'),
		services = read.get(data, 'service');

	let compiledMessages = _.map(messages, message => {
		return messageTmpl(_.assign(message, {
			pkg: pkg,
			properties: _.map(read.get(message, 'field'), field => {
				field['default'] = types.getDefault(field.typename)
				return field;
			})
		}));
	})

	let compiledServices = _.map(services, service => {
		return serviceTmpl(_.assign(service, {
			pkg: pkg,
			services: read.get(service, 'rpc')
		}));
	})

	return pkgTmpl({
		pkg: pkg,
		messages: compiledMessages,
		services: compiledServices
	});
}