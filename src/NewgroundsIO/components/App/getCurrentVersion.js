(()=>{
/** Start NewgroundsIO.components.App.getCurrentVersion **/

	class getCurrentVersion extends NewgroundsIO.BaseComponent {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {String} props.version The version number (in "X.Y.Z" format) of the client-side app. (default = "0.0.0")
		 */
		constructor(props)
		{
			super();

			this.__object = "App.getCurrentVersion";
			this._version = null;
			this.__properties = this.__properties.concat(["version"]);
			if (props && typeof(props) === 'object') {
				for(var i=0; i<this.__properties.length; i++) {
					if (typeof(props[this.__properties[i]]) !== 'undefined') this[this.__properties[i]] = props[this.__properties[i]];
				}
			}
		}

		/**
		 * The version number (in "X.Y.Z" format) of the client-side app. (default = "0.0.0")
		 * @type {String}
		 */
		get version()
		{
			return this._version;
		}

		set version(_version)
		{
			if (typeof(_version) !== 'string' && _version !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _version);
			this._version = String(_version);

		}

	}

/** End Class NewgroundsIO.components.App.getCurrentVersion **/
if (typeof(NewgroundsIO.components.App) === 'undefined') NewgroundsIO.components.App = {};
NewgroundsIO.components.App.getCurrentVersion = getCurrentVersion;

})();

