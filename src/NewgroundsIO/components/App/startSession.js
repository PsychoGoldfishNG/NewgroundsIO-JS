(()=>{
/** Start NewgroundsIO.components.App.startSession **/

	class startSession extends NewgroundsIO.BaseComponent {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {Boolean} props.force If true, will create a new session even if the user already has an existing one.
undefined *        Note: Any previous session ids will no longer be valid if this is used.
		 */
		constructor(props)
		{
			super();

			this.__object = "App.startSession";
			this._force = null;
			this.__properties = this.__properties.concat(["force"]);
			if (typeof(props) === 'object') {
				for(var i=0; i<this.__properties.length; i++) {
					if (typeof(props[this.__properties[i]]) !== 'undefined') this[this.__properties[i]] = props[this.__properties[i]];
				}
			}
		}

		/**
		 * If true, will create a new session even if the user already has an existing one.
		 *        Note: Any previous session ids will no longer be valid if this is used.
		 * @type {Boolean}
		 */
		get force()
		{
			return this._force;
		}

		set force(_force)
		{
			if (typeof(_force) !== 'boolean' && typeof(_force) !== 'number' && _force !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a boolean, got', _force);
			this._force = _force ? true:false;

		}

	}

/** End Class NewgroundsIO.components.App.startSession **/
if (typeof(NewgroundsIO.components.App) === 'undefined') NewgroundsIO.components.App = {};
NewgroundsIO.components.App.startSession = startSession;

})();

