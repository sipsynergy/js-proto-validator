const _ = require('lodash');

function getPackage(data) {
	let pkg = get(data, 'package');
	return pkg.length > 0 ? pkg[0].package : 'main';
}

function get(data, type) {
	return _.filter(data.content, part => part.type === type);
}

module.exports = {
	getPackage,
	get
}