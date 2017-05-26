__pkg__.__name__ = (function() {

	/**
	 * Properties of a __name__.
	 * @typedef __pkg__.__name__$Properties
	 * @type {Object}
//<% _.forEach(properties, function(property) { %>
	 * @property {__property.typename__} [__property.name__] __name__ __property.name__.
//<% }); %>
	 */

	/**
	 * Constructs a new __name__.
	 * @exports __pkg__.__name__
	 * @constructor
	 * @param {__pkg__.__name__$Properties=} [properties] Properties to set
	 */
	function __name__(properties) {
		if (properties)
			for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
				if (properties[keys[i]] !== null)
					this[keys[i]] = properties[keys[i]];
	}

//<% _.forEach(properties, function(property) { %>
	/**
	 * __name__ __property.name__.
	 * @type {__property.typename__}
	 */
	__name__.prototype.__property.name__ = __property.default__;

//<% }); %>

	/**
	 * Creates a new __name__ instance using the specified properties.
	 * @param {__pkg__.__name__$Properties=} [properties] Properties to set
	 * @returns {__pkg__.__name__} __name__ instance
	 */
	__name__.create = function create(properties) {
		return new __name__(properties);
	};

	/**
	 * Verifies a __name__ message.
	 * @param {Object.<string,*>} message Plain object to verify
	 * @returns {?string} `null` if valid, otherwise the reason why it is not
	 */
	__name__.verify = function verify(message) {
		if (typeof message !== "object" || message === null)
			return "object expected";
//<% _.forEach(properties, function(property) { %>
		if (message.__property.name__ !== null && message.hasOwnProperty("__property.name__"))
			if (!validateType("__property.typename__", message.__property.name__))
				return "name: __property.typename__ expected";
//<% }); %>
		return null;
	};

	/**
	 * Creates a User message from a plain object. Also converts values to their respective internal types.
	 * @param {Object.<string,*>} object Plain object
	 * @returns {__pkg__.__name__} __name__
	 */
	__name__.fromObject = function fromObject(object) {
		if (object instanceof __name__)
			return object;
		let message = new __name__();
//<% _.forEach(properties, function(property) { %>
		if (object.__property.name__ !== null)
			message.__property.name__ = castType("__property.typename__", object.__property.name__);
//<% }); %>
		return message;
	};

	/**
	 * Creates a plain object from a User message. Also converts values to other types if specified.
	 * @param {__pkg__.__name__} message __name__
	 * @param {Object} [options] Conversion options
	 * @returns {Object.<string,*>} Plain object
	 */
	__name__.toObject = function toObject(message, options) {
		if (!options)
			options = {};
		let object = {};
		if (options.defaults) {
//<% _.forEach(properties, function(property) { %>
			object.__property.name__ = __property.default__;
//<% }); %>
		}
//<% _.forEach(properties, function(property) { %>
		if (message.__property.name__ !== null && message.hasOwnProperty("__property.name__"))
			object.__property.name__ = message.__property.name__;
//<% }); %>
		return object;
	};

	/**
	 * Creates a plain object from this __name__ message. Also converts values to other types if specified.
	 * @param {Object} [options] Conversion options
	 * @returns {Object.<string,*>} Plain object
	 */
	__name__.prototype.toObject = function toObject(options) {
		return this.constructor.toObject(this, options);
	};

	/**
	 * Converts this User to JSON.
	 * @returns {Object.<string,*>} JSON object
	 */
	__name__.prototype.toJSON = function toJSON() {
		return this.constructor.toObject(this, {});
	};

	return __name__;
})();