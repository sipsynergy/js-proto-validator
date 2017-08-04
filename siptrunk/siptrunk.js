import root from './index'


/**
 * A EnumTrunkType
 * @name EnumTrunkType
  * @property {int} ALL
 * @property {int} P
 * @property {int} S

 */
export const EnumTrunkType = root('sipsynergy.siptrunk.EnumTrunkType');



/**
 * A Trunk Message.
 * @class Trunk
 * @property {string} __type The type of the message.
 */
export const Trunk = root('sipsynergy.siptrunk.Trunk');

/**
* @typedef {Object} TrunkObj
 * @property {string} ID
* @property {boolean} activated
* @property {string} name
* @property {EnumTrunkType} type
* @property {string} username
* @property {string} password
* @property {int} channelsNo
* @property {string} defaultNumberID
* @property {string} dateCreated
* @property {string} dateUpdated
* @property {float} creditDayCurrent
* @property {float} creditMonthCurrent
* @property {float} creditDayAlert
* @property {float} creditMonthAlert
* @property {float} creditDayLimit
* @property {float} creditMonthLimit
* @property {string} referenceID
* @property {string} organisationID
* @property {string} alertNotifyEmail
* @property {string} registrar

*/

/**
* @typedef {Object} TrunkMessage
 * @property {string} ID
* @property {boolean} activated
* @property {string} name
* @property {EnumTrunkType} type
* @property {string} username
* @property {string} password
* @property {int} channelsNo
* @property {string} defaultNumberID
* @property {string} dateCreated
* @property {string} dateUpdated
* @property {float} creditDayCurrent
* @property {float} creditMonthCurrent
* @property {float} creditDayAlert
* @property {float} creditMonthAlert
* @property {float} creditDayLimit
* @property {float} creditMonthLimit
* @property {string} referenceID
* @property {string} organisationID
* @property {string} alertNotifyEmail
* @property {string} registrar

*/

/**
 * @function create
 * @constructs TrunkMessage
 * @memberof Trunk
 * @param {TrunkObj} params
 * @returns {TrunkMessage}
 */

/**
 * @function $verify
 * @memberof Trunk
 * @param {Object} obj
 * @returns {boolean}
 */

/**
 * @function toObject
 * @memberof TrunkMessage
 * @returns {TrunkObj}
 */



/**
 * A Number Message.
 * @class Number
 * @property {string} __type The type of the message.
 */
export const Number = root('sipsynergy.siptrunk.Number');

/**
* @typedef {Object} NumberObj
 * @property {int} ID
* @property {string} number
* @property {string} trunkID
* @property {boolean} activated
* @property {string} dateCreated
* @property {string} dateUpdated

*/

/**
* @typedef {Object} NumberMessage
 * @property {int} ID
* @property {string} number
* @property {string} trunkID
* @property {boolean} activated
* @property {string} dateCreated
* @property {string} dateUpdated

*/

/**
 * @function create
 * @constructs NumberMessage
 * @memberof Number
 * @param {NumberObj} params
 * @returns {NumberMessage}
 */

/**
 * @function $verify
 * @memberof Number
 * @param {Object} obj
 * @returns {boolean}
 */

/**
 * @function toObject
 * @memberof NumberMessage
 * @returns {NumberObj}
 */



/**
 * A Call Message.
 * @class Call
 * @property {string} __type The type of the message.
 */
export const Call = root('sipsynergy.siptrunk.Call');

/**
* @typedef {Object} CallObj
 * @property {string} ID
* @property {string} trunkID
* @property {string} username
* @property {string} direction
* @property {string} callerID
* @property {string} NumberFrom
* @property {string} NumberTo
* @property {string} dateStart
* @property {string} dateEnd
* @property {string} answerStart
* @property {string} callSeconds
* @property {string} billSeconds

*/

