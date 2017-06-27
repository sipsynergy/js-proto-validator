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
  * @param {<%- rpc.message %>} message
  * @returns {<%- rpc.returns %>}
  */
 <% }); %>
 
   
  /** @var <%= name %> */
  export const <%= name %> = root('<%= path %>');
  
`;

const _ = require('lodash');
const serviceTemplate = _.template(rawServiceTemplate);

function createServiceDefinition(serviceObj, path) {
	let module = path.split('.').pop();
	return serviceTemplate({
		name: serviceObj.name,
		rpcs: _.map(serviceObj.content, rpc => {
			return {
				name: rpc.name,
				message: absolutePath(rpc.param, module),
				returns: absolutePath(rpc.returns, module)
			}
		}),
		parentPath: path,
		module: module,
		path: [path, serviceObj.name].join('.')
	});
}

function absolutePath(name, module) {
	if (name.indexOf('.') >= 0) {
		let segments = name.split('.')
		return `${segments.pop()}Message`
	}
	return `${name}Message`;
}

module.exports = createServiceDefinition;