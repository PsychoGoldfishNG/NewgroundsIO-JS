(()=>{

	/**
	 * Returned when Event.logEvent component is called
	 */
	class logEvent extends NewgroundsIO.BaseResult {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 */
		constructor(props)
		{
			super();

			this.__object = "Event.logEvent";
			this._event_name = null;
			this.__properties = this.__properties.concat(["event_name"]);
			if (typeof(props) === 'object') {
				for(var i=0; i<this.__properties.length; i++) {
					if (typeof(props[this.__properties[i]]) !== 'undefined') this[this.__properties[i]] = props[this.__properties[i]];
				}
			}
		}

		/**
		 * @type {String}
		 */
		get event_name()
		{
			return this._event_name;
		}

		set event_name(_event_name)
		{
			if (typeof(_event_name) !== 'string' && _event_name !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _event_name);
			this._event_name = String(_event_name);

		}

	}

	// Move class to namespace
	if (typeof(NewgroundsIO.results.Event) === 'undefined') NewgroundsIO.results.Event = {};
	NewgroundsIO.results.Event.logEvent = logEvent;

})();

