(()=>{
/** Start Class NewgroundsIO.objects.Error **/

	/**
	 */
	class Error extends NewgroundsIO.BaseObject {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 */
		constructor(props)
		{
				super();

				this.__object = 'Error';

				this._message = null;
				this._code = null;
				this.__properties = this.__properties.concat(["message","code"]);
				if (props && typeof(props) === 'object') {
					for(var i=0; i<this.__properties.length; i++) {
						if (typeof(props[this.__properties[i]]) !== 'undefined') this[this.__properties[i]] = props[this.__properties[i]];
					}
				}

		}

		/**
		 * Contains details about the error.
		 * @type {String}
		 */
		get message()
		{
			return this._message;
		}

		set message(_message)
		{
			if (typeof(_message) !== 'string' && _message !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _message);
			this._message = String(_message);

		}

		/**
		 * A code indication the error type.
		 * @type {Number}
		 */
		get code()
		{
			return this._code;
		}

		set code(_code)
		{
			if (typeof(_code) !== 'number' && _code !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a number, got', _code);
			else if (!Number.isInteger(_code) && _code !== null) console.warn('NewgroundsIO Type Mismatch: Value should be an integer, got a float');
			this._code = Number(_code);
			if (isNaN(this._code)) this._code = null;

		}

	}

/** End Class NewgroundsIO.objects.Error **/
NewgroundsIO.objects.Error = Error;

})();

