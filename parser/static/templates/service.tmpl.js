__pkg__.__name__ = (function() {

	/**
	 * Constructs a new __name__ service.
	 * @exports __pkg__.__name__
	 * @constructor
	 * @param {function} requestHandler Request handle
	 */
	function __name__(requestHandler) {
		this.requestHandler = requestHandler;
	}

	__name__.prototype.requestHandler = null;


	/**
	 * Creates new __name__ service.
	 * @param {function} requestHandler Request handle
	 * @returns {__name__} RPC service. Useful where requests and/or responses are streamed.
	 */
	__name__.create = function create(requestHandler) {
		return new this(requestHandler);
	};


//<% _.forEach(services, function(service) { %>
	/**
	* Calls __service.name__.
	* @param {__pkg__.__service.param__|Object.<string,*>} request __service.param__ message or plain object
	* @returns {Promise}
	*/
	__name__.prototype.__service.name__ = function __service.name__(request) {
		return this.requestHandler("__service.name__", __pkg__.__service.param__, __pkg__.__service.returns__, request);
	};
//<% }); %>


	return __name__;
})();