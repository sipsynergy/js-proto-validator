
import protoProvider from '@sipsynergy/proto-valid'
import options from './config.js'

const root = protoProvider({"name":"root","sipsynergy":{"type":"pkg","name":"sipsynergy","files":{"type":"pkg","name":"files","FileMetadata":{"type":"message","name":"FileMetadata","content":[{"typename":"string","name":"ID","opts":{}},{"typename":"string","name":"organisationID","opts":{}},{"typename":"string","name":"userID","opts":{}},{"typename":"string","name":"targetID","opts":{}},{"typename":"string","name":"mime","opts":{}},{"typename":"string","name":"name","opts":{}},{"typename":"uint64","name":"size","opts":{}},{"typename":"string","name":"createdOn","opts":{}},{"typename":"string","name":"updatedOn","opts":{}},{"typename":"string","name":"deletedOn","opts":{}},{"typename":"uint32","name":"checksum","opts":{}},{"typename":"string","name":"pathSecret","opts":{}},{"typename":"string","name":"url","opts":{}},{"typename":"string","name":"urlSecret","opts":{}},{"typename":"bool","name":"public","opts":{}}]},"FileMetadataList":{"type":"message","name":"FileMetadataList","content":[{"typename":"FileMetadata","name":"list","opts":{}}]},"FileSegment":{"type":"message","name":"FileSegment","content":[{"typename":"string","name":"fileID","opts":{}},{"typename":"int32","name":"currentIndex","opts":{}},{"typename":"int32","name":"lastIndex","opts":{}},{"typename":"bytes","name":"data","opts":{}}]},"UploadRequest":{"type":"message","name":"UploadRequest","content":[{"typename":"FileMetadata","name":"metadata","opts":{}},{"typename":"FileSegment","name":"segment","opts":{}}]},"DownloadRequest":{"type":"message","name":"DownloadRequest","content":[{"typename":"string","name":"fileID","opts":{}},{"typename":"int32","name":"index","opts":{}}]},"DownloadResponse":{"type":"message","name":"DownloadResponse","content":[{"typename":"FileMetadata","name":"metadata","opts":{}},{"typename":"FileSegment","name":"segment","opts":{}}]},"ListFilesRequest":{"type":"message","name":"ListFilesRequest","content":[{"typename":"string","name":"name","opts":{}},{"typename":"string","name":"mime","opts":{}},{"typename":"string","name":"userID","opts":{}},{"typename":"string","name":"organisationID","opts":{}},{"typename":"string","name":"targetID","opts":{}},{"typename":"uint32","name":"checksum","opts":{}}]},"UploadResponse":{"type":"message","name":"UploadResponse","content":[{"typename":"bool","name":"complete","opts":{}},{"typename":"string","name":"entityID","opts":{}}]},"Files":{"type":"service","name":"Files","content":[{"name":"Ping","param":"sipsynergy.common.PingRequest","returns":"sipsynergy.common.PingResponse"},{"name":"GetMetadata","param":"sipsynergy.common.SimpleEntityRequest","returns":"FileMetadata"},{"name":"ListMetadata","param":"ListFilesRequest","returns":"FileMetadataList"},{"name":"Upload","param":"UploadRequest","returns":"UploadResponse"},{"name":"Download","param":"DownloadRequest","returns":"DownloadResponse"},{"name":"Archive","param":"sipsynergy.common.SimpleEntityRequest","returns":"sipsynergy.common.SimpleResponse"}]}},"common":{"type":"pkg","name":"common","EnumBoolType":{"type":"enum","name":"EnumBoolType","content":[{"name":"FALSE","val":0},{"name":"TRUE","val":1}]},"SimpleRequest":{"type":"message","name":"SimpleRequest","content":[{"typename":"string","name":"includes","opts":{}}]},"SimpleResponse":{"type":"message","name":"SimpleResponse","content":[{"typename":"bool","name":"successful","opts":{}}]},"BooleanResponse":{"type":"message","name":"BooleanResponse","content":[{"typename":"bool","name":"value","opts":{}}]},"SimpleEntityRequest":{"type":"message","name":"SimpleEntityRequest","content":[{"typename":"string","name":"entityID","opts":{}},{"typename":"string","name":"includes","opts":{}}]},"SimpleMultiEntityRequest":{"type":"message","name":"SimpleMultiEntityRequest","content":[{"typename":"string","name":"entityIDs","opts":{}}]},"SimpleEntityResponse":{"type":"message","name":"SimpleEntityResponse","content":[{"typename":"bool","name":"successful","opts":{}},{"typename":"string","name":"entityID","opts":{}}]},"PingRequest":{"type":"message","name":"PingRequest","content":[]},"PingResponse":{"type":"message","name":"PingResponse","content":[]},"Address":{"type":"message","name":"Address","content":[{"typename":"string","name":"address1","opts":{}},{"typename":"string","name":"address2","opts":{}},{"typename":"string","name":"address3","opts":{}},{"typename":"string","name":"address4","opts":{}},{"typename":"string","name":"town","opts":{}},{"typename":"string","name":"region","opts":{}},{"typename":"string","name":"country","opts":{}},{"typename":"string","name":"code","opts":{}}]},"Price":{"type":"message","name":"Price","content":[{"typename":"string","name":"currency","opts":{}},{"typename":"int32","name":"amountInSubunits","opts":{}}]}}}}, options);
export default root;