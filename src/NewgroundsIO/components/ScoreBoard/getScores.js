(()=>{
/** Start Class NewgroundsIO.components.ScoreBoard.getScores **/

	/**
	 * Used to call the ScoreBoard.getScores component.
	 */
	class getScores extends NewgroundsIO.BaseComponent {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 */
		constructor(props)
		{
			super();

			this.__object = "ScoreBoard.getScores";
			this._id = null;
			this._period = null;
			this._tag = null;
			this._social = null;
			this._user = null;
			this._skip = null;
			this._limit = null;
			this.__required = ["id"];
			this.__properties = this.__properties.concat(["id","period","tag","social","user","skip","limit"]);
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
		 * The time-frame to pull scores from (see notes for acceptable values).
		 * @type {String}
		 */
		get period()
		{
			return this._period;
		}

		set period(_period)
		{
			if (typeof(_period) !== 'string' && _period !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _period);
			this._period = String(_period);

		}

		/**
		 * A tag to filter results by.
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

		/**
		 * If set to true, only social scores will be loaded (scores by the user and their friends). This param will be ignored if there is no valid session id and the 'user' param is absent.
		 * @type {Boolean}
		 */
		get social()
		{
			return this._social;
		}

		set social(_social)
		{
			if (typeof(_social) !== 'boolean' && _social !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a boolean, got', _social);
			this._social = _social ? true:false;

		}

		/**
		 * A user's ID or name.  If 'social' is true, this user and their friends will be included. Otherwise, only scores for this user will be loaded. If this param is missing and there is a valid session id, that user will be used by default.
		 * @type {mixed}
		 */
		get user()
		{
			return this._user;
		}

		set user(_user)
		{
			this._user = _user; // mixed

		}

		/**
		 * An integer indicating the number of scores to skip before starting the list. Default = 0.
		 * @type {Number}
		 */
		get skip()
		{
			return this._skip;
		}

		set skip(_skip)
		{
			if (typeof(_skip) !== 'number' && _skip !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a number, got', _skip);
			else if (!Number.isInteger(_skip) && _skip !== null) console.warn('NewgroundsIO Type Mismatch: Value should be an integer, got a float');
			this._skip = Number(_skip);
			if (isNaN(this._skip)) this._skip = null;

		}

		/**
		 * An integer indicating the number of scores to include in the list. Default = 10.
		 * @type {Number}
		 */
		get limit()
		{
			return this._limit;
		}

		set limit(_limit)
		{
			if (typeof(_limit) !== 'number' && _limit !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a number, got', _limit);
			else if (!Number.isInteger(_limit) && _limit !== null) console.warn('NewgroundsIO Type Mismatch: Value should be an integer, got a float');
			this._limit = Number(_limit);
			if (isNaN(this._limit)) this._limit = null;

		}

	}

/** End Class NewgroundsIO.components.ScoreBoard.getScores **/
if (typeof(NewgroundsIO.components.ScoreBoard) === 'undefined') NewgroundsIO.components.ScoreBoard = {};
NewgroundsIO.components.ScoreBoard.getScores = getScores;

})();

