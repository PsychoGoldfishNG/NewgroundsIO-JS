(()=>{

	/**
	 * Returned when Gateway.getDatetime component is called
	 */
	class getDatetime extends NewgroundsIO.BaseResult {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 */
		constructor(props)
		{
			super();

			this.__object = "Gateway.getDatetime";
			this._datetime = null;
			this._timestamp = null;
			this.__properties = this.__properties.concat(["datetime","timestamp"]);
			if (typeof(props) === 'object') {
				for(var i=0; i<this.__properties.length; i++) {
					if (typeof(props[this.__properties[i]]) !== 'undefined') this[this.__properties[i]] = props[this.__properties[i]];
				}
			}
		}

		/**
		 * The server's date and time in ISO 8601 format.
		 * @type {String}
		 */
		get datetime()
		{
			return this._datetime;
		}

		set datetime(_datetime)
		{
			if (typeof(_datetime) !== 'string' && _datetime !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _datetime);
			this._datetime = String(_datetime);

		}

		/**
		 * The current UNIX timestamp on the server.
		 * @type {Number}
		 */
		get timestamp()
		{
			return this._timestamp;
		}

		set timestamp(_timestamp)
		{
			if (typeof(_timestamp) !== 'number' && _timestamp !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a number, got', _timestamp);
			else if (!Number.isInteger(_timestamp) && _timestamp !== null) console.warn('NewgroundsIO Type Mismatch: Value should be an integer, got a float');
			this._timestamp = Number(_timestamp);
			if (isNaN(this._timestamp)) this._timestamp = null;

		}

	}

	// Move class to namespace
	if (typeof(NewgroundsIO.results.Gateway) === 'undefined') NewgroundsIO.results.Gateway = {};
	NewgroundsIO.results.Gateway.getDatetime = getDatetime;

})();

