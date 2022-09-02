(()=>{
/** Start NewgroundsIO.components.CloudSave.loadSlot **/

	class loadSlot extends NewgroundsIO.BaseComponent {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {Number} props.id The slot number.
		 * @param {String} props.app_id The App ID of another, approved app to load slot data from.
		 */
		constructor(props)
		{
			super();
			let _this = this;

			this.__object = "CloudSave.loadSlot";
			this.__requireSession = true;
			["id","app_id"].forEach(prop => {
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
		#id = null;

		/**
		 * The slot number.
		 * @type {Number}
		 */
		get id()
		{
			return this.#id;
		}

		set id(_id)
		{
			if (typeof(_id) !== 'number' && _id !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a number, got', _id);
			else if (!Number.isInteger(_id) && _id !== null) console.warn('NewgroundsIO Type Mismatch: Value should be an integer, got a float');
			this.#id = Number(_id);
			if (isNaN(this.#id)) this.#id = null;

		}

		/**
		 * @private
		 */
		#app_id = null;

		/**
		 * The App ID of another, approved app to load slot data from.
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

/** End Class NewgroundsIO.components.CloudSave.loadSlot **/
if (typeof(NewgroundsIO.components.CloudSave) === 'undefined') NewgroundsIO.components.CloudSave = {};
NewgroundsIO.components.CloudSave.loadSlot = loadSlot;

})();

