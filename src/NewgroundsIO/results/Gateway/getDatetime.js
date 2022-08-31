(()=>{
/** Start NewgroundsIO.results.Gateway.getDatetime **/

	class getDatetime extends NewgroundsIO.BaseResult {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {String} props.datetime The server's date and time in ISO 8601 format.
		 * @param {Number} props.timestamp The current UNIX timestamp on the server.
		 */
		constructor(props)
		{
			super();
			let _this = this;

			this.__object = "Gateway.getDatetime";
			["datetime","timestamp"].forEach(prop => {
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
		#datetime = null;

		/**
		 * The server's date and time in ISO 8601 format.
		 * @type {String}
		 */
		get datetime()
		{
			return this.#datetime;
		}

		set datetime(_datetime)
		{
			if (typeof(_datetime) !== 'string' && _datetime !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _datetime);
			this.#datetime = String(_datetime);

		}

		/**
		 * @private
		 */
		#timestamp = null;

		/**
		 * The current UNIX timestamp on the server.
		 * @type {Number}
		 */
		get timestamp()
		{
			return this.#timestamp;
		}

		set timestamp(_timestamp)
		{
			if (typeof(_timestamp) !== 'number' && _timestamp !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a number, got', _timestamp);
			else if (!Number.isInteger(_timestamp) && _timestamp !== null) console.warn('NewgroundsIO Type Mismatch: Value should be an integer, got a float');
			this.#timestamp = Number(_timestamp);
			if (isNaN(this.#timestamp)) this.#timestamp = null;

		}

	}

/** End Class NewgroundsIO.results.Gateway.getDatetime **/
if (typeof(NewgroundsIO.results.Gateway) === 'undefined') NewgroundsIO.results.Gateway = {};
NewgroundsIO.results.Gateway.getDatetime = getDatetime;

})();

