(()=>{
/** Start NewgroundsIO.objects.UserIcons **/

	class UserIcons extends NewgroundsIO.BaseObject {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {String} props.small The URL of the user's small icon
		 * @param {String} props.medium The URL of the user's medium icon
		 * @param {String} props.large The URL of the user's large icon
		 */
		constructor(props)
		{
			super();

			this.__object = "UserIcons";
			this._small = null;
			this._medium = null;
			this._large = null;
			this.__properties = this.__properties.concat(["small","medium","large"]);
			if (typeof(props) === 'object') {
				for(var i=0; i<this.__properties.length; i++) {
					if (typeof(props[this.__properties[i]]) !== 'undefined') this[this.__properties[i]] = props[this.__properties[i]];
				}
			}
		}

		/**
		 * The URL of the user's small icon
		 * @type {String}
		 */
		get small()
		{
			return this._small;
		}

		set small(_small)
		{
			if (typeof(_small) !== 'string' && _small !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _small);
			this._small = String(_small);

		}

		/**
		 * The URL of the user's medium icon
		 * @type {String}
		 */
		get medium()
		{
			return this._medium;
		}

		set medium(_medium)
		{
			if (typeof(_medium) !== 'string' && _medium !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _medium);
			this._medium = String(_medium);

		}

		/**
		 * The URL of the user's large icon
		 * @type {String}
		 */
		get large()
		{
			return this._large;
		}

		set large(_large)
		{
			if (typeof(_large) !== 'string' && _large !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _large);
			this._large = String(_large);

		}

	}

/** End Class NewgroundsIO.objects.UserIcons **/
if (typeof(NewgroundsIO.objects) === 'undefined') NewgroundsIO.objects = {};
NewgroundsIO.objects.UserIcons = UserIcons;

})();

