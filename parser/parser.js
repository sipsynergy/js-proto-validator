#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const parse = require('proto-parse');
const _ = require('lodash')
const minimist = require('minimist');

const stripComments = require('./util/parse').stripComments;
const generate = require('./static/generate');
const dynamic = require('./dynamic/generate');
const wrapped = require('./wrapped/generate');
const get = require('./util/read').get;

const argv = minimist(process.argv.slice(2));
let fileData = [],
	promises = [],
	handledFiles = [];

_.forEach(argv._, file => {
	promises.push(getFileData(file));
});

Promise.all(promises).then(result => {
	let data = _.map(fileData, f => f.data);
	switch (argv.method) {
		case 'dynamic':
			saveOutput(JSON.stringify(dynamic.generate(data)));
			break;
		case 'wrapped':
			saveOutput(wrapped.generate(data));
			break;
		default:
			saveOutput(generate(data));
	}
});

function getFileData(file) {
	if (_.indexOf(handledFiles, file) >= 0) {
		return new Promise((resolve) => {resolve()});
	}
	return new Promise((resolve) => {
		fs.readFile(file, 'utf8', (err, data) => {
			if (err || !data) {
				resolve();
				return;
			}

			let protoDefinition = stripComments(data);

			const parsedData = parse(protoDefinition);
			const base = path.dirname(file);
			const imports = get(parsedData, 'import');

			handledFiles.push(file);
			fileData.push({
				name: file,
				data: parsedData
			});

			if (imports.length === 0) {
				resolve();
			} else {
				let q = [];
				_.forEach(imports, i => {
					q.push(getFileData(path.join(base, i.package)))
				});
				return Promise.all(q).then(() => {
					resolve();
				});
			}
		});
	});
}

function saveOutput(output) {
	if (argv.o) {
		fs.writeFile(argv.o, output, (err) => {
			if (err) throw err;
			console.log(`Saved ${argv.o}`);
		});
	} else {
		console.log(output);
	}
}

