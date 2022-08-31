(()=>{
/** Start NewgroundsIO.results.Medal.getMedalScore **/

	class getMedalScore extends NewgroundsIO.BaseResult {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {Number} props.medal_score The user's medal score.
		 */
		constructor(props)
		{
			super();
			let _this = this;

			this.__object = "Medal.getMedalScore";
			["medal_score"].forEach(prop => {
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
		#medal_score = null;

		/**
		 * The user's medal score.
		 * @type {Number}
		 */
		get medal_score()
		{
			return this.#medal_score;
		}

		set medal_score(_medal_score)
		{
			if (typeof(_medal_score) !== 'number' && _medal_score !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a number, got', _medal_score);
			else if (!Number.isInteger(_medal_score) && _medal_score !== null) console.warn('NewgroundsIO Type Mismatch: Value should be an integer, got a float');
			this.#medal_score = Number(_medal_score);
			if (isNaN(this.#medal_score)) this.#medal_score = null;

		}

	}

/** End Class NewgroundsIO.results.Medal.getMedalScore **/
if (typeof(NewgroundsIO.results.Medal) === 'undefined') NewgroundsIO.results.Medal = {};
NewgroundsIO.results.Medal.getMedalScore = getMedalScore;

})();

