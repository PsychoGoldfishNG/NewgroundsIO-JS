(()=>{
/** Start Class NewgroundsIO.objects.Request **/

	/**
 * A top-level wrapper containing any information needed to authenticate the application/user and any component calls being made.
	 */
	class Request extends NewgroundsIO.BaseObject {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {String} props.app_id Your application's unique ID.
		 * @param {(NewgroundsIO.objects.Execute|Array.<NewgroundsIO.objects.Execute>)} props.execute A NewgroundsIO.objects.Execute object, or array of one-or-more NewgroundsIO.objects.Execute objects.
		 * @param {String} props.session_id An optional login session id.
		 * @param {Boolean} props.debug If set to true, calls will be executed in debug mode.
		 * @param {mixed} props.echo An optional value that will be returned, verbatim, in the NewgroundsIO.objects.Response object.
		 */
		constructor(props)
		{
				super();

				this.__object = 'Request';

				this._execute = null;
				this._debug = null;
				this.__properties = this.__properties.concat(["app_id","execute","session_id","debug"]);
				if (props && typeof(props) === 'object') {
					for(var i=0; i<this.__properties.length; i++) {
						if (typeof(props[this.__properties[i]]) !== 'undefined') this[this.__properties[i]] = props[this.__properties[i]];
					}
				}

			this.__required = ["execute"];

		}

		/**
		 * A NewgroundsIO.objects.Execute object, or array of one-or-more NewgroundsIO.objects.Execute objects.
		 * @type {(NewgroundsIO.objects.Execute|Array.<NewgroundsIO.objects.Execute>)}
		 */
		get execute()
		{
			return this._execute;
		}

		set execute(_execute)
		{
			if (Array.isArray(_execute)) {
				let newArr = [];
				_execute.forEach(function(val,index) {
						if (val !== null && !(val instanceof NewgroundsIO.objects.Execute))
						console.warn("Type Mismatch: expecting NewgroundsIO.objects.Execute, got ",val);

					newArr[index] = val;
				});
				this._execute = newArr;
				return;
			}

				if (_execute !== null && !(_execute instanceof NewgroundsIO.objects.Execute))
				console.warn("Type Mismatch: expecting NewgroundsIO.objects.Execute, got ",_execute);

			this._execute = _execute;
		}

		/**
		 * If set to true, calls will be executed in debug mode.
		 * @type {Boolean}
		 */
		get debug()
		{
			return this._debug;
		}

		set debug(_debug)
		{
			if (typeof(_debug) !== 'boolean' && typeof(_debug) !== 'number' && _debug !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a boolean, got', _debug);
			this._debug = _debug ? true:false;

		}

		/**
		 * An optional value that will be returned, verbatim, in the NewgroundsIO.objects.Response object.
		 * @type {mixed}
		 */
		get echo()
		{
			return this._echo;
		}

		set echo(_echo)
		{
			this._echo = _echo; // mixed

		}

		objectMap = {"execute":"Execute"};

		/**
		 * Gets the appID from a core object
		 * @returns {string}
		 */
		get app_id()
		{
			return this.__ngioCore ? this.__ngioCore.appID : null;
		}

		/**
		 * Gets the Session ID from a core object
		 * @returns {string}
		 */
		get session_id()
		{
			return this.__ngioCore && this.__ngioCore.session ? this.__ngioCore.session.id : null;
		}

	}

/** End Class NewgroundsIO.objects.Request **/
NewgroundsIO.objects.Request = Request;

})();

