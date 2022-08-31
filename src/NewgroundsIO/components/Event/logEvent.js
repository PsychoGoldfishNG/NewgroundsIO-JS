(()=>{
/** Start NewgroundsIO.components.Event.logEvent **/

	class logEvent extends NewgroundsIO.BaseComponent {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {String} props.host The domain hosting your app. Example: "newgrounds.com", "localHost"
		 * @param {String} props.event_name The name of your custom event as defined in your Referrals & Events settings.
		 */
		constructor(props)
		{
			super();
			let _this = this;

			this.__object = "Event.logEvent";
			["host","event_name"].forEach(prop => {
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
		#event_name = null;

		/**
		 * The name of your custom event as defined in your Referrals & Events settings.
		 * @type {String}
		 */
		get event_name()
		{
			return this.#event_name;
		}

		set event_name(_event_name)
		{
			if (typeof(_event_name) !== 'string' && _event_name !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _event_name);
			this.#event_name = String(_event_name);

		}

	}

/** End Class NewgroundsIO.components.Event.logEvent **/
if (typeof(NewgroundsIO.components.Event) === 'undefined') NewgroundsIO.components.Event = {};
NewgroundsIO.components.Event.logEvent = logEvent;

})();

