(()=>{
/** Start Class NewgroundsIO.results.CloudSave.loadSlots **/

	/**
	 * Returned when CloudSave.loadSlots component is called
	 */
	class loadSlots extends NewgroundsIO.BaseResult {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 */
		constructor(props)
		{
			super();

			this.__object = "CloudSave.loadSlots";
			this._slots = null;
			this.__properties = this.__properties.concat(["slots"]);
			if (typeof(props) === 'object') {
				for(var i=0; i<this.__properties.length; i++) {
					if (typeof(props[this.__properties[i]]) !== 'undefined') this[this.__properties[i]] = props[this.__properties[i]];
				}
			}
		}

		/**
		 * An array of NewgroundsIO.objects.SaveSlot objects.
		 * @type {Array.<NewgroundsIO.objects.SaveSlot>}
		 */
		get slots()
		{
			return this._slots;
		}

		set slots(_slots)
		{
		}

	}

/** End Class NewgroundsIO.results.CloudSave.loadSlots **/
if (typeof(NewgroundsIO.results.CloudSave) === 'undefined') NewgroundsIO.results.CloudSave = {};
NewgroundsIO.results.CloudSave.loadSlots = loadSlots;

})();

