(()=>{
/** Start NewgroundsIO.results.Gateway.ping **/

	class ping extends NewgroundsIO.BaseResult {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {String} props.pong Will always return a value of 'pong'
		 */
		constructor(props)
		{
			super();
			let _this = this;

			this.__object = "Gateway.ping";
			["pong"].forEach(prop => {
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
		#pong = null;

		/**
		 * Will always return a value of 'pong'
		 * @type {String}
		 */
		get pong()
		{
			return this.#pong;
		}

		set pong(_pong)
		{
			if (typeof(_pong) !== 'string' && _pong !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _pong);
			this.#pong = String(_pong);

		}

	}

/** End Class NewgroundsIO.results.Gateway.ping **/
if (typeof(NewgroundsIO.results.Gateway) === 'undefined') NewgroundsIO.results.Gateway = {};
NewgroundsIO.results.Gateway.ping = ping;

})();

