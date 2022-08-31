(()=>{
/** Start NewgroundsIO.results.CloudSave.setData **/

	class setData extends NewgroundsIO.BaseResult {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {NewgroundsIO.objects.SaveSlot} props.slot 
		 */
		constructor(props)
		{
			super();
			let _this = this;

			this.__object = "CloudSave.setData";
			["slot"].forEach(prop => {
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

		objectMap = {"slot":"SaveSlot"};

	}

/** End Class NewgroundsIO.results.CloudSave.setData **/
if (typeof(NewgroundsIO.results.CloudSave) === 'undefined') NewgroundsIO.results.CloudSave = {};
NewgroundsIO.results.CloudSave.setData = setData;

})();

