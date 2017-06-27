const rawPkgTemplate = `
import root from '<%= rootPath %>'

<% _.forEach(definitions, function(def) { %><%= def %>\n<% }); %>
  
`;

const _ = require('lodash');
const pkgTemplate = _.template(rawPkgTemplate);
const enumDefinition = require('./enum');
const messageDefinition = require('./message');
const serviceDefinition = require('./service');
const beautify = require('js-beautify');

function createPkgDefinition(pkgDefinition, parentPath) {
	let pkgCopy = _.cloneDeep(pkgDefinition),
		definitions = [],
		exports = [];
	delete pkgCopy.type
	delete pkgCopy.name

	_.forEach(pkgCopy, (value, name) => {
		switch (value.type) {
			case 'enum':
				definitions.push(enumDefinition(value, parentPath));
				break;
			case 'service':
				definitions.push(serviceDefinition(value, parentPath));
				break;
			case 'message':
				definitions.push(messageDefinition(value, parentPath));
				break;
			case 'pkg':
				let childPath = parentPath ? [parentPath, value.name].join('.'): value.name;
				exports = _.concat(exports, createPkgDefinition(value, childPath));
				break;
		}
	});

	exports.push({
		path: parentPath,
		content: definitions.length > 0 ? beautify(pkgTemplate({
			name: pkgDefinition.name,
			definitions: definitions,
			rootPath: './index'
		}), { indent_size: 2 }) : null
	});
	return exports
}

module.exports = createPkgDefinition;