(()=>{
/** Start Class NewgroundsIO.results.CloudSave.clearSlot **/

	/**
	 * Returned when CloudSave.clearSlot component is called
	 */
	class clearSlot extends NewgroundsIO.BaseResult {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 */
		constructor(props)
		{
			super();

			this.__object = "CloudSave.clearSlot";
			this._slot = null;
			this.__properties = this.__properties.concat(["slot"]);
			if (typeof(props) === 'object') {
				for(var i=0; i<this.__properties.length; i++) {
					if (typeof(props[this.__properties[i]]) !== 'undefined') this[this.__properties[i]] = props[this.__properties[i]];
				}
			}
		}

		/**
		 * A NewgroundsIO.objects.SaveSlot object.
		 * @type {NewgroundsIO.objects.SaveSlot}
		 */
		get slot()
		{
			return this._slot;
		}

		set slot(_slot)
		{
			if (!(_slot instanceof NewgroundsIO.objects.SaveSlot) && typeof(_slot) === 'object')
				_slot = new NewgroundsIO.objects.SaveSlot(_slot);

				if (_slot !== null && !(_slot instanceof NewgroundsIO.objects.SaveSlot))
				console.warn("Type Mismatch: expecting NewgroundsIO.objects.SaveSlot, got ",_slot);

			this._slot = _slot;
		}

	}

/** End Class NewgroundsIO.results.CloudSave.clearSlot **/
if (typeof(NewgroundsIO.results.CloudSave) === 'undefined') NewgroundsIO.results.CloudSave = {};
NewgroundsIO.results.CloudSave.clearSlot = clearSlot;

})();

