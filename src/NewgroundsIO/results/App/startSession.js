(()=>{
/** Start NewgroundsIO.results.App.startSession **/

	class startSession extends NewgroundsIO.BaseResult {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {NewgroundsIO.objects.Session} props.session 
		 */
		constructor(props)
		{
			super();
			let _this = this;

			this.__object = "App.startSession";
			["session"].forEach(prop => {
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
		#session = null;

		/**
		 * @type {NewgroundsIO.objects.Session}
		 */
		get session()
		{
			return this.#session;
		}

		set session(_session)
		{
			if (!(_session instanceof NewgroundsIO.objects.Session) && typeof(_session) === 'object')
				_session = new NewgroundsIO.objects.Session(_session);

				if (_session !== null && !(_session instanceof NewgroundsIO.objects.Session))
				console.warn("Type Mismatch: expecting NewgroundsIO.objects.Session, got ",_session);

			this.#session = _session;
		}

		objectMap = {"session":"Session"};

	}

/** End Class NewgroundsIO.results.App.startSession **/
if (typeof(NewgroundsIO.results.App) === 'undefined') NewgroundsIO.results.App = {};
NewgroundsIO.results.App.startSession = startSession;

})();

