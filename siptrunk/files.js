import root from './index'


/**
 * A FileMetadata Message.
 * @class FileMetadata
 * @property {string} __type The type of the message.
 */
export const FileMetadata = root('sipsynergy.files.FileMetadata');

/**
* @typedef {Object} FileMetadataObj
 * @property {string} ID
* @property {string} organisationID
* @property {string} userID
* @property {string} targetID
* @property {string} mime
* @property {string} name
* @property {int} size
* @property {string} createdOn
* @property {string} updatedOn
* @property {string} deletedOn
* @property {int} checksum
* @property {string} pathSecret
* @property {string} url
* @property {string} urlSecret
* @property {boolean} public

*/

/**
* @typedef {Object} FileMetadataMessage
 * @property {string} ID
* @property {string} organisationID
* @property {string} userID
* @property {string} targetID
* @property {string} mime
* @property {string} name
* @property {int} size
* @property {string} createdOn
* @property {string} updatedOn
* @property {string} deletedOn
* @property {int} checksum
* @property {string} pathSecret
* @property {string} url
* @property {string} urlSecret
* @property {boolean} public

*/

/**
 * @function create
 * @constructs FileMetadataMessage
 * @memberof FileMetadata
 * @param {FileMetadataObj} params
 * @returns {FileMetadataMessage}
 */

/**
 * @function $verify
 * @memberof FileMetadata
 * @param {Object} obj
 * @returns {boolean}
 */

/**
 * @function toObject
 * @memberof FileMetadataMessage
 * @returns {FileMetadataObj}
 */



/**
 * A FileMetadataList Message.
 * @class FileMetadataList
 * @property {string} __type The type of the message.
 */
export const FileMetadataList = root('sipsynergy.files.FileMetadataList');

/**
* @typedef {Object} FileMetadataListObj
 * @property {FileMetadata} list

*/

/**
* @typedef {Object} FileMetadataListMessage
 * @property {FileMetadata} list

*/

/**
 * @function create
 * @constructs FileMetadataListMessage
 * @memberof FileMetadataList
 * @param {FileMetadataListObj} params
 * @returns {FileMetadataListMessage}
 */

/**
 * @function $verify
 * @memberof FileMetadataList
 * @param {Object} obj
 * @returns {boolean}
 */

/**
 * @function toObject
 * @memberof FileMetadataListMessage
 * @returns {FileMetadataListObj}
 */



/**
 * A FileSegment Message.
 * @class FileSegment
 * @property {string} __type The type of the message.
 */
export const FileSegment = root('sipsynergy.files.FileSegment');

/**
* @typedef {Object} FileSegmentObj
 * @property {string} fileID
* @property {int} currentIndex
* @property {int} lastIndex
* @property {string} data

*/

/**
* @typedef {Object} FileSegmentMessage
 * @property {string} fileID
* @property {int} currentIndex
* @property {int} lastIndex
* @property {string} data

*/

/**
 * @function create
 * @constructs FileSegmentMessage
 * @memberof FileSegment
 * @param {FileSegmentObj} params
 * @returns {FileSegmentMessage}
 */

/**
 * @function $verify
 * @memberof FileSegment
 * @param {Object} obj
 * @returns {boolean}
 */

/**
 * @function toObject
 * @memberof FileSegmentMessage
 * @returns {FileSegmentObj}
 */



/**
 * A UploadRequest Message.
 * @class UploadRequest
 * @property {string} __type The type of the message.
 */
export const UploadRequest = root('sipsynergy.files.UploadRequest');

/**
* @typedef {Object} UploadRequestObj
 * @property {FileMetadata} metadata
* @property {FileSegment} segment

*/

/**
* @typedef {Object} UploadRequestMessage
 * @property {FileMetadata} metadata
* @property {FileSegment} segment

*/

/**
 * @function create
 * @constructs UploadRequestMessage
 * @memberof UploadRequest
 * @param {UploadRequestObj} params
 * @returns {UploadRequestMessage}
 */

/**
 * @function $verify
 * @memberof UploadRequest
 * @param {Object} obj
 * @returns {boolean}
 */

/**
 * @function toObject
 * @memberof UploadRequestMessage
 * @returns {UploadRequestObj}
 */



/**
 * A DownloadRequest Message.
 * @class DownloadRequest
 * @property {string} __type The type of the message.
 */
export const DownloadRequest = root('sipsynergy.files.DownloadRequest');

/**
* @typedef {Object} DownloadRequestObj
 * @property {string} fileID
* @property {int} index

*/

