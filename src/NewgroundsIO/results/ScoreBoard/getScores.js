(()=>{
/** Start NewgroundsIO.results.ScoreBoard.getScores **/

	class getScores extends NewgroundsIO.BaseResult {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {String} props.period The time-frame the scores belong to. See notes for acceptable values.
		 * @param {Boolean} props.social Will return true if scores were loaded in social context ('social' set to true and a session or 'user' were provided).
		 * @param {Number} props.limit The query skip that was used.
		 * @param {NewgroundsIO.objects.ScoreBoard} props.scoreboard The NewgroundsIO.objects.ScoreBoard being queried.
		 * @param {Array.<NewgroundsIO.objects.Score>} props.scores An array of NewgroundsIO.objects.Score objects.
		 * @param {NewgroundsIO.objects.User} props.user The NewgroundsIO.objects.User the score list is associated with (either as defined in the 'user' param, or extracted from the current session when 'social' is set to true)
		 */
		constructor(props)
		{
			super();

			this.__object = "ScoreBoard.getScores";
			this._period = null;
			this._social = null;
			this._limit = null;
			this._scoreboard = null;
			this._scores = null;
			this._user = null;
			this.__properties = this.__properties.concat(["period","social","limit","scoreboard","scores","user"]);
			if (typeof(props) === 'object') {
				for(var i=0; i<this.__properties.length; i++) {
					if (typeof(props[this.__properties[i]]) !== 'undefined') this[this.__properties[i]] = props[this.__properties[i]];
				}
			}
		}

		/**
		 * The time-frame the scores belong to. See notes for acceptable values.
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
		 * Will return true if scores were loaded in social context ('social' set to true and a session or 'user' were provided).
		 * @type {Boolean}
		 */
		get social()
		{
			return this._social;
		}

		set social(_social)
		{
			if (typeof(_social) !== 'boolean' && typeof(_social) !== 'number' && _social !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a boolean, got', _social);
			this._social = _social ? true:false;

		}

		/**
		 * The query skip that was used.
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

		/**
		 * The NewgroundsIO.objects.ScoreBoard being queried.
		 * @type {NewgroundsIO.objects.ScoreBoard}
		 */
		get scoreboard()
		{
			return this._scoreboard;
		}

		set scoreboard(_scoreboard)
		{
			if (!(_scoreboard instanceof NewgroundsIO.objects.ScoreBoard) && typeof(_scoreboard) === 'object')
				_scoreboard = new NewgroundsIO.objects.ScoreBoard(_scoreboard);

				if (_scoreboard !== null && !(_scoreboard instanceof NewgroundsIO.objects.ScoreBoard))
				console.warn("Type Mismatch: expecting NewgroundsIO.objects.ScoreBoard, got ",_scoreboard);

			this._scoreboard = _scoreboard;
		}

		/**
		 * An array of NewgroundsIO.objects.Score objects.
		 * @type {Array.<NewgroundsIO.objects.Score>}
		 */
		get scores()
		{
			return this._scores;
		}

		set scores(_scores)
		{
			if (Array.isArray(_scores)) {
				let newArr = [];
				_scores.forEach(function(val,index) {
						if (val !== null && !(val instanceof NewgroundsIO.objects.Score))
						console.warn("Type Mismatch: expecting NewgroundsIO.objects.Score, got ",val);

					newArr[index] = val;
				});
				this._scores = newArr;
				return;
			}

		}

		/**
		 * The NewgroundsIO.objects.User the score list is associated with (either as defined in the 'user' param, or extracted from the current session when 'social' is set to true)
		 * @type {NewgroundsIO.objects.User}
		 */
		get user()
		{
			return this._user;
		}

		set user(_user)
		{
			if (!(_user instanceof NewgroundsIO.objects.User) && typeof(_user) === 'object')
				_user = new NewgroundsIO.objects.User(_user);

				if (_user !== null && !(_user instanceof NewgroundsIO.objects.User))
				console.warn("Type Mismatch: expecting NewgroundsIO.objects.User, got ",_user);

			this._user = _user;
		}

		objectMap = {"scoreboard":"ScoreBoard","user":"User"};

		arrayMap = {"scores":"Score"};

	}

/** End Class NewgroundsIO.results.ScoreBoard.getScores **/
if (typeof(NewgroundsIO.results.ScoreBoard) === 'undefined') NewgroundsIO.results.ScoreBoard = {};
NewgroundsIO.results.ScoreBoard.getScores = getScores;

})();

