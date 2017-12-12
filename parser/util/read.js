const _ = require('lodash');

function getPackage(data) {
	let pkg = get(data, 'package');
	return pkg.length > 0 ? pkg[0].package : 'main';
}

function get(data, type, recursive) {
	if (!data.content) { return []; }
	let childOptions = [];
	if (recursive) {
		_.forEach(data.content, d => {
			childOptions = _.concat(childOptions, get(d, type))
		});
	}
	return _.concat(_.filter(data.content, part => part.type === type), childOptions);
}

module.exports = {
	getPackage,
	get
}