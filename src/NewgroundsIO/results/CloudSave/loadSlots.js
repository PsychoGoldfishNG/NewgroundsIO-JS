(()=>{
/** Start NewgroundsIO.results.CloudSave.loadSlots **/

	class loadSlots extends NewgroundsIO.BaseResult {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {Array.<NewgroundsIO.objects.SaveSlot>} props.slots An array of NewgroundsIO.objects.SaveSlot objects.
		 * @param {String} props.app_id The App ID of another, approved app to load scores from.
		 */
		constructor(props)
		{
			super();
			let _this = this;

			this.__object = "CloudSave.loadSlots";
			["slots","app_id"].forEach(prop => {
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
		#slots = null;

		/**
		 * An array of NewgroundsIO.objects.SaveSlot objects.
		 * @type {Array.<NewgroundsIO.objects.SaveSlot>}
		 */
		get slots()
		{
			return this.#slots;
		}

		set slots(_slots)
		{
			if (Array.isArray(_slots)) {
				let newArr = [];
				_slots.forEach(function(val,index) {
						if (val !== null && !(val instanceof NewgroundsIO.objects.SaveSlot))
						console.warn("Type Mismatch: expecting NewgroundsIO.objects.SaveSlot, got ",val);

					newArr[index] = val;
				});
				this.#slots = newArr;
				return;
			}

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

		arrayMap = {"slots":"SaveSlot"};

	}

/** End Class NewgroundsIO.results.CloudSave.loadSlots **/
if (typeof(NewgroundsIO.results.CloudSave) === 'undefined') NewgroundsIO.results.CloudSave = {};
NewgroundsIO.results.CloudSave.loadSlots = loadSlots;

})();

