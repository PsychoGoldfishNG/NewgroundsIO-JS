(()=>{
/** Start NewgroundsIO.results.App.getHostLicense **/

	class getHostLicense extends NewgroundsIO.BaseResult {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {Boolean} props.host_approved 
		 */
		constructor(props)
		{
			super();
			let _this = this;

			this.__object = "App.getHostLicense";
			["host_approved"].forEach(prop => {
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
		#host_approved = null;

		/**
		 * @type {Boolean}
		 */
		get host_approved()
		{
			return this.#host_approved;
		}

		set host_approved(_host_approved)
		{
			if (typeof(_host_approved) !== 'boolean' && typeof(_host_approved) !== 'number' && _host_approved !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a boolean, got', _host_approved);
			this.#host_approved = _host_approved ? true:false;

		}

	}

/** End Class NewgroundsIO.results.App.getHostLicense **/
if (typeof(NewgroundsIO.results.App) === 'undefined') NewgroundsIO.results.App = {};
NewgroundsIO.results.App.getHostLicense = getHostLicense;

})();

