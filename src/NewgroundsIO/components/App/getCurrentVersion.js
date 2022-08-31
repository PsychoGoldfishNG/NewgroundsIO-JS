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
			let _this = this;

			this.__object = "App.getCurrentVersion";
			["version"].forEach(prop => {
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
		#version = null;

		/**
		 * The version number (in "X.Y.Z" format) of the client-side app. (default = "0.0.0")
		 * @type {String}
		 */
		get version()
		{
			return this.#version;
		}

		set version(_version)
		{
			if (typeof(_version) !== 'string' && _version !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _version);
			this.#version = String(_version);

		}

	}

/** End Class NewgroundsIO.components.App.getCurrentVersion **/
if (typeof(NewgroundsIO.components.App) === 'undefined') NewgroundsIO.components.App = {};
NewgroundsIO.components.App.getCurrentVersion = getCurrentVersion;

})();

