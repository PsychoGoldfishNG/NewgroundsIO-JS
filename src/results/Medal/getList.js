(()=>{

	/**
	 * Returned when Medal.getList component is called
	 */
	class getList extends NewgroundsIO.BaseResult {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 */
		constructor(props)
		{
			super();

			this.__object = "Medal.getList";
			this._medals = null;
			this.__properties = this.__properties.concat(["medals"]);
			if (typeof(props) === 'object') {
				for(var i=0; i<this.__properties.length; i++) {
					if (typeof(props[this.__properties[i]]) !== 'undefined') this[this.__properties[i]] = props[this.__properties[i]];
				}
			}
		}

		/**
		 * An array of medal objects.
		 * @type {Array.<NewgroundsIO.objects.Medal>}
		 */
		get medals()
		{
			return this._medals;
		}

		set medals(_medals)
		{
		}

	}

	// Move class to namespace
	if (typeof(NewgroundsIO.results.Medal) === 'undefined') NewgroundsIO.results.Medal = {};
	NewgroundsIO.results.Medal.getList = getList;

})();

