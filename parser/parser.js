#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const parse = require('./proto').parse;
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
			let files = wrapped.generate(data);
			_.forEach(files, file => {
				if (file.content !== null) {
					let dirPath = '.',
						filename = 'index.js';

					if (file.path) {
						let pathSegments = file.path.split('.');
						pathSegments.shift();
						filename = pathSegments.pop() + '.js';
						dirPath = './' + pathSegments.join('/');
					}
					saveTo(file.content, path.resolve(argv.o, dirPath, filename));
				}
			});
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

			let protoDefinition = data;//stripComments(data);

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
		saveTo(output, argv.o);
	} else {
		console.log(output);
	}
}

function saveTo(output, filePath) {
	let absolutePath = path.resolve(__dirname, filePath),
		pathInfo = path.parse(absolutePath);

	fs.mkdir(pathInfo.dir, () => {
		fs.writeFile(absolutePath, output, (err) => {
			if (err) console.error(err);
			console.log(`Saved ${filePath}`);
		})
	});
}

