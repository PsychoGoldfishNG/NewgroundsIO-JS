(()=>{
/** Start NewgroundsIO.objects.Error **/

	class Error extends NewgroundsIO.BaseObject {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {String} props.message Contains details about the error.
		 * @param {Number} props.code A code indication the error type.
		 */
		constructor(props)
		{
			super();
			let _this = this;

			this.__object = "Error";
			["message","code"].forEach(prop => {
			   if (_this.__properties.indexOf(prop) < 0) _this.__properties.push(prop);
			});
			if (props && typeof(props) === 'object') {
				for(var i=0; i<this.__properties.length; i++) {
					if (typeof(props[this.__properties[i]]) !== 'undefined') this[this.__properties[i]] = props[this.__properties[i]];
				}
			}
		}

		/**
		 * @private
		 */
		#message = null;

		/**
		 * Contains details about the error.
		 * @type {String}
		 */
		get message()
		{
			return this.#message;
		}

		set message(_message)
		{
			if (typeof(_message) !== 'string' && _message !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _message);
			this.#message = String(_message);

		}

		/**
		 * @private
		 */
		#code = null;

		/**
		 * A code indication the error type.
		 * @type {Number}
		 */
		get code()
		{
			return this.#code;
		}

		set code(_code)
		{
			if (typeof(_code) !== 'number' && _code !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a number, got', _code);
			else if (!Number.isInteger(_code) && _code !== null) console.warn('NewgroundsIO Type Mismatch: Value should be an integer, got a float');
			this.#code = Number(_code);
			if (isNaN(this.#code)) this.#code = null;

		}

	}

/** End Class NewgroundsIO.objects.Error **/
if (typeof(NewgroundsIO.objects) === 'undefined') NewgroundsIO.objects = {};
NewgroundsIO.objects.Error = Error;

})();