/**
* @typedef {Object} CallMessage
 * @property {string} ID
* @property {string} trunkID
* @property {string} username
* @property {string} direction
* @property {string} callerID
* @property {string} NumberFrom
* @property {string} NumberTo
* @property {string} dateStart
* @property {string} dateEnd
* @property {string} answerStart
* @property {string} callSeconds
* @property {string} billSeconds

*/

/**
 * @function create
 * @constructs CallMessage
 * @memberof Call
 * @param {CallObj} params
 * @returns {CallMessage}
 */

/**
 * @function $verify
 * @memberof Call
 * @param {Object} obj
 * @returns {boolean}
 */

/**
 * @function toObject
 * @memberof CallMessage
 * @returns {CallObj}
 */



/**
 * A CreateTrunkRequest Message.
 * @class CreateTrunkRequest
 * @property {string} __type The type of the message.
 */
export const CreateTrunkRequest = root('sipsynergy.siptrunk.CreateTrunkRequest');

/**
* @typedef {Object} CreateTrunkRequestObj
 * @property {string} ID
* @property {boolean} activated
* @property {EnumTrunkType} type
* @property {int} channelsNo
* @property {string} organisationID

*/

/**
* @typedef {Object} CreateTrunkRequestMessage
 * @property {string} ID
* @property {boolean} activated
* @property {EnumTrunkType} type
* @property {int} channelsNo
* @property {string} organisationID

*/

/**
 * @function create
 * @constructs CreateTrunkRequestMessage
 * @memberof CreateTrunkRequest
 * @param {CreateTrunkRequestObj} params
 * @returns {CreateTrunkRequestMessage}
 */

/**
 * @function $verify
 * @memberof CreateTrunkRequest
 * @param {Object} obj
 * @returns {boolean}
 */

/**
 * @function toObject
 * @memberof CreateTrunkRequestMessage
 * @returns {CreateTrunkRequestObj}
 */



/**
 * A ChangeChannelNoRequest Message.
 * @class ChangeChannelNoRequest
 * @property {string} __type The type of the message.
 */
export const ChangeChannelNoRequest = root('sipsynergy.siptrunk.ChangeChannelNoRequest');

/**
* @typedef {Object} ChangeChannelNoRequestObj
 * @property {string} ID
* @property {int} channelsNo

*/

/**
* @typedef {Object} ChangeChannelNoRequestMessage
 * @property {string} ID
* @property {int} channelsNo

*/

/**
 * @function create
 * @constructs ChangeChannelNoRequestMessage
 * @memberof ChangeChannelNoRequest
 * @param {ChangeChannelNoRequestObj} params
 * @returns {ChangeChannelNoRequestMessage}
 */

/**
 * @function $verify
 * @memberof ChangeChannelNoRequest
 * @param {Object} obj
 * @returns {boolean}
 */

/**
 * @function toObject
 * @memberof ChangeChannelNoRequestMessage
 * @returns {ChangeChannelNoRequestObj}
 */



/**
 * A CreateTrunkNumberRequest Message.
 * @class CreateTrunkNumberRequest
 * @property {string} __type The type of the message.
 */
export const CreateTrunkNumberRequest = root('sipsynergy.siptrunk.CreateTrunkNumberRequest');

/**
* @typedef {Object} CreateTrunkNumberRequestObj
 * @property {string} number
* @property {string} trunkID
* @property {boolean} activated

*/

/**
* @typedef {Object} CreateTrunkNumberRequestMessage
 * @property {string} number
* @property {string} trunkID
* @property {boolean} activated

*/

/**
 * @function create
 * @constructs CreateTrunkNumberRequestMessage
 * @memberof CreateTrunkNumberRequest
 * @param {CreateTrunkNumberRequestObj} params
 * @returns {CreateTrunkNumberRequestMessage}
 */

/**
 * @function $verify
 * @memberof CreateTrunkNumberRequest
 * @param {Object} obj
 * @returns {boolean}
 */

/**
 * @function toObject
 * @memberof CreateTrunkNumberRequestMessage
 * @returns {CreateTrunkNumberRequestObj}
 */



/**
 * A ListNumbersRequest Message.
 * @class ListNumbersRequest
 * @property {string} __type The type of the message.
 */
export const ListNumbersRequest = root('sipsynergy.siptrunk.ListNumbersRequest');

/**
* @typedef {Object} ListNumbersRequestObj
 * @property {string} trunkID

*/

/**
* @typedef {Object} ListNumbersRequestMessage
 * @property {string} trunkID

*/

/**
 * @function create
 * @constructs ListNumbersRequestMessage
 * @memberof ListNumbersRequest
 * @param {ListNumbersRequestObj} params
 * @returns {ListNumbersRequestMessage}
 */

/**
 * @function $verify
 * @memberof ListNumbersRequest
 * @param {Object} obj
 * @returns {boolean}
 */

/**
 * @function toObject
 * @memberof ListNumbersRequestMessage
 * @returns {ListNumbersRequestObj}
 */



/**
 * A ListNumbersResponse Message.
 * @class ListNumbersResponse
 * @property {string} __type The type of the message.
 */
export const ListNumbersResponse = root('sipsynergy.siptrunk.ListNumbersResponse');

/**
* @typedef {Object} ListNumbersResponseObj
 * @property {Number} numbers

*/

/**
* @typedef {Object} ListNumbersResponseMessage
 * @property {Number} numbers

*/

/**
 * @function create
 * @constructs ListNumbersResponseMessage
 * @memberof ListNumbersResponse
 * @param {ListNumbersResponseObj} params
 * @returns {ListNumbersResponseMessage}
 */

/**
 * @function $verify
 * @memberof ListNumbersResponse
 * @param {Object} obj
 * @returns {boolean}
 */

/**
 * @function toObject
 * @memberof ListNumbersResponseMessage
 * @returns {ListNumbersResponseObj}
 */



/**
 * A UpdateAlertNotifyEmailRequest Message.
 * @class UpdateAlertNotifyEmailRequest
 * @property {string} __type The type of the message.
 */
export const UpdateAlertNotifyEmailRequest = root('sipsynergy.siptrunk.UpdateAlertNotifyEmailRequest');

/**
* @typedef {Object} UpdateAlertNotifyEmailRequestObj
 * @property {string} ID
* @property {string} alertNotifyEmail

*/

/**
* @typedef {Object} UpdateAlertNotifyEmailRequestMessage
 * @property {string} ID
* @property {string} alertNotifyEmail

*/

/**
 * @function create
 * @constructs UpdateAlertNotifyEmailRequestMessage
 * @memberof UpdateAlertNotifyEmailRequest
 * @param {UpdateAlertNotifyEmailRequestObj} params
 * @returns {UpdateAlertNotifyEmailRequestMessage}
 */

/**
 * @function $verify
 * @memberof UpdateAlertNotifyEmailRequest
 * @param {Object} obj
 * @returns {boolean}
 */

/**
 * @function toObject
 * @memberof UpdateAlertNotifyEmailRequestMessage
 * @returns {UpdateAlertNotifyEmailRequestObj}
 */



/**
 * A ListTrunksResponse Message.
 * @class ListTrunksResponse
 * @property {string} __type The type of the message.
 */
export const ListTrunksResponse = root('sipsynergy.siptrunk.ListTrunksResponse');

/**
* @typedef {Object} ListTrunksResponseObj
 * @property {Trunk} trunks

*/

/**
* @typedef {Object} ListTrunksResponseMessage
 * @property {Trunk} trunks

*/

/**
 * @function create
 * @constructs ListTrunksResponseMessage
 * @memberof ListTrunksResponse
 * @param {ListTrunksResponseObj} params
 * @returns {ListTrunksResponseMessage}
 */

/**
 * @function $verify
 * @memberof ListTrunksResponse
 * @param {Object} obj
 * @returns {boolean}
 */

