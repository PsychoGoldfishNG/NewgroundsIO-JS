(()=>{
/** Start NewgroundsIO.results.CloudSave.loadSlot **/

	class loadSlot extends NewgroundsIO.BaseResult {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {NewgroundsIO.objects.SaveSlot} props.slot A NewgroundsIO.objects.SaveSlot object.
		 * @param {String} props.app_id The App ID of another, approved app to load scores from.
		 */
		constructor(props)
		{
			super();
			let _this = this;

			this.__object = "CloudSave.loadSlot";
			["slot","app_id"].forEach(prop => {
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
		#slot = null;

		/**
		 * A NewgroundsIO.objects.SaveSlot object.
		 * @type {NewgroundsIO.objects.SaveSlot}
		 */
		get slot()
		{
			return this.#slot;
		}

		set slot(_slot)
		{
			if (!(_slot instanceof NewgroundsIO.objects.SaveSlot) && typeof(_slot) === 'object')
				_slot = new NewgroundsIO.objects.SaveSlot(_slot);

				if (_slot !== null && !(_slot instanceof NewgroundsIO.objects.SaveSlot))
				console.warn("Type Mismatch: expecting NewgroundsIO.objects.SaveSlot, got ",_slot);

			this.#slot = _slot;
		}

		/**
		 * @private
		 */
		#app_id = null;

		/**
		 * The App ID of another, approved app to load scores from.
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

		objectMap = {"slot":"SaveSlot"};

	}

/** End Class NewgroundsIO.results.CloudSave.loadSlot **/
if (typeof(NewgroundsIO.results.CloudSave) === 'undefined') NewgroundsIO.results.CloudSave = {};
NewgroundsIO.results.CloudSave.loadSlot = loadSlot;

})();

