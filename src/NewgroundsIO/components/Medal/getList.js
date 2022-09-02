(()=>{
/** Start NewgroundsIO.components.Medal.getList **/

	class getList extends NewgroundsIO.BaseComponent {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {String} props.app_id The App ID of another, approved app to load medals from.
		 */
		constructor(props)
		{
			super();
			let _this = this;

			this.__object = "Medal.getList";
			["app_id"].forEach(prop => {
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
		#app_id = null;

		/**
		 * The App ID of another, approved app to load medals from.
		 * @type {String}
		 */
		get app_id()
		{
			return this.#app_id;
		}

		set app_id(_app_id)
		{
			if (typeof(_app_id) !== 'string' && _app_id !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _app_id);
			this.#app_id = String(_app_id);

		}

	}

/** End Class NewgroundsIO.components.Medal.getList **/
if (typeof(NewgroundsIO.components.Medal) === 'undefined') NewgroundsIO.components.Medal = {};
NewgroundsIO.components.Medal.getList = getList;

})();

