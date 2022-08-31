(()=>{
/** Start NewgroundsIO.results.ScoreBoard.postScore **/

	class postScore extends NewgroundsIO.BaseResult {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {NewgroundsIO.objects.ScoreBoard} props.scoreboard The NewgroundsIO.objects.ScoreBoard that was posted to.
		 * @param {NewgroundsIO.objects.Score} props.score The NewgroundsIO.objects.Score that was posted to the board.
		 */
		constructor(props)
		{
			super();
			let _this = this;

			this.__object = "ScoreBoard.postScore";
			["scoreboard","score"].forEach(prop => {
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
		#scoreboard = null;

		/**
		 * The NewgroundsIO.objects.ScoreBoard that was posted to.
		 * @type {NewgroundsIO.objects.ScoreBoard}
		 */
		get scoreboard()
		{
			return this.#scoreboard;
		}

		set scoreboard(_scoreboard)
		{
			if (!(_scoreboard instanceof NewgroundsIO.objects.ScoreBoard) && typeof(_scoreboard) === 'object')
				_scoreboard = new NewgroundsIO.objects.ScoreBoard(_scoreboard);

				if (_scoreboard !== null && !(_scoreboard instanceof NewgroundsIO.objects.ScoreBoard))
				console.warn("Type Mismatch: expecting NewgroundsIO.objects.ScoreBoard, got ",_scoreboard);

			this.#scoreboard = _scoreboard;
		}

		/**
		 * @private
		 */
		#score = null;

		/**
		 * The NewgroundsIO.objects.Score that was posted to the board.
		 * @type {NewgroundsIO.objects.Score}
		 */
		get score()
		{
			return this.#score;
		}

		set score(_score)
		{
			if (!(_score instanceof NewgroundsIO.objects.Score) && typeof(_score) === 'object')
				_score = new NewgroundsIO.objects.Score(_score);

				if (_score !== null && !(_score instanceof NewgroundsIO.objects.Score))
				console.warn("Type Mismatch: expecting NewgroundsIO.objects.Score, got ",_score);

			this.#score = _score;
		}

		objectMap = {"scoreboard":"ScoreBoard","score":"Score"};

	}

/** End Class NewgroundsIO.results.ScoreBoard.postScore **/
if (typeof(NewgroundsIO.results.ScoreBoard) === 'undefined') NewgroundsIO.results.ScoreBoard = {};
NewgroundsIO.results.ScoreBoard.postScore = postScore;

})();

