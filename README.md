# js-proto-validator

Parses a bundle of passed proto files and produces JS files that can be used to send, receive and validate messages to a service.

## Parsing proto files

````
./parser/parser.js ./proto/proto/* --method=wrapped -o=./output/
````

All passed files will be parsed and generate js files in the output folder. The above command can be run with the 
shortcut `npm run default`

## Setup

All the proto files should be processed at the same time. Place a `config.js` in the same folder as the 
generated code.

````js
import http from '../api';

let config = {
	baseUrl: '<baseURl>'	
};

// Set global options here
const options = {
	requestFn: function (path, rpc, message, requestType, responseType) {
		// Build the request based on the passed information and return it in a way you'd like to receive it back

		return http.request({
			method: 'post',
			baseURL: config.baseUrl,
			url: '',
			data: message.toObject(), // The actual message, toObject turns it into a basic JS Object
		}).then(result => {
			
			// requestType and responseType can be used to validate messages
			
			return responseType.create(result.data);
		});
	},
};

````

## Usage

After set up you can import specific message types and services from the generated files. Services will expect
messages that were created by message types

````js
import { Service, Request } from '../proto/platform_company'


let message = Request.create({
    field: '<fieldValue>'
});

Service.SendRequest(message).then(result => {
	console.log(result);
});

````