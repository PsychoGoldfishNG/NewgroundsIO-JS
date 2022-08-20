(()=>{
/** Start Class NewgroundsIO.results.App.getHostLicense **/

	/**
	 * Returned when App.getHostLicense component is called
	 */
	class getHostLicense extends NewgroundsIO.BaseResult {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 */
		constructor(props)
		{
			super();

			this.__object = "App.getHostLicense";
			this._host_approved = null;
			this.__properties = this.__properties.concat(["host_approved"]);
			if (typeof(props) === 'object') {
				for(var i=0; i<this.__properties.length; i++) {
					if (typeof(props[this.__properties[i]]) !== 'undefined') this[this.__properties[i]] = props[this.__properties[i]];
				}
			}
		}

		/**
		 * @type {Boolean}
		 */
		get host_approved()
		{
			return this._host_approved;
		}

		set host_approved(_host_approved)
		{
			if (typeof(_host_approved) !== 'boolean' && _host_approved !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a boolean, got', _host_approved);
			this._host_approved = _host_approved ? true:false;

		}

	}

/** End Class NewgroundsIO.results.App.getHostLicense **/
if (typeof(NewgroundsIO.results.App) === 'undefined') NewgroundsIO.results.App = {};
NewgroundsIO.results.App.getHostLicense = getHostLicense;

})();

