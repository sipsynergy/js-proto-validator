const rawEnumTemplate = `
/**
 * A <%= name %>
 * @name <%= name %>
 <% _.forEach(params, function(param) { %> * @property {int} <%- param %>\n<% }); %>
 */
  export const <%= name %> = root('<%= path %>');
  
`;

const _ = require('lodash');
const enumTemplate = _.template(rawEnumTemplate);

function createEnumDefinition(enumObj, path) {
	return enumTemplate({
		name: enumObj.name,
		params: _.map(enumObj.content, function(param) {
			return param.name
		}),
		parentPath: path,
		module: path.split('.').pop(),
		path: [path, enumObj.name].join('.')
	});
}

module.exports = createEnumDefinition;