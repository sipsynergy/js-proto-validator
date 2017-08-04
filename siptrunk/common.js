import root from './index'


/**
 * A EnumBoolType
 * @name EnumBoolType
  * @property {int} FALSE
 * @property {int} TRUE

 */
export const EnumBoolType = root('sipsynergy.common.EnumBoolType');



/**
 * A SimpleRequest Message.
 * @class SimpleRequest
 * @property {string} __type The type of the message.
 */
export const SimpleRequest = root('sipsynergy.common.SimpleRequest');

/**
* @typedef {Object} SimpleRequestObj
 * @property {string} includes

*/

/**
* @typedef {Object} SimpleRequestMessage
 * @property {string} includes

*/

/**
 * @function create
 * @constructs SimpleRequestMessage
 * @memberof SimpleRequest
 * @param {SimpleRequestObj} params
 * @returns {SimpleRequestMessage}
 */

/**
 * @function $verify
 * @memberof SimpleRequest
 * @param {Object} obj
 * @returns {boolean}
 */

/**
 * @function toObject
 * @memberof SimpleRequestMessage
 * @returns {SimpleRequestObj}
 */



/**
 * A SimpleResponse Message.
 * @class SimpleResponse
 * @property {string} __type The type of the message.
 */
export const SimpleResponse = root('sipsynergy.common.SimpleResponse');

/**
* @typedef {Object} SimpleResponseObj
 * @property {boolean} successful

*/

/**
* @typedef {Object} SimpleResponseMessage
 * @property {boolean} successful

*/

/**
 * @function create
 * @constructs SimpleResponseMessage
 * @memberof SimpleResponse
 * @param {SimpleResponseObj} params
 * @returns {SimpleResponseMessage}
 */

/**
 * @function $verify
 * @memberof SimpleResponse
 * @param {Object} obj
 * @returns {boolean}
 */

/**
 * @function toObject
 * @memberof SimpleResponseMessage
 * @returns {SimpleResponseObj}
 */



/**
 * A BooleanResponse Message.
 * @class BooleanResponse
 * @property {string} __type The type of the message.
 */
export const BooleanResponse = root('sipsynergy.common.BooleanResponse');

/**
* @typedef {Object} BooleanResponseObj
 * @property {boolean} value

*/

/**
* @typedef {Object} BooleanResponseMessage
 * @property {boolean} value

*/

/**
 * @function create
 * @constructs BooleanResponseMessage
 * @memberof BooleanResponse
 * @param {BooleanResponseObj} params
 * @returns {BooleanResponseMessage}
 */

/**
 * @function $verify
 * @memberof BooleanResponse
 * @param {Object} obj
 * @returns {boolean}
 */

/**
 * @function toObject
 * @memberof BooleanResponseMessage
 * @returns {BooleanResponseObj}
 */



/**
 * A SimpleEntityRequest Message.
 * @class SimpleEntityRequest
 * @property {string} __type The type of the message.
 */
export const SimpleEntityRequest = root('sipsynergy.common.SimpleEntityRequest');

/**
* @typedef {Object} SimpleEntityRequestObj
 * @property {string} entityID
* @property {string} includes

*/

/**
* @typedef {Object} SimpleEntityRequestMessage
 * @property {string} entityID
* @property {string} includes

*/

/**
 * @function create
 * @constructs SimpleEntityRequestMessage
 * @memberof SimpleEntityRequest
 * @param {SimpleEntityRequestObj} params
 * @returns {SimpleEntityRequestMessage}
 */

/**
 * @function $verify
 * @memberof SimpleEntityRequest
 * @param {Object} obj
 * @returns {boolean}
 */

/**
 * @function toObject
 * @memberof SimpleEntityRequestMessage
 * @returns {SimpleEntityRequestObj}
 */



/**
 * A SimpleMultiEntityRequest Message.
 * @class SimpleMultiEntityRequest
 * @property {string} __type The type of the message.
 */
export const SimpleMultiEntityRequest = root('sipsynergy.common.SimpleMultiEntityRequest');

/**
* @typedef {Object} SimpleMultiEntityRequestObj
 * @property {string} entityIDs

*/

/**
* @typedef {Object} SimpleMultiEntityRequestMessage
 * @property {string} entityIDs

*/

/**
 * @function create
 * @constructs SimpleMultiEntityRequestMessage
 * @memberof SimpleMultiEntityRequest
 * @param {SimpleMultiEntityRequestObj} params
 * @returns {SimpleMultiEntityRequestMessage}
 */

