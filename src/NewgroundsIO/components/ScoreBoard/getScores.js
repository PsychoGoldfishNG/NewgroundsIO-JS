(()=>{
/** Start NewgroundsIO.components.ScoreBoard.getScores **/

	class getScores extends NewgroundsIO.BaseComponent {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {Number} props.id The numeric ID of the scoreboard.
		 * @param {String} props.period The time-frame to pull scores from (see notes for acceptable values).
		 * @param {String} props.tag A tag to filter results by.
		 * @param {Boolean} props.social If set to true, only social scores will be loaded (scores by the user and their friends). This param will be ignored if there is no valid session id and the 'user' param is absent.
		 * @param {mixed} props.user A user's ID or name.  If 'social' is true, this user and their friends will be included. Otherwise, only scores for this user will be loaded. If this param is missing and there is a valid session id, that user will be used by default.
		 * @param {Number} props.skip An integer indicating the number of scores to skip before starting the list. Default = 0.
		 * @param {Number} props.limit An integer indicating the number of scores to include in the list. Default = 10.
		 * @param {String} props.app_id The App ID of another, approved app to load scores from.
		 */
		constructor(props)
		{
			super();
			let _this = this;

			this.__object = "ScoreBoard.getScores";
			["id","period","tag","social","user","skip","limit","app_id"].forEach(prop => {
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
		#period = null;

		/**
		 * The time-frame to pull scores from (see notes for acceptable values).
		 * @type {String}
		 */
		get period()
		{
			return this.#period;
		}

		set period(_period)
		{
			if (typeof(_period) !== 'string' && _period !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _period);
			this.#period = String(_period);

		}

		/**
		 * @private
		 */
		#tag = null;

		/**
		 * A tag to filter results by.
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

		/**
		 * @private
		 */
		#social = null;

		/**
		 * If set to true, only social scores will be loaded (scores by the user and their friends). This param will be ignored if there is no valid session id and the 'user' param is absent.
		 * @type {Boolean}
		 */
		get social()
		{
			return this.#social;
		}

		set social(_social)
		{
			if (typeof(_social) !== 'boolean' && typeof(_social) !== 'number' && _social !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a boolean, got', _social);
			this.#social = _social ? true:false;

		}

		/**
		 * @private
		 */
		#user = null;

		/**
		 * A user's ID or name.  If 'social' is true, this user and their friends will be included. Otherwise, only scores for this user will be loaded. If this param is missing and there is a valid session id, that user will be used by default.
		 * @type {mixed}
		 */
		get user()
		{
			return this.#user;
		}

		set user(_user)
		{
			this.#user = _user; // mixed

		}

		/**
		 * @private
		 */
		#skip = null;

		/**
		 * An integer indicating the number of scores to skip before starting the list. Default = 0.
		 * @type {Number}
		 */
		get skip()
		{
			return this.#skip;
		}

		set skip(_skip)
		{
			if (typeof(_skip) !== 'number' && _skip !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a number, got', _skip);
			else if (!Number.isInteger(_skip) && _skip !== null) console.warn('NewgroundsIO Type Mismatch: Value should be an integer, got a float');
			this.#skip = Number(_skip);
			if (isNaN(this.#skip)) this.#skip = null;

		}

		/**
		 * @private
		 */
		#limit = null;

		/**
		 * An integer indicating the number of scores to include in the list. Default = 10.
		 * @type {Number}
		 */
		get limit()
		{
			return this.#limit;
		}

		set limit(_limit)
		{
			if (typeof(_limit) !== 'number' && _limit !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a number, got', _limit);
			else if (!Number.isInteger(_limit) && _limit !== null) console.warn('NewgroundsIO Type Mismatch: Value should be an integer, got a float');
			this.#limit = Number(_limit);
			if (isNaN(this.#limit)) this.#limit = null;

		}

		/**
		 * @private
		 */
		#app_id = null;

		/**
		 * The App ID of another, approved app to load scores from.
		 * @type {String}
		 */
		get app_id()
		{
			return this.#app_id;
		}

		set app_id(_app_id)
		{
			if (typeof(_app_id) !== 'string' && _app_id !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _app_id);
			this.#app_id = String(_app_id);

		}

	}

/** End Class NewgroundsIO.components.ScoreBoard.getScores **/
if (typeof(NewgroundsIO.components.ScoreBoard) === 'undefined') NewgroundsIO.components.ScoreBoard = {};
NewgroundsIO.components.ScoreBoard.getScores = getScores;

})();