/**
 * @function toObject
 * @memberof ListTrunksResponseMessage
 * @returns {ListTrunksResponseObj}
 */



/**
 * A ListCallsRequest Message.
 * @class ListCallsRequest
 * @property {string} __type The type of the message.
 */
export const ListCallsRequest = root('sipsynergy.siptrunk.ListCallsRequest');

/**
* @typedef {Object} ListCallsRequestObj
 * @property {string} trunkID
* @property {string} period

*/

/**
* @typedef {Object} ListCallsRequestMessage
 * @property {string} trunkID
* @property {string} period

*/

/**
 * @function create
 * @constructs ListCallsRequestMessage
 * @memberof ListCallsRequest
 * @param {ListCallsRequestObj} params
 * @returns {ListCallsRequestMessage}
 */

/**
 * @function $verify
 * @memberof ListCallsRequest
 * @param {Object} obj
 * @returns {boolean}
 */

/**
 * @function toObject
 * @memberof ListCallsRequestMessage
 * @returns {ListCallsRequestObj}
 */



/**
 * A ListCallsResponse Message.
 * @class ListCallsResponse
 * @property {string} __type The type of the message.
 */
export const ListCallsResponse = root('sipsynergy.siptrunk.ListCallsResponse');

/**
* @typedef {Object} ListCallsResponseObj
 * @property {Call} calls

*/

/**
* @typedef {Object} ListCallsResponseMessage
 * @property {Call} calls

*/

/**
 * @function create
 * @constructs ListCallsResponseMessage
 * @memberof ListCallsResponse
 * @param {ListCallsResponseObj} params
 * @returns {ListCallsResponseMessage}
 */

/**
 * @function $verify
 * @memberof ListCallsResponse
 * @param {Object} obj
 * @returns {boolean}
 */

/**
 * @function toObject
 * @memberof ListCallsResponseMessage
 * @returns {ListCallsResponseObj}
 */



/**
 * A TrunkLimitsRequest Message.
 * @class TrunkLimitsRequest
 * @property {string} __type The type of the message.
 */
export const TrunkLimitsRequest = root('sipsynergy.siptrunk.TrunkLimitsRequest');

/**
* @typedef {Object} TrunkLimitsRequestObj
 * @property {string} trunkID
* @property {float} creditDayAlert
* @property {float} creditMonthAlert
* @property {float} creditDayLimit
* @property {float} creditMonthLimit

*/

/**
* @typedef {Object} TrunkLimitsRequestMessage
 * @property {string} trunkID
* @property {float} creditDayAlert
* @property {float} creditMonthAlert
* @property {float} creditDayLimit
* @property {float} creditMonthLimit

*/

/**
 * @function create
 * @constructs TrunkLimitsRequestMessage
 * @memberof TrunkLimitsRequest
 * @param {TrunkLimitsRequestObj} params
 * @returns {TrunkLimitsRequestMessage}
 */

/**
 * @function $verify
 * @memberof TrunkLimitsRequest
 * @param {Object} obj
 * @returns {boolean}
 */

/**
 * @function toObject
 * @memberof TrunkLimitsRequestMessage
 * @returns {TrunkLimitsRequestObj}
 */



/**
 * A UpdatePasswordRequest Message.
 * @class UpdatePasswordRequest
 * @property {string} __type The type of the message.
 */
export const UpdatePasswordRequest = root('sipsynergy.siptrunk.UpdatePasswordRequest');

/**
* @typedef {Object} UpdatePasswordRequestObj
 * @property {string} trunkID
* @property {string} password

*/

/**
* @typedef {Object} UpdatePasswordRequestMessage
 * @property {string} trunkID
* @property {string} password

*/

/**
 * @function create
 * @constructs UpdatePasswordRequestMessage
 * @memberof UpdatePasswordRequest
 * @param {UpdatePasswordRequestObj} params
 * @returns {UpdatePasswordRequestMessage}
 */

/**
 * @function $verify
 * @memberof UpdatePasswordRequest
 * @param {Object} obj
 * @returns {boolean}
 */

