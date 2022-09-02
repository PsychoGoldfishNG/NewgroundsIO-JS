(()=>{
/** Start NewgroundsIO.results.Medal.getList **/

	class getList extends NewgroundsIO.BaseResult {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {Array.<NewgroundsIO.objects.Medal>} props.medals An array of medal objects.
		 * @param {String} props.app_id The App ID of any external app these medals were loaded from.
		 */
		constructor(props)
		{
			super();
			let _this = this;

			this.__object = "Medal.getList";
			["medals","app_id"].forEach(prop => {
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
		#medals = null;

		/**
		 * An array of medal objects.
		 * @type {Array.<NewgroundsIO.objects.Medal>}
		 */
		get medals()
		{
			return this.#medals;
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
				this.#medals = newArr;
				return;
			}

		}

		/**
		 * @private
		 */
		#app_id = null;

		/**
		 * The App ID of any external app these medals were loaded from.
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

		arrayMap = {"medals":"Medal"};

	}

/** End Class NewgroundsIO.results.Medal.getList **/
if (typeof(NewgroundsIO.results.Medal) === 'undefined') NewgroundsIO.results.Medal = {};
NewgroundsIO.results.Medal.getList = getList;

})();

