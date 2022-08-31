(()=>{
/** Start NewgroundsIO.components.Loader.loadNewgrounds **/

	class loadNewgrounds extends NewgroundsIO.BaseComponent {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {String} props.host The domain hosting your app. Example: "www.somesite.com", "localHost"
		 * @param {Boolean} props.redirect Set this to false to get a JSON response containing the URL instead of doing an actual redirect.
		 * @param {Boolean} props.log_stat Set this to false to skip logging this as a referral event.
		 */
		constructor(props)
		{
			super();
			let _this = this;

			this.__object = "Loader.loadNewgrounds";
			["host","redirect","log_stat"].forEach(prop => {
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
		#redirect = null;

		/**
		 * Set this to false to get a JSON response containing the URL instead of doing an actual redirect.
		 * @type {Boolean}
		 */
		get redirect()
		{
			return this.#redirect;
		}

		set redirect(_redirect)
		{
			if (typeof(_redirect) !== 'boolean' && typeof(_redirect) !== 'number' && _redirect !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a boolean, got', _redirect);
			this.#redirect = _redirect ? true:false;

		}

		/**
		 * @private
		 */
		#log_stat = null;

		/**
		 * Set this to false to skip logging this as a referral event.
		 * @type {Boolean}
		 */
		get log_stat()
		{
			return this.#log_stat;
		}

		set log_stat(_log_stat)
		{
			if (typeof(_log_stat) !== 'boolean' && typeof(_log_stat) !== 'number' && _log_stat !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a boolean, got', _log_stat);
			this.#log_stat = _log_stat ? true:false;

		}

	}

/** End Class NewgroundsIO.components.Loader.loadNewgrounds **/
if (typeof(NewgroundsIO.components.Loader) === 'undefined') NewgroundsIO.components.Loader = {};
NewgroundsIO.components.Loader.loadNewgrounds = loadNewgrounds;

})();

