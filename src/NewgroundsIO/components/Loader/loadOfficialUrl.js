(()=>{
/** Start NewgroundsIO.components.Loader.loadOfficialUrl **/

	class loadOfficialUrl extends NewgroundsIO.BaseComponent {

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

			this.__object = "Loader.loadOfficialUrl";
			this._redirect = null;
			this._log_stat = null;
			this.__required = ["host"];
			this.__properties = this.__properties.concat(["host","redirect","log_stat"]);
			if (props && typeof(props) === 'object') {
				for(var i=0; i<this.__properties.length; i++) {
					if (typeof(props[this.__properties[i]]) !== 'undefined') this[this.__properties[i]] = props[this.__properties[i]];
				}
			}
		}

		/**
		 * Set this to false to get a JSON response containing the URL instead of doing an actual redirect.
		 * @type {Boolean}
		 */
		get redirect()
		{
			return this._redirect;
		}

		set redirect(_redirect)
		{
			if (typeof(_redirect) !== 'boolean' && typeof(_redirect) !== 'number' && _redirect !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a boolean, got', _redirect);
			this._redirect = _redirect ? true:false;

		}

		/**
		 * Set this to false to skip logging this as a referral event.
		 * @type {Boolean}
		 */
		get log_stat()
		{
			return this._log_stat;
		}

		set log_stat(_log_stat)
		{
			if (typeof(_log_stat) !== 'boolean' && typeof(_log_stat) !== 'number' && _log_stat !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a boolean, got', _log_stat);
			this._log_stat = _log_stat ? true:false;

		}

	}

/** End Class NewgroundsIO.components.Loader.loadOfficialUrl **/
if (typeof(NewgroundsIO.components.Loader) === 'undefined') NewgroundsIO.components.Loader = {};
NewgroundsIO.components.Loader.loadOfficialUrl = loadOfficialUrl;

})();

