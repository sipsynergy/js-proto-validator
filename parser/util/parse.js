const _ = require('lodash');

function stripComments(string) {
	return _.replace(string, /\/\/.*\n/gi, '')
}

module.exports = {
	stripComments
}