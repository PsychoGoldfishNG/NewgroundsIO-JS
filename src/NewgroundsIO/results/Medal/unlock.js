(()=>{
/** Start Class NewgroundsIO.results.Medal.unlock **/

	/**
	 * Returned when Medal.unlock component is called
	 */
	class unlock extends NewgroundsIO.BaseResult {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 */
		constructor(props)
		{
			super();

			this.__object = "Medal.unlock";
			this._medal = null;
			this._medal_score = null;
			this.__properties = this.__properties.concat(["medal","medal_score"]);
			if (typeof(props) === 'object') {
				for(var i=0; i<this.__properties.length; i++) {
					if (typeof(props[this.__properties[i]]) !== 'undefined') this[this.__properties[i]] = props[this.__properties[i]];
				}
			}
		}

		/**
		 * The NewgroundsIO.objects.Medal that was unlocked.
		 * @type {NewgroundsIO.objects.Medal}
		 */
		get medal()
		{
			return this._medal;
		}

		set medal(_medal)
		{
			if (!(_medal instanceof NewgroundsIO.objects.Medal) && typeof(_medal) === 'object')
				_medal = new NewgroundsIO.objects.Medal(_medal);

				if (_medal !== null && !(_medal instanceof NewgroundsIO.objects.Medal))
				console.warn("Type Mismatch: expecting NewgroundsIO.objects.Medal, got ",_medal);

			this._medal = _medal;
		}

		/**
		 * The user's new medal score.
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

	}

/** End Class NewgroundsIO.results.Medal.unlock **/
if (typeof(NewgroundsIO.results.Medal) === 'undefined') NewgroundsIO.results.Medal = {};
NewgroundsIO.results.Medal.unlock = unlock;

})();

