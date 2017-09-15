const rawMessageTemplate = `
/**
 * A <%= name %> Message.
 * @class <%= name %>
 * @property {string} __type The type of the message.
 */
  export const <%= name %> = root('<%= path %>');
 
 /**
 * @typedef {Object} <%= name %>Obj
 <% _.forEach(params, function(param) { %> * @property {<%- param.type %><%- param.repeated ? '[]' : '' %><%- param.required ? '' : '|null|undefined' %>} <%- param.name %>\n<% }); %>
 */
  
 /**
 * @typedef {Object} <%= name %>Message
 <% _.forEach(params, function(param) { %> * @property {<%- param.type %><%- param.repeated ? '[]' : '' %><%- param.required ? '' : '|null|undefined' %>} <%- param.name %>\n<% }); %>
 */
 
 /**
  * @function create
  * @constructs <%= name %>Message
  * @memberof <%= name %>
  * @param {<%= name %>Obj} params
  * @returns {<%= name %>Message}
  */
 
 /**
  * @function $verify
  * @memberof <%= name %>
  * @param {Object} obj
  * @returns {boolean}
  */
 
 /**
  * @function toObject
  * @memberof <%= name %>Message
  * @returns {<%= name %>Obj}
  */
  
`;

const _ = require('lodash');
const messageTemplate = _.template(rawMessageTemplate);
const protoToJSType = require('../util/types');

function createMessageDefinition(messageObj, path) {
	return messageTemplate({
		name: messageObj.name,
		params: _.map(messageObj.content, function(param) {
			let required = false,
				validation = [];

			if (param.tags.valid) {
				validation = param.tags.valid.split(',');
				required = validation.indexOf('required') >= 0;
			}
			return {
				name: param.name,
				type: protoToJSType(param.typename),
				repeated: param.repeated,
				required: required,
				validation: validation
			}
		}),
		parentPath: path,
		module: path.split('.').pop(),
		path: [path, messageObj.name].join('.')
	});
}

module.exports = createMessageDefinition;