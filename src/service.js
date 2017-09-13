import each from './util/each';
import sendRequest from './requests';

export default function serviceProvider(path, rpcs, root, options) {

	let TypedService = {};

	TypedService.__type = path;
	let pathSegments = path.split('.');
	TypedService.__name = pathSegments.pop();
	TypedService.__namespace = pathSegments.join('.');

	each(rpcs, rpc => {
		let param = root(getMessageName(rpc.param, TypedService.__namespace)),
			resultType = root(getMessageName(rpc.returns, TypedService.__namespace));

		TypedService[rpc.name] = function(message, noVerify) {
			let shouldVerify = noVerify !== undefined && !noVerify;
			if (shouldVerify && !param.$verify(message)) {
				throw new Error(`Invalid message in ${path}.${rpc.name}`);
			}
			if (options.requestFn) {
				return options.requestFn(TypedService.__type, rpc.name, message, param, resultType);
			}

			let droppedMainPackage = TypedService.__type.split('.');
			droppedMainPackage.shift();

			return sendRequest(options.server, droppedMainPackage, rpc.name, message).then(result => {
				let resultObj = resultType.create(result);
				if (shouldVerify && !resultType.$verify(resultObj)) {
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
		let segments = namespace.split('.'),
			options = [
				name,
				[namespace, name].join('.')
			];
		segments.pop();
		segments.push(name);
		options.push(segments.join('.'));

		return options;
	}

	return [namespace, name].join('.');
}