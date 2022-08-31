(()=>{
/** Start NewgroundsIO.results.Loader.loadOfficialUrl **/

	class loadOfficialUrl extends NewgroundsIO.BaseResult {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {String} props.url 
		 */
		constructor(props)
		{
			super();
			let _this = this;

			this.__object = "Loader.loadOfficialUrl";
			["url"].forEach(prop => {
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
		#url = null;

		/**
		 * @type {String}
		 */
		get url()
		{
			return this.#url;
		}

		set url(_url)
		{
			if (typeof(_url) !== 'string' && _url !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _url);
			this.#url = String(_url);

		}

	}

/** End Class NewgroundsIO.results.Loader.loadOfficialUrl **/
if (typeof(NewgroundsIO.results.Loader) === 'undefined') NewgroundsIO.results.Loader = {};
NewgroundsIO.results.Loader.loadOfficialUrl = loadOfficialUrl;

})();

