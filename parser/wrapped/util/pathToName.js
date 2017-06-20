const _ = require('lodash');

module.exports = function (name) {
	return _.replace(name, '.', '__');
}