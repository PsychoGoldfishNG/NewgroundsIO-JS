(()=>{
/** Start NewgroundsIO.objects.Score **/

	class Score extends NewgroundsIO.BaseObject {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {NewgroundsIO.objects.User} props.user The user who earned score. If this property is absent, the score belongs to the active user.
		 * @param {Number} props.value The integer value of the score.
		 * @param {String} props.formatted_value The score value in the format selected in your scoreboard settings.
		 * @param {String} props.tag The tag attached to this score (if any).
		 */
		constructor(props)
		{
			super();
			let _this = this;

			this.__object = "Score";
			["user","value","formatted_value","tag"].forEach(prop => {
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
		#user = null;

		/**
		 * The user who earned score. If this property is absent, the score belongs to the active user.
		 * @type {NewgroundsIO.objects.User}
		 */
		get user()
		{
			return this.#user;
		}

		set user(_user)
		{
			if (!(_user instanceof NewgroundsIO.objects.User) && typeof(_user) === 'object')
				_user = new NewgroundsIO.objects.User(_user);

				if (_user !== null && !(_user instanceof NewgroundsIO.objects.User))
				console.warn("Type Mismatch: expecting NewgroundsIO.objects.User, got ",_user);

			this.#user = _user;
		}

		/**
		 * @private
		 */
		#value = null;

		/**
		 * The integer value of the score.
		 * @type {Number}
		 */
		get value()
		{
			return this.#value;
		}

		set value(_value)
		{
			if (typeof(_value) !== 'number' && _value !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a number, got', _value);
			else if (!Number.isInteger(_value) && _value !== null) console.warn('NewgroundsIO Type Mismatch: Value should be an integer, got a float');
			this.#value = Number(_value);
			if (isNaN(this.#value)) this.#value = null;

		}

		/**
		 * @private
		 */
		#formatted_value = null;

		/**
		 * The score value in the format selected in your scoreboard settings.
		 * @type {String}
		 */
		get formatted_value()
		{
			return this.#formatted_value;
		}

		set formatted_value(_formatted_value)
		{
			if (typeof(_formatted_value) !== 'string' && _formatted_value !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _formatted_value);
			this.#formatted_value = String(_formatted_value);

		}

		/**
		 * @private
		 */
		#tag = null;

		/**
		 * The tag attached to this score (if any).
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

		objectMap = {"user":"User"};

	}

/** End Class NewgroundsIO.objects.Score **/
if (typeof(NewgroundsIO.objects) === 'undefined') NewgroundsIO.objects = {};
NewgroundsIO.objects.Score = Score;

})();

