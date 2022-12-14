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
			let _this = this;

			this.__object = "ScoreBoard.getBoards";
			["scoreboards"].forEach(prop => {
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
		#scoreboards = null;

		/**
		 * An array of NewgroundsIO.objects.ScoreBoard objects.
		 * @type {Array.<NewgroundsIO.objects.ScoreBoard>}
		 */
		get scoreboards()
		{
			return this.#scoreboards;
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
				this.#scoreboards = newArr;
				return;
			}

		}

		arrayMap = {"scoreboards":"ScoreBoard"};

	}

/** End Class NewgroundsIO.results.ScoreBoard.getBoards **/
if (typeof(NewgroundsIO.results.ScoreBoard) === 'undefined') NewgroundsIO.results.ScoreBoard = {};
NewgroundsIO.results.ScoreBoard.getBoards = getBoards;

})();

