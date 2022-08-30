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

			this.__object = "Event.logEvent";
			this._host = null;
			this._event_name = null;
			this.__required = ["host","event_name"];
			this.__properties = this.__properties.concat(["host","event_name"]);
			if (typeof(props) === 'object') {
				for(var i=0; i<this.__properties.length; i++) {
					if (typeof(props[this.__properties[i]]) !== 'undefined') this[this.__properties[i]] = props[this.__properties[i]];
				}
			}
		}

		/**
		 * The domain hosting your app. Example: "newgrounds.com", "localHost"
		 * @type {String}
		 */
		get host()
		{
			return this._host;
		}

		set host(_host)
		{
			if (typeof(_host) !== 'string' && _host !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _host);
			this._host = String(_host);

		}

		/**
		 * The name of your custom event as defined in your Referrals & Events settings.
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

/** End Class NewgroundsIO.components.Event.logEvent **/
if (typeof(NewgroundsIO.components.Event) === 'undefined') NewgroundsIO.components.Event = {};
NewgroundsIO.components.Event.logEvent = logEvent;

})();

