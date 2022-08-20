(()=>{
/** Start Class NewgroundsIO.results.ScoreBoard.getBoards **/

	/**
	 * Returned when ScoreBoard.getBoards component is called
	 */
	class getBoards extends NewgroundsIO.BaseResult {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 */
		constructor(props)
		{
			super();

			this.__object = "ScoreBoard.getBoards";
			this._scoreboards = null;
			this.__properties = this.__properties.concat(["scoreboards"]);
			if (typeof(props) === 'object') {
				for(var i=0; i<this.__properties.length; i++) {
					if (typeof(props[this.__properties[i]]) !== 'undefined') this[this.__properties[i]] = props[this.__properties[i]];
				}
			}
		}

		/**
		 * An array of NewgroundsIO.objects.ScoreBoard objects.
		 * @type {Array.<NewgroundsIO.objects.ScoreBoard>}
		 */
		get scoreboards()
		{
			return this._scoreboards;
		}

		set scoreboards(_scoreboards)
		{
		}

	}

/** End Class NewgroundsIO.results.ScoreBoard.getBoards **/
if (typeof(NewgroundsIO.results.ScoreBoard) === 'undefined') NewgroundsIO.results.ScoreBoard = {};
NewgroundsIO.results.ScoreBoard.getBoards = getBoards;

})();

