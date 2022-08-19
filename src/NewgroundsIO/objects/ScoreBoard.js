(()=>{

	/**
 * Contains information about a scoreboard.
	 */
	class ScoreBoard extends NewgroundsIO.BaseObject {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 */
		constructor(props)
		{
				super();

				this.__object = 'ScoreBoard';

				this._id = null;
				this._name = null;
				this.__properties = this.__properties.concat(["id","name"]);
				if (props && typeof(props) === 'object') {
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
		 * The name of the scoreboard.
		 * @type {String}
		 */
		get name()
		{
			return this._name;
		}

		set name(_name)
		{
			if (typeof(_name) !== 'string' && _name !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _name);
			this._name = String(_name);

		}

	
		/**
		 * Unlocks this medal, then fires a callback.
		 * @param {object} options Options for what scores to look up.
		 * @param {string} options.period The overall period to retrieve from. Can be D, W, M, Y or A.
		 * @param {string} options.tag An optional tag to filter on.
		 * @param {boolean} options.social Set to true to only see scores from friends.
		 * @param {Number} options.skip The number of scores to skip.
		 * @param {Number} options.limit The total number of scores to load.
		 * @param {function} callback An optional function to call when the medal is unlocked on the server.
		 * @param {object} thisArg An optional object to use as 'this' in your callback function.
		 */
		getScores(options, callback, thisArg)
		{
			if (!this.__ngioCore) {
				console.error("NewgroundsIO - Can not get scores without attaching a NewgroundsIO.Core instance.");
				return;
			}

			// if not using options, 2nd and 3rd params can be used for callback and thisArg
			if (typeof(options) === "function") {
				thisArg = callback;
				callback = options;
				options = {};
			}

			var component = this.__ngioCore.getComponent('ScoreBoard.getScores', options);
			this.__ngioCore.executeComponent(component, callback, thisArg);
		}

		postScore(value, tag, callback, thisArg)
		{
			if (!this.__ngioCore) {
				console.error("NewgroundsIO - Can not post scores without attaching a NewgroundsIO.Core instance.");
				return;
			}

			// if not using a tag, 2nd and 3rd params can be used for callback and thisArg
			if (typeof(tag) == "function") {
				thisArg = callback;
				callback = tag;
				tag = null;
			}

			var component = this.__ngioCore.getComponent('ScoreBoard.postScore', {id:this.id,value:value,tag:tag});
			this.__ngioCore.executeComponent(component, callback, thisArg);
		}
			}

	// Move class to namespace
	NewgroundsIO.objects.ScoreBoard = ScoreBoard;

})();