/**
 * @function $verify
 * @memberof SimpleMultiEntityRequest
 * @param {Object} obj
 * @returns {boolean}
 */

/**
 * @function toObject
 * @memberof SimpleMultiEntityRequestMessage
 * @returns {SimpleMultiEntityRequestObj}
 */



/**
 * A SimpleEntityResponse Message.
 * @class SimpleEntityResponse
 * @property {string} __type The type of the message.
 */
export const SimpleEntityResponse = root('sipsynergy.common.SimpleEntityResponse');

/**
* @typedef {Object} SimpleEntityResponseObj
 * @property {boolean} successful
* @property {string} entityID

*/

/**
* @typedef {Object} SimpleEntityResponseMessage
 * @property {boolean} successful
* @property {string} entityID

*/

/**
 * @function create
 * @constructs SimpleEntityResponseMessage
 * @memberof SimpleEntityResponse
 * @param {SimpleEntityResponseObj} params
 * @returns {SimpleEntityResponseMessage}
 */

/**
 * @function $verify
 * @memberof SimpleEntityResponse
 * @param {Object} obj
 * @returns {boolean}
 */

/**
 * @function toObject
 * @memberof SimpleEntityResponseMessage
 * @returns {SimpleEntityResponseObj}
 */



/**
 * A PingRequest Message.
 * @class PingRequest
 * @property {string} __type The type of the message.
 */
export const PingRequest = root('sipsynergy.common.PingRequest');

/**
* @typedef {Object} PingRequestObj
 
*/

/**
* @typedef {Object} PingRequestMessage
 
*/

/**
 * @function create
 * @constructs PingRequestMessage
 * @memberof PingRequest
 * @param {PingRequestObj} params
 * @returns {PingRequestMessage}
 */

/**
 * @function $verify
 * @memberof PingRequest
 * @param {Object} obj
 * @returns {boolean}
 */

/**
 * @function toObject
 * @memberof PingRequestMessage
 * @returns {PingRequestObj}
 */



/**
 * A PingResponse Message.
 * @class PingResponse
 * @property {string} __type The type of the message.
 */
export const PingResponse = root('sipsynergy.common.PingResponse');

/**
* @typedef {Object} PingResponseObj
 
*/

/**
* @typedef {Object} PingResponseMessage
 
*/

/**
 * @function create
 * @constructs PingResponseMessage
 * @memberof PingResponse
 * @param {PingResponseObj} params
 * @returns {PingResponseMessage}
 */

/**
 * @function $verify
 * @memberof PingResponse
 * @param {Object} obj
 * @returns {boolean}
 */

/**
 * @function toObject
 * @memberof PingResponseMessage
 * @returns {PingResponseObj}
 */



/**
 * A Address Message.
 * @class Address
 * @property {string} __type The type of the message.
 */
export const Address = root('sipsynergy.common.Address');

/**
* @typedef {Object} AddressObj
 * @property {string} address1
* @property {string} address2
* @property {string} address3
* @property {string} address4
* @property {string} town
* @property {string} region
* @property {string} country
* @property {string} code

*/

/**
* @typedef {Object} AddressMessage
 * @property {string} address1
* @property {string} address2
* @property {string} address3
* @property {string} address4
* @property {string} town
* @property {string} region
* @property {string} country
* @property {string} code

*/

/**
 * @function create
 * @constructs AddressMessage
 * @memberof Address
 * @param {AddressObj} params
 * @returns {AddressMessage}
 */

/**
 * @function $verify
 * @memberof Address
 * @param {Object} obj
 * @returns {boolean}
 */

/**
 * @function toObject
 * @memberof AddressMessage
 * @returns {AddressObj}
 */



/**
 * A Price Message.
 * @class Price
 * @property {string} __type The type of the message.
 */
export const Price = root('sipsynergy.common.Price');

/**
* @typedef {Object} PriceObj
 * @property {string} currency
* @property {int} amountInSubunits

*/

/**
* @typedef {Object} PriceMessage
 * @property {string} currency
* @property {int} amountInSubunits

*/

/**
 * @function create
 * @constructs PriceMessage
 * @memberof Price
 * @param {PriceObj} params
 * @returns {PriceMessage}
 */

/**
 * @function $verify
 * @memberof Price
 * @param {Object} obj
 * @returns {boolean}
 */

/**
 * @function toObject
 * @memberof PriceMessage
 * @returns {PriceObj}
 */