(()=>{
/** Start NewgroundsIO.objects.Request **/

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
			let _this = this;

			this.__object = "Request";
			["app_id","execute","session_id","debug"].forEach(prop => {
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
		#execute = null;

		/**
		 * A NewgroundsIO.objects.Execute object, or array of one-or-more NewgroundsIO.objects.Execute objects.
		 * @type {(NewgroundsIO.objects.Execute|Array.<NewgroundsIO.objects.Execute>)}
		 */
		get execute()
		{
			return this.#execute;
		}

		set execute(_execute)
		{
			if (!Array.isArray(_execute) && !(_execute instanceof NewgroundsIO.objects.Execute) && typeof(_execute) === 'object')
				_execute = new NewgroundsIO.objects.Execute(_execute);

			if (Array.isArray(_execute)) {
				let newArr = [];
				_execute.forEach(function(val,index) {
						if (val !== null && !(val instanceof NewgroundsIO.objects.Execute))
						console.warn("Type Mismatch: expecting NewgroundsIO.objects.Execute, got ",val);

					newArr[index] = val;
				});
				this.#execute = newArr;
				return;
			}

				if (_execute !== null && !(_execute instanceof NewgroundsIO.objects.Execute))
				console.warn("Type Mismatch: expecting NewgroundsIO.objects.Execute, got ",_execute);

			this.#execute = _execute;
		}

		/**
		 * @private
		 */
		#debug = null;

		/**
		 * If set to true, calls will be executed in debug mode.
		 * @type {Boolean}
		 */
		get debug()
		{
			return this.#debug;
		}

		set debug(_debug)
		{
			if (typeof(_debug) !== 'boolean' && typeof(_debug) !== 'number' && _debug !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a boolean, got', _debug);
			this.#debug = _debug ? true:false;

		}

		objectMap = {"execute":"Execute"};

		arrayMap = {"execute":"Execute"};


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
if (typeof(NewgroundsIO.objects) === 'undefined') NewgroundsIO.objects = {};
NewgroundsIO.objects.Request = Request;

})();