/**
 * @function toObject
 * @memberof UpdatePasswordRequestMessage
 * @returns {UpdatePasswordRequestObj}
 */



/**
 * A Siptrunk Service.
 * @class Siptrunk
 * @property {string} __type The full path of the service definition
 * @property {string} __name The name of the service
 * @property {string} __namespace The path of the service definition without its name
 */



/**
 * @function Ping
 * @memberof Siptrunk#
 * @param {PingRequestMessage} message
 * @returns {PingResponseMessage}
 */

/**
 * @function GetTrunk
 * @memberof Siptrunk#
 * @param {SimpleEntityRequestMessage} message
 * @returns {TrunkMessage}
 */

/**
 * @function CreateTrunk
 * @memberof Siptrunk#
 * @param {CreateTrunkRequestMessage} message
 * @returns {TrunkMessage}
 */

/**
 * @function UpdateTrunkPassword
 * @memberof Siptrunk#
 * @param {UpdatePasswordRequestMessage} message
 * @returns {TrunkMessage}
 */

/**
 * @function UpdateTrunkLimits
 * @memberof Siptrunk#
 * @param {TrunkLimitsRequestMessage} message
 * @returns {TrunkMessage}
 */

/**
 * @function UpdateAlertNotifyEmail
 * @memberof Siptrunk#
 * @param {UpdateAlertNotifyEmailRequestMessage} message
 * @returns {TrunkMessage}
 */

/**
 * @function ActivateTrunk
 * @memberof Siptrunk#
 * @param {SimpleEntityRequestMessage} message
 * @returns {SimpleResponseMessage}
 */

/**
 * @function DeactivateTrunk
 * @memberof Siptrunk#
 * @param {SimpleEntityRequestMessage} message
 * @returns {SimpleResponseMessage}
 */

/**
 * @function UpdateChannelNumber
 * @memberof Siptrunk#
 * @param {ChangeChannelNoRequestMessage} message
 * @returns {SimpleResponseMessage}
 */

/**
 * @function DeleteTrunk
 * @memberof Siptrunk#
 * @param {SimpleEntityRequestMessage} message
 * @returns {SimpleResponseMessage}
 */

/**
 * @function ListTrunkNumbers
 * @memberof Siptrunk#
 * @param {ListNumbersRequestMessage} message
 * @returns {ListNumbersResponseMessage}
 */

/**
 * @function ListTrunkCalls
 * @memberof Siptrunk#
 * @param {ListCallsRequestMessage} message
 * @returns {ListCallsResponseMessage}
 */

/**
 * @function CreateNumber
 * @memberof Siptrunk#
 * @param {NumberMessage} message
 * @returns {NumberMessage}
 */

/**
 * @function UpdateNumber
 * @memberof Siptrunk#
 * @param {NumberMessage} message
 * @returns {NumberMessage}
 */

/**
 * @function DeleteNumber
 * @memberof Siptrunk#
 * @param {SimpleEntityRequestMessage} message
 * @returns {SimpleResponseMessage}
 */

/**
 * @function ResetDailyCurrentLimit
 * @memberof Siptrunk#
 * @param {SimpleRequestMessage} message
 * @returns {SimpleResponseMessage}
 */

/**
 * @function ResetMonthlyCurrentLimit
 * @memberof Siptrunk#
 * @param {SimpleRequestMessage} message
 * @returns {SimpleResponseMessage}
 */

/**
 * @function AlertDailyCheckNotify
 * @memberof Siptrunk#
 * @param {SimpleRequestMessage} message
 * @returns {SimpleResponseMessage}
 */

/**
 * @function AlertMonthlyCheckNotify
 * @memberof Siptrunk#
 * @param {SimpleRequestMessage} message
 * @returns {SimpleResponseMessage}
 */



/** @var Siptrunk */
export const Siptrunk = root('sipsynergy.siptrunk.Siptrunk');