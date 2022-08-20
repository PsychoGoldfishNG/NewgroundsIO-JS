(()=>{
/** Start Class NewgroundsIO.results.App.getCurrentVersion **/

	/**
	 * Returned when App.getCurrentVersion component is called
	 */
	class getCurrentVersion extends NewgroundsIO.BaseResult {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 */
		constructor(props)
		{
			super();

			this.__object = "App.getCurrentVersion";
			this._current_version = null;
			this._client_deprecated = null;
			this.__properties = this.__properties.concat(["current_version","client_deprecated"]);
			if (typeof(props) === 'object') {
				for(var i=0; i<this.__properties.length; i++) {
					if (typeof(props[this.__properties[i]]) !== 'undefined') this[this.__properties[i]] = props[this.__properties[i]];
				}
			}
		}

		/**
		 * The version number of the app as defined in your "Version Control" settings.
		 * @type {String}
		 */
		get current_version()
		{
			return this._current_version;
		}

		set current_version(_current_version)
		{
			if (typeof(_current_version) !== 'string' && _current_version !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _current_version);
			this._current_version = String(_current_version);

		}

		/**
		 * Notes whether the client-side app is using a lower version number.
		 * @type {Boolean}
		 */
		get client_deprecated()
		{
			return this._client_deprecated;
		}

		set client_deprecated(_client_deprecated)
		{
			if (typeof(_client_deprecated) !== 'boolean' && _client_deprecated !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a boolean, got', _client_deprecated);
			this._client_deprecated = _client_deprecated ? true:false;

		}

	}

/** End Class NewgroundsIO.results.App.getCurrentVersion **/
if (typeof(NewgroundsIO.results.App) === 'undefined') NewgroundsIO.results.App = {};
NewgroundsIO.results.App.getCurrentVersion = getCurrentVersion;

})();

