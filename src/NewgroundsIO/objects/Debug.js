(()=>{
/** Start NewgroundsIO.objects.Debug **/

	class Debug extends NewgroundsIO.BaseObject {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {String} props.exec_time The time, in milliseconds, that it took to execute a request.
		 * @param {NewgroundsIO.objects.Request} props.request A copy of the request object that was posted to the server.
		 */
		constructor(props)
		{
			super();
			let _this = this;

			this.__object = "Debug";
			["exec_time","request"].forEach(prop => {
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
		#exec_time = null;

		/**
		 * The time, in milliseconds, that it took to execute a request.
		 * @type {String}
		 */
		get exec_time()
		{
			return this.#exec_time;
		}

		set exec_time(_exec_time)
		{
			if (typeof(_exec_time) !== 'string' && _exec_time !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _exec_time);
			this.#exec_time = String(_exec_time);

		}

		/**
		 * @private
		 */
		#request = null;

		/**
		 * A copy of the request object that was posted to the server.
		 * @type {NewgroundsIO.objects.Request}
		 */
		get request()
		{
			return this.#request;
		}

		set request(_request)
		{
			if (!(_request instanceof NewgroundsIO.objects.Request) && typeof(_request) === 'object')
				_request = new NewgroundsIO.objects.Request(_request);

				if (_request !== null && !(_request instanceof NewgroundsIO.objects.Request))
				console.warn("Type Mismatch: expecting NewgroundsIO.objects.Request, got ",_request);

			this.#request = _request;
		}

		objectMap = {"request":"Request"};

	}

/** End Class NewgroundsIO.objects.Debug **/
if (typeof(NewgroundsIO.objects) === 'undefined') NewgroundsIO.objects = {};
NewgroundsIO.objects.Debug = Debug;

})();