/**
* @typedef {Object} DownloadRequestMessage
 * @property {string} fileID
* @property {int} index

*/

/**
 * @function create
 * @constructs DownloadRequestMessage
 * @memberof DownloadRequest
 * @param {DownloadRequestObj} params
 * @returns {DownloadRequestMessage}
 */

/**
 * @function $verify
 * @memberof DownloadRequest
 * @param {Object} obj
 * @returns {boolean}
 */

/**
 * @function toObject
 * @memberof DownloadRequestMessage
 * @returns {DownloadRequestObj}
 */



/**
 * A DownloadResponse Message.
 * @class DownloadResponse
 * @property {string} __type The type of the message.
 */
export const DownloadResponse = root('sipsynergy.files.DownloadResponse');

/**
* @typedef {Object} DownloadResponseObj
 * @property {FileMetadata} metadata
* @property {FileSegment} segment

*/

/**
* @typedef {Object} DownloadResponseMessage
 * @property {FileMetadata} metadata
* @property {FileSegment} segment

*/

/**
 * @function create
 * @constructs DownloadResponseMessage
 * @memberof DownloadResponse
 * @param {DownloadResponseObj} params
 * @returns {DownloadResponseMessage}
 */

/**
 * @function $verify
 * @memberof DownloadResponse
 * @param {Object} obj
 * @returns {boolean}
 */

/**
 * @function toObject
 * @memberof DownloadResponseMessage
 * @returns {DownloadResponseObj}
 */



/**
 * A ListFilesRequest Message.
 * @class ListFilesRequest
 * @property {string} __type The type of the message.
 */
export const ListFilesRequest = root('sipsynergy.files.ListFilesRequest');

/**
* @typedef {Object} ListFilesRequestObj
 * @property {string} name
* @property {string} mime
* @property {string} userID
* @property {string} organisationID
* @property {string} targetID
* @property {int} checksum

*/

/**
* @typedef {Object} ListFilesRequestMessage
 * @property {string} name
* @property {string} mime
* @property {string} userID
* @property {string} organisationID
* @property {string} targetID
* @property {int} checksum

*/

/**
 * @function create
 * @constructs ListFilesRequestMessage
 * @memberof ListFilesRequest
 * @param {ListFilesRequestObj} params
 * @returns {ListFilesRequestMessage}
 */

/**
 * @function $verify
 * @memberof ListFilesRequest
 * @param {Object} obj
 * @returns {boolean}
 */

/**
 * @function toObject
 * @memberof ListFilesRequestMessage
 * @returns {ListFilesRequestObj}
 */



/**
 * A UploadResponse Message.
 * @class UploadResponse
 * @property {string} __type The type of the message.
 */
export const UploadResponse = root('sipsynergy.files.UploadResponse');

/**
* @typedef {Object} UploadResponseObj
 * @property {boolean} complete
* @property {string} entityID

*/

/**
* @typedef {Object} UploadResponseMessage
 * @property {boolean} complete
* @property {string} entityID

*/

/**
 * @function create
 * @constructs UploadResponseMessage
 * @memberof UploadResponse
 * @param {UploadResponseObj} params
 * @returns {UploadResponseMessage}
 */

/**
 * @function $verify
 * @memberof UploadResponse
 * @param {Object} obj
 * @returns {boolean}
 */

/**
 * @function toObject
 * @memberof UploadResponseMessage
 * @returns {UploadResponseObj}
 */



/**
 * A Files Service.
 * @class Files
 * @property {string} __type The full path of the service definition
 * @property {string} __name The name of the service
 * @property {string} __namespace The path of the service definition without its name
 */



/**
 * @function Ping
 * @memberof Files#
 * @param {PingRequestMessage} message
 * @returns {PingResponseMessage}
 */

/**
 * @function GetMetadata
 * @memberof Files#
 * @param {SimpleEntityRequestMessage} message
 * @returns {FileMetadataMessage}
 */

/**
 * @function ListMetadata
 * @memberof Files#
 * @param {ListFilesRequestMessage} message
 * @returns {FileMetadataListMessage}
 */

/**
 * @function Upload
 * @memberof Files#
 * @param {UploadRequestMessage} message
 * @returns {UploadResponseMessage}
 */

/**
 * @function Download
 * @memberof Files#
 * @param {DownloadRequestMessage} message
 * @returns {DownloadResponseMessage}
 */

/**
 * @function Archive
 * @memberof Files#
 * @param {SimpleEntityRequestMessage} message
 * @returns {SimpleResponseMessage}
 */



/** @var Files */
export const Files = root('sipsynergy.files.Files');