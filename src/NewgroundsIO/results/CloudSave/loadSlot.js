(()=>{
/** Start NewgroundsIO.results.CloudSave.loadSlot **/

	class loadSlot extends NewgroundsIO.BaseResult {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {NewgroundsIO.objects.SaveSlot} props.slot A NewgroundsIO.objects.SaveSlot object.
		 */
		constructor(props)
		{
			super();

			this.__object = "CloudSave.loadSlot";
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

		objectMap = {"slot":"SaveSlot"};

	}

/** End Class NewgroundsIO.results.CloudSave.loadSlot **/
if (typeof(NewgroundsIO.results.CloudSave) === 'undefined') NewgroundsIO.results.CloudSave = {};
NewgroundsIO.results.CloudSave.loadSlot = loadSlot;

})();

