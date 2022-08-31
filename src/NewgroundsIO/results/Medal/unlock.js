(()=>{
/** Start NewgroundsIO.results.Medal.unlock **/

	class unlock extends NewgroundsIO.BaseResult {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {NewgroundsIO.objects.Medal} props.medal The NewgroundsIO.objects.Medal that was unlocked.
		 * @param {Number} props.medal_score The user's new medal score.
		 */
		constructor(props)
		{
			super();
			let _this = this;

			this.__object = "Medal.unlock";
			["medal","medal_score"].forEach(prop => {
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
		#medal = null;

		/**
		 * The NewgroundsIO.objects.Medal that was unlocked.
		 * @type {NewgroundsIO.objects.Medal}
		 */
		get medal()
		{
			return this.#medal;
		}

		set medal(_medal)
		{
			if (!(_medal instanceof NewgroundsIO.objects.Medal) && typeof(_medal) === 'object')
				_medal = new NewgroundsIO.objects.Medal(_medal);

				if (_medal !== null && !(_medal instanceof NewgroundsIO.objects.Medal))
				console.warn("Type Mismatch: expecting NewgroundsIO.objects.Medal, got ",_medal);

			this.#medal = _medal;
		}

		/**
		 * @private
		 */
		#medal_score = null;

		/**
		 * The user's new medal score.
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

		objectMap = {"medal":"Medal"};

	}

/** End Class NewgroundsIO.results.Medal.unlock **/
if (typeof(NewgroundsIO.results.Medal) === 'undefined') NewgroundsIO.results.Medal = {};
NewgroundsIO.results.Medal.unlock = unlock;

})();

