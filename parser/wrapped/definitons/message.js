const pathToName = require('../util/pathToName');
const rawMessageTemplate = `
/**
 * A <%= name %> Message.
 * @class <%= name %>
 * @property {string} __type The type of the message.
 */
  const <%= name %> = root('<%= path %>');
 
 /**
 * @typedef {Object} <%= name %>Obj
 <% _.forEach(params, function(param) { %> * @property {<%- param.type %>} <%- param.name %>\n<% }); %>
 */
  
 /**
 * @typedef {Object} <%= name %>Message
 <% _.forEach(params, function(param) { %> * @property {<%- param.type %>} <%- param.name %>\n<% }); %>
 */
 
 /**
  * @function create
  * @constructs <%= name %>Message
  * @memberof <%= name %>#
  * @params {<%= name %>Obj} params
  * @returns {<%= name %>Message}
  */
 
 /**
  * @function verify
  * @memberof <%= name %>#
  * @params {Object} obj
  * @returns {boolean}
  */
 
 /**
  * @function toObject
  * @memberof <%= name %>Message#
  * @returns {<%= name %>Obj}
  */
  
`;

const _ = require('lodash');
const messageTemplate = _.template(rawMessageTemplate);

function createMessageDefinition(messageName, params, path) {
	return messageTemplate({
		name: pathToName(messageName),
		params: _.map(params, function(param) {
			return {
				name: param.name,
				type: pathToName(param.typename)
			}
		}),
		path: path
	});
}

module.exports = createMessageDefinition;