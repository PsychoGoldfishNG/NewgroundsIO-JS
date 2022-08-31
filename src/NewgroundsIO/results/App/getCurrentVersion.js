(()=>{
/** Start NewgroundsIO.results.App.getCurrentVersion **/

	class getCurrentVersion extends NewgroundsIO.BaseResult {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {String} props.current_version The version number of the app as defined in your "Version Control" settings.
		 * @param {Boolean} props.client_deprecated Notes whether the client-side app is using a lower version number.
		 */
		constructor(props)
		{
			super();
			let _this = this;

			this.__object = "App.getCurrentVersion";
			["current_version","client_deprecated"].forEach(prop => {
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
		#current_version = null;

		/**
		 * The version number of the app as defined in your "Version Control" settings.
		 * @type {String}
		 */
		get current_version()
		{
			return this.#current_version;
		}

		set current_version(_current_version)
		{
			if (typeof(_current_version) !== 'string' && _current_version !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _current_version);
			this.#current_version = String(_current_version);

		}

		/**
		 * @private
		 */
		#client_deprecated = null;

		/**
		 * Notes whether the client-side app is using a lower version number.
		 * @type {Boolean}
		 */
		get client_deprecated()
		{
			return this.#client_deprecated;
		}

		set client_deprecated(_client_deprecated)
		{
			if (typeof(_client_deprecated) !== 'boolean' && typeof(_client_deprecated) !== 'number' && _client_deprecated !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a boolean, got', _client_deprecated);
			this.#client_deprecated = _client_deprecated ? true:false;

		}

	}

/** End Class NewgroundsIO.results.App.getCurrentVersion **/
if (typeof(NewgroundsIO.results.App) === 'undefined') NewgroundsIO.results.App = {};
NewgroundsIO.results.App.getCurrentVersion = getCurrentVersion;

})();

