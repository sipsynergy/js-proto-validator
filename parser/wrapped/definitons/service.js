const rawServiceTemplate = `
/**
 * A <%= name %> Service.
 * @class <%= name %>
 * @property {string} __type The full path of the service definition
 * @property {string} __name The name of the service
 * @property {string} __namespace The path of the service definition without its name
 */
 
 
 <% _.forEach(rpcs, function(rpc) { %> 
 /**
  * @function <%- rpc.name %>
  * @memberof <%= name %>#
  * @param {<%- rpc.message %>Message} message
  * @returns {<%- rpc.returns %>Message}
  */
 <% }); %>
 
   
  /** @var <%= name %> */
  const <%= name %> = root('<%= path %>');
  
`;

const _ = require('lodash');
const pathToName = require('../util/pathToName')
const serviceTemplate = _.template(rawServiceTemplate);

function createServiceDefinition(serviceName, rpcs, path) {
	return serviceTemplate({
		name: pathToName(serviceName),
		rpcs: _.map(rpcs, rpc => {
			return {
				name: pathToName(rpc.name),
				message: pathToName(rpc.param),
				returns: pathToName(rpc.returns)
			}
		}),
		path: path
	});
}

module.exports = createServiceDefinition;