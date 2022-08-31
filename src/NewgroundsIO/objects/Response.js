(()=>{
/** Start NewgroundsIO.objects.Response **/

	class Response extends NewgroundsIO.BaseObject {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {String} props.app_id Your application's unique ID
		 * @param {Boolean} props.success If false, there was a problem with your 'request' object. Details will be in the error property.
		 * @param {NewgroundsIO.objects.Debug} props.debug Contains extra information you may need when debugging (debug mode only).
		 * @param {(NewgroundsIO.BaseResult|Array.<NewgroundsIO.BaseResult>)} props.result This will be a NewgroundsIO.results.XXXXXX object, or an array containing one-or-more NewgroundsIO.results.XXXXXX objects.
		 * @param {NewgroundsIO.objects.Error} props.error This will contain any error info if the success property is false.
		 * @param {String} props.api_version If there was an error, this will contain the current version number of the API gateway.
		 * @param {String} props.help_url If there was an error, this will contain the URL for our help docs.
		 * @param {mixed} props.echo If you passed an 'echo' value in your request object, it will be echoed here.
		 */
		constructor(props)
		{
			super();

			this.__object = "Response";
			this._app_id = null;
			this._success = null;
			this._debug = null;
			this._result = null;
			this._error = null;
			this._api_version = null;
			this._help_url = null;
			this.__properties = this.__properties.concat(["app_id","success","debug","result","error","api_version","help_url"]);
			if (props && typeof(props) === 'object') {
				for(var i=0; i<this.__properties.length; i++) {
					if (typeof(props[this.__properties[i]]) !== 'undefined') this[this.__properties[i]] = props[this.__properties[i]];
				}
			}
		}

		/**
		 * Your application's unique ID
		 * @type {String}
		 */
		get app_id()
		{
			return this._app_id;
		}

		set app_id(_app_id)
		{
			if (typeof(_app_id) !== 'string' && _app_id !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _app_id);
			this._app_id = String(_app_id);

		}

		/**
		 * If false, there was a problem with your 'request' object. Details will be in the error property.
		 * @type {Boolean}
		 */
		get success()
		{
			return this._success;
		}

		set success(_success)
		{
			if (typeof(_success) !== 'boolean' && typeof(_success) !== 'number' && _success !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a boolean, got', _success);
			this._success = _success ? true:false;

		}

		/**
		 * Contains extra information you may need when debugging (debug mode only).
		 * @type {NewgroundsIO.objects.Debug}
		 */
		get debug()
		{
			return this._debug;
		}

		set debug(_debug)
		{
			if (!(_debug instanceof NewgroundsIO.objects.Debug) && typeof(_debug) === 'object')
				_debug = new NewgroundsIO.objects.Debug(_debug);

				if (_debug !== null && !(_debug instanceof NewgroundsIO.objects.Debug))
				console.warn("Type Mismatch: expecting NewgroundsIO.objects.Debug, got ",_debug);

			this._debug = _debug;
		}

		/**
		 * This will be a NewgroundsIO.results.XXXXXX object, or an array containing one-or-more NewgroundsIO.results.XXXXXX objects.
		 * @type {(NewgroundsIO.BaseResult|Array.<NewgroundsIO.BaseResult>)}
		 */
		get result()
		{
			return this._result;
		}

		set result(_result)
		{
			if (Array.isArray(_result)) {
				let newArr = [];
				_result.forEach(function(val,index) {
					if (!(val instanceof NewgroundsIO.BaseResult) && val !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a NewgroundsIO.results.XXXX instance, got', val);
					newArr[index] = val

				});
				this._result = newArr;
				return;
			}

			if (!(_result instanceof NewgroundsIO.BaseResult) && _result !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a NewgroundsIO.results.XXXX instance, got', _result);
			this._result = _result

		}

		/**
		 * This will contain any error info if the success property is false.
		 * @type {NewgroundsIO.objects.Error}
		 */
		get error()
		{
			return this._error;
		}

		set error(_error)
		{
			if (!(_error instanceof NewgroundsIO.objects.Error) && typeof(_error) === 'object')
				_error = new NewgroundsIO.objects.Error(_error);

				if (_error !== null && !(_error instanceof NewgroundsIO.objects.Error))
				console.warn("Type Mismatch: expecting NewgroundsIO.objects.Error, got ",_error);

			this._error = _error;
		}

		/**
		 * If there was an error, this will contain the current version number of the API gateway.
		 * @type {String}
		 */
		get api_version()
		{
			return this._api_version;
		}

		set api_version(_api_version)
		{
			if (typeof(_api_version) !== 'string' && _api_version !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _api_version);
			this._api_version = String(_api_version);

		}

		/**
		 * If there was an error, this will contain the URL for our help docs.
		 * @type {String}
		 */
		get help_url()
		{
			return this._help_url;
		}

		set help_url(_help_url)
		{
			if (typeof(_help_url) !== 'string' && _help_url !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _help_url);
			this._help_url = String(_help_url);

		}

		/**
		 * If you passed an 'echo' value in your request object, it will be echoed here.
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

		objectMap = {"debug":"Debug","error":"Error"};

	}

/** End Class NewgroundsIO.objects.Response **/
if (typeof(NewgroundsIO.objects) === 'undefined') NewgroundsIO.objects = {};
NewgroundsIO.objects.Response = Response;

})();

