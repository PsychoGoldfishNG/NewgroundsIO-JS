(()=>{
/** Start Class NewgroundsIO.results.Medal.getMedalScore **/

	/**
	 * Returned when Medal.getMedalScore component is called
	 */
	class getMedalScore extends NewgroundsIO.BaseResult {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 */
		constructor(props)
		{
			super();

			this.__object = "Medal.getMedalScore";
			this._medal_score = null;
			this.__properties = this.__properties.concat(["medal_score"]);
			if (typeof(props) === 'object') {
				for(var i=0; i<this.__properties.length; i++) {
					if (typeof(props[this.__properties[i]]) !== 'undefined') this[this.__properties[i]] = props[this.__properties[i]];
				}
			}
		}

		/**
		 * The user's medal score.
		 * @type {Number}
		 */
		get medal_score()
		{
			return this._medal_score;
		}

		set medal_score(_medal_score)
		{
			if (typeof(_medal_score) !== 'number' && _medal_score !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a number, got', _medal_score);
			else if (!Number.isInteger(_medal_score) && _medal_score !== null) console.warn('NewgroundsIO Type Mismatch: Value should be an integer, got a float');
			this._medal_score = Number(_medal_score);
			if (isNaN(this._medal_score)) this._medal_score = null;

		}

		objectMap = {};

		arrayMap = {};

	}

/** End Class NewgroundsIO.results.Medal.getMedalScore **/
if (typeof(NewgroundsIO.results.Medal) === 'undefined') NewgroundsIO.results.Medal = {};
NewgroundsIO.results.Medal.getMedalScore = getMedalScore;

})();

