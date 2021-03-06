export default function sendRequest(server, service, rpc, message) {
	let endpoint = server;
	if (server[server.length - 1] !== '/') {
		endpoint += '/';
	}
	endpoint += service.concat(rpc).join('/')
	return fetch(endpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(message.toObject())
	}).then(checkStatus)
}


function checkStatus (response) {
	if (response.status >= 200 && response.status < 300) {
		return response
	} else {
		let error = new Error(response.statusText)
		error.response = response
		throw error
	}
}