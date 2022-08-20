(()=>{
/** Start Class NewgroundsIO.objects.Debug **/

	/**
 * Contains extra debugging information.
	 */
	class Debug extends NewgroundsIO.BaseObject {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 */
		constructor(props)
		{
				super();

				this.__object = 'Debug';

				this._exec_time = null;
				this._request = null;
				this.__properties = this.__properties.concat(["exec_time","request"]);
				if (props && typeof(props) === 'object') {
					for(var i=0; i<this.__properties.length; i++) {
						if (typeof(props[this.__properties[i]]) !== 'undefined') this[this.__properties[i]] = props[this.__properties[i]];
					}
				}

		}

		/**
		 * The time, in milliseconds, that it took to execute a request.
		 * @type {String}
		 */
		get exec_time()
		{
			return this._exec_time;
		}

		set exec_time(_exec_time)
		{
			if (typeof(_exec_time) !== 'string' && _exec_time !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _exec_time);
			this._exec_time = String(_exec_time);

		}

		/**
		 * A copy of the request object that was posted to the server.
		 * @type {NewgroundsIO.objects.Request}
		 */
		get request()
		{
			return this._request;
		}

		set request(_request)
		{
				if (_request !== null && !(_request instanceof NewgroundsIO.objects.Request))
				console.warn("Type Mismatch: expecting NewgroundsIO.objects.Request, got ",_request);

			this._request = _request;
		}

	}

/** End Class NewgroundsIO.objects.Debug **/
NewgroundsIO.objects.Debug = Debug;

})();

