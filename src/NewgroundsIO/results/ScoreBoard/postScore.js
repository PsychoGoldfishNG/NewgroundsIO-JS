(()=>{
/** Start Class NewgroundsIO.results.ScoreBoard.postScore **/

	/**
	 * Returned when ScoreBoard.postScore component is called
	 */
	class postScore extends NewgroundsIO.BaseResult {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 */
		constructor(props)
		{
			super();

			this.__object = "ScoreBoard.postScore";
			this._scoreboard = null;
			this._score = null;
			this.__properties = this.__properties.concat(["scoreboard","score"]);
			if (typeof(props) === 'object') {
				for(var i=0; i<this.__properties.length; i++) {
					if (typeof(props[this.__properties[i]]) !== 'undefined') this[this.__properties[i]] = props[this.__properties[i]];
				}
			}
		}

		/**
		 * The NewgroundsIO.objects.ScoreBoard that was posted to.
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
		 * The NewgroundsIO.objects.Score that was posted to the board.
		 * @type {NewgroundsIO.objects.Score}
		 */
		get score()
		{
			return this._score;
		}

		set score(_score)
		{
			if (!(_score instanceof NewgroundsIO.objects.Score) && typeof(_score) === 'object')
				_score = new NewgroundsIO.objects.Score(_score);

				if (_score !== null && !(_score instanceof NewgroundsIO.objects.Score))
				console.warn("Type Mismatch: expecting NewgroundsIO.objects.Score, got ",_score);

			this._score = _score;
		}

	}

/** End Class NewgroundsIO.results.ScoreBoard.postScore **/
if (typeof(NewgroundsIO.results.ScoreBoard) === 'undefined') NewgroundsIO.results.ScoreBoard = {};
NewgroundsIO.results.ScoreBoard.postScore = postScore;

})();

