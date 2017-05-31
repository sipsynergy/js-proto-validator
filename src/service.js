import each from './util/each';
import sendRequest from './requests';

export default function serviceProvider(path, rpcs, root, server) {

	let TypedService = {};

	TypedService.__type = path;
	let pathSegments = path.split('.');
	TypedService.__name = pathSegments.pop();
	TypedService.__namespace = pathSegments.join('.');

	each(rpcs, rpc => {
		let param = root(getMessageName(rpc.param, TypedService.__namespace)),
			resultType = root(getMessageName(rpc.returns, TypedService.__namespace));

		TypedService[rpc.name] = function(message) {
			if (!param.verify(message)) {
				throw new Error(`Invalid message in ${path}.${rpc.name}`);
			}
			return sendRequest(server, TypedService.__name.toLowerCase(), rpc.name, message).then(result => {
				let resultObj = resultType.create(result);
				if (!resultType.verify(resultObj)) {
					throw new Error(`Invalid response in ${path}.${rpc.name}`);
				}
				return resultObj;
			});
		};
	});

	return TypedService;
}

function getMessageName(name, namespace) {
	if (name.indexOf('.') >= 0) {
		return name;
	}

	return [namespace, name].join('.');
}