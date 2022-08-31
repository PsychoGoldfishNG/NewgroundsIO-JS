(()=>{
/** Start NewgroundsIO.components.ScoreBoard.postScore **/

	class postScore extends NewgroundsIO.BaseComponent {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {Number} props.id The numeric ID of the scoreboard.
		 * @param {Number} props.value The int value of the score.
		 * @param {String} props.tag An optional tag that can be used to filter scores via ScoreBoard.getScores
		 */
		constructor(props)
		{
			super();
			let _this = this;

			this.__object = "ScoreBoard.postScore";
			this.__isSecure = true;
			this.__requireSession = true;
			["id","value","tag"].forEach(prop => {
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
		#id = null;

		/**
		 * The numeric ID of the scoreboard.
		 * @type {Number}
		 */
		get id()
		{
			return this.#id;
		}

		set id(_id)
		{
			if (typeof(_id) !== 'number' && _id !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a number, got', _id);
			else if (!Number.isInteger(_id) && _id !== null) console.warn('NewgroundsIO Type Mismatch: Value should be an integer, got a float');
			this.#id = Number(_id);
			if (isNaN(this.#id)) this.#id = null;

		}

		/**
		 * @private
		 */
		#value = null;

		/**
		 * The int value of the score.
		 * @type {Number}
		 */
		get value()
		{
			return this.#value;
		}

		set value(_value)
		{
			if (typeof(_value) !== 'number' && _value !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a number, got', _value);
			else if (!Number.isInteger(_value) && _value !== null) console.warn('NewgroundsIO Type Mismatch: Value should be an integer, got a float');
			this.#value = Number(_value);
			if (isNaN(this.#value)) this.#value = null;

		}

		/**
		 * @private
		 */
		#tag = null;

		/**
		 * An optional tag that can be used to filter scores via ScoreBoard.getScores
		 * @type {String}
		 */
		get tag()
		{
			return this.#tag;
		}

		set tag(_tag)
		{
			if (typeof(_tag) !== 'string' && _tag !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _tag);
			this.#tag = String(_tag);

		}

	}

/** End Class NewgroundsIO.components.ScoreBoard.postScore **/
if (typeof(NewgroundsIO.components.ScoreBoard) === 'undefined') NewgroundsIO.components.ScoreBoard = {};
NewgroundsIO.components.ScoreBoard.postScore = postScore;

})();

