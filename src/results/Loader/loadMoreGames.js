(()=>{

	/**
	 * Returned when Loader.loadMoreGames component is called
	 */
	class loadMoreGames extends NewgroundsIO.BaseResult {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 */
		constructor(props)
		{
			super();

			this.__object = "Loader.loadMoreGames";
			this._url = null;
			this.__properties = this.__properties.concat(["url"]);
			if (typeof(props) === 'object') {
				for(var i=0; i<this.__properties.length; i++) {
					if (typeof(props[this.__properties[i]]) !== 'undefined') this[this.__properties[i]] = props[this.__properties[i]];
				}
			}
		}

		/**
		 * @type {String}
		 */
		get url()
		{
			return this._url;
		}

		set url(_url)
		{
			if (typeof(_url) !== 'string' && _url !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _url);
			this._url = String(_url);

		}

	}

	// Move class to namespace
	if (typeof(NewgroundsIO.results.Loader) === 'undefined') NewgroundsIO.results.Loader = {};
	NewgroundsIO.results.Loader.loadMoreGames = loadMoreGames;

})();

