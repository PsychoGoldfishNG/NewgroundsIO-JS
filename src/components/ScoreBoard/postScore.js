(()=>{

	/**
	 * Used to call the ScoreBoard.postScore component.
	 */
	class postScore extends NewgroundsIO.BaseComponent {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 */
		constructor(props)
		{
			super();

			this.__object = "ScoreBoard.postScore";
			this._id = null;
			this._value = null;
			this._tag = null;
			this.__required = ["id","value"];
			this.__isSecure = true;
			this.__requireSession = true;
			this.__properties = this.__properties.concat(["id","value","tag"]);
			if (typeof(props) === 'object') {
				for(var i=0; i<this.__properties.length; i++) {
					if (typeof(props[this.__properties[i]]) !== 'undefined') this[this.__properties[i]] = props[this.__properties[i]];
				}
			}
		}

		/**
		 * The numeric ID of the scoreboard.
		 * @type {Number}
		 */
		get id()
		{
			return this._id;
		}

		set id(_id)
		{
			if (typeof(_id) !== 'number' && _id !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a number, got', _id);
			else if (!Number.isInteger(_id) && _id !== null) console.warn('NewgroundsIO Type Mismatch: Value should be an integer, got a float');
			this._id = Number(_id);
			if (isNaN(this._id)) this._id = null;

		}

		/**
		 * The int value of the score.
		 * @type {Number}
		 */
		get value()
		{
			return this._value;
		}

		set value(_value)
		{
			if (typeof(_value) !== 'number' && _value !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a number, got', _value);
			else if (!Number.isInteger(_value) && _value !== null) console.warn('NewgroundsIO Type Mismatch: Value should be an integer, got a float');
			this._value = Number(_value);
			if (isNaN(this._value)) this._value = null;

		}

		/**
		 * An optional tag that can be used to filter scores via ScoreBoard.getScores
		 * @type {String}
		 */
		get tag()
		{
			return this._tag;
		}

		set tag(_tag)
		{
			if (typeof(_tag) !== 'string' && _tag !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _tag);
			this._tag = String(_tag);

		}

	}

	// Move class to namespace
	if (typeof(NewgroundsIO.components.ScoreBoard) === 'undefined') NewgroundsIO.components.ScoreBoard = {};
	NewgroundsIO.components.ScoreBoard.postScore = postScore;

})();

