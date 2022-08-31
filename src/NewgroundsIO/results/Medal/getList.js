(()=>{
/** Start NewgroundsIO.results.Medal.getList **/

	class getList extends NewgroundsIO.BaseResult {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {Array.<NewgroundsIO.objects.Medal>} props.medals An array of medal objects.
		 */
		constructor(props)
		{
			super();

			this.__object = "Medal.getList";
			this._medals = null;
			this.__properties = this.__properties.concat(["medals"]);
			if (props && typeof(props) === 'object') {
				for(var i=0; i<this.__properties.length; i++) {
					if (typeof(props[this.__properties[i]]) !== 'undefined') this[this.__properties[i]] = props[this.__properties[i]];
				}
			}
		}

		/**
		 * An array of medal objects.
		 * @type {Array.<NewgroundsIO.objects.Medal>}
		 */
		get medals()
		{
			return this._medals;
		}

		set medals(_medals)
		{
			if (Array.isArray(_medals)) {
				let newArr = [];
				_medals.forEach(function(val,index) {
						if (val !== null && !(val instanceof NewgroundsIO.objects.Medal))
						console.warn("Type Mismatch: expecting NewgroundsIO.objects.Medal, got ",val);

					newArr[index] = val;
				});
				this._medals = newArr;
				return;
			}

		}

		arrayMap = {"medals":"Medal"};

	}

/** End Class NewgroundsIO.results.Medal.getList **/
if (typeof(NewgroundsIO.results.Medal) === 'undefined') NewgroundsIO.results.Medal = {};
NewgroundsIO.results.Medal.getList = getList;

})();

