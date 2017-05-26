# js-proto-validator

Parses a given proto file and produces a JSON file that can be used to send, receive and validate messages to a service.

## Parsing a proto file

````
node ./parser/parser.js ./proto/feedback.proto --method=dynamic --o=feedback.json
````

All passed files will be parsed and added to the output json file.

## Sending messages

````js
import protoProvider from '@sipsynergy/proto-valid'

let feedbackService = protoProvider(jsonString, {server: 'http://0.0.0.0:8080/service/endpoint', ignoreTypes: ['google.protobuf.Timestamp']})
	
let Service = feedbackService('sipsynergy.pkg.Service')
let Message = feedbackService('sipsynergy.pkg.Message')

let message = Message.create({
	referenceID: id
})

Service.RpcName(message)
````

Service Rpc calls will return a promise with the returned value. Service and message definitions are retrieved via the initialized provider.