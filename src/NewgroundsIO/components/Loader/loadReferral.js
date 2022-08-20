(()=>{
/** Start Class NewgroundsIO.components.Loader.loadReferral **/

	/**
	 * Used to call the Loader.loadReferral component.
	 */
	class loadReferral extends NewgroundsIO.BaseComponent {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 */
		constructor(props)
		{
			super();

			this.__object = "Loader.loadReferral";
			this._referral_name = null;
			this._redirect = null;
			this._log_stat = null;
			this.__required = ["host","referral_name"];
			this.__properties = this.__properties.concat(["host","referral_name","redirect","log_stat"]);
			if (typeof(props) === 'object') {
				for(var i=0; i<this.__properties.length; i++) {
					if (typeof(props[this.__properties[i]]) !== 'undefined') this[this.__properties[i]] = props[this.__properties[i]];
				}
			}
		}

		/**
		 * The name of the referral (as defined in your "Referrals & Events" settings).
		 * @type {String}
		 */
		get referral_name()
		{
			return this._referral_name;
		}

		set referral_name(_referral_name)
		{
			if (typeof(_referral_name) !== 'string' && _referral_name !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _referral_name);
			this._referral_name = String(_referral_name);

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
			if (typeof(_redirect) !== 'boolean' && _redirect !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a boolean, got', _redirect);
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
			if (typeof(_log_stat) !== 'boolean' && _log_stat !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a boolean, got', _log_stat);
			this._log_stat = _log_stat ? true:false;

		}

	}

/** End Class NewgroundsIO.components.Loader.loadReferral **/
if (typeof(NewgroundsIO.components.Loader) === 'undefined') NewgroundsIO.components.Loader = {};
NewgroundsIO.components.Loader.loadReferral = loadReferral;

})();

