(()=>{
/** Start Class NewgroundsIO.results.Gateway.ping **/

	/**
	 * Returned when Gateway.ping component is called
	 */
	class ping extends NewgroundsIO.BaseResult {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 */
		constructor(props)
		{
			super();

			this.__object = "Gateway.ping";
			this._pong = null;
			this.__properties = this.__properties.concat(["pong"]);
			if (typeof(props) === 'object') {
				for(var i=0; i<this.__properties.length; i++) {
					if (typeof(props[this.__properties[i]]) !== 'undefined') this[this.__properties[i]] = props[this.__properties[i]];
				}
			}
		}

		/**
		 * Will always return a value of 'pong'
		 * @type {String}
		 */
		get pong()
		{
			return this._pong;
		}

		set pong(_pong)
		{
			if (typeof(_pong) !== 'string' && _pong !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _pong);
			this._pong = String(_pong);

		}

		objectMap = {};

		arrayMap = {};

	}

/** End Class NewgroundsIO.results.Gateway.ping **/
if (typeof(NewgroundsIO.results.Gateway) === 'undefined') NewgroundsIO.results.Gateway = {};
NewgroundsIO.results.Gateway.ping = ping;

})();

