(()=>{
/** Start Class NewgroundsIO.components.App.getHostLicense **/

	/**
	 * Used to call the App.getHostLicense component.
	 */
	class getHostLicense extends NewgroundsIO.BaseComponent {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {String} props.host The host domain to check (ei, somesite.com).
		 */
		constructor(props)
		{
			super();

			this.__object = "App.getHostLicense";
			this._host = null;
			this.__properties = this.__properties.concat(["host"]);
			if (typeof(props) === 'object') {
				for(var i=0; i<this.__properties.length; i++) {
					if (typeof(props[this.__properties[i]]) !== 'undefined') this[this.__properties[i]] = props[this.__properties[i]];
				}
			}
		}

		/**
		 * The host domain to check (ei, somesite.com).
		 * @type {String}
		 */
		get host()
		{
			return this._host;
		}

		set host(_host)
		{
			if (typeof(_host) !== 'string' && _host !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _host);
			this._host = String(_host);

		}

	}

/** End Class NewgroundsIO.components.App.getHostLicense **/
if (typeof(NewgroundsIO.components.App) === 'undefined') NewgroundsIO.components.App = {};
NewgroundsIO.components.App.getHostLicense = getHostLicense;

})();

