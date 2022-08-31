(()=>{
/** Start NewgroundsIO.results.ScoreBoard.getBoards **/

	class getBoards extends NewgroundsIO.BaseResult {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {Array.<NewgroundsIO.objects.ScoreBoard>} props.scoreboards An array of NewgroundsIO.objects.ScoreBoard objects.
		 */
		constructor(props)
		{
			super();

			this.__object = "ScoreBoard.getBoards";
			this._scoreboards = null;
			this.__properties = this.__properties.concat(["scoreboards"]);
			if (props && typeof(props) === 'object') {
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
			if (Array.isArray(_scoreboards)) {
				let newArr = [];
				_scoreboards.forEach(function(val,index) {
						if (val !== null && !(val instanceof NewgroundsIO.objects.ScoreBoard))
						console.warn("Type Mismatch: expecting NewgroundsIO.objects.ScoreBoard, got ",val);

					newArr[index] = val;
				});
				this._scoreboards = newArr;
				return;
			}

		}

		arrayMap = {"scoreboards":"ScoreBoard"};

	}

/** End Class NewgroundsIO.results.ScoreBoard.getBoards **/
if (typeof(NewgroundsIO.results.ScoreBoard) === 'undefined') NewgroundsIO.results.ScoreBoard = {};
NewgroundsIO.results.ScoreBoard.getBoards = getBoards;

})();

