(()=>{
/** Start NewgroundsIO.objects.User **/

	class User extends NewgroundsIO.BaseObject {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {Number} props.id The user's numeric ID.
		 * @param {String} props.name The user's textual name.
		 * @param {NewgroundsIO.objects.UserIcons} props.icons The user's icon images.
		 * @param {Boolean} props.supporter Returns true if the user has a Newgrounds Supporter upgrade.
		 */
		constructor(props)
		{
			super();

			this.__object = "User";
			this._id = null;
			this._name = null;
			this._icons = null;
			this._supporter = null;
			this.__properties = this.__properties.concat(["id","name","icons","supporter"]);
			if (typeof(props) === 'object') {
				for(var i=0; i<this.__properties.length; i++) {
					if (typeof(props[this.__properties[i]]) !== 'undefined') this[this.__properties[i]] = props[this.__properties[i]];
				}
			}
		}

		/**
		 * The user's numeric ID.
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
		 * The user's textual name.
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
		 * The user's icon images.
		 * @type {NewgroundsIO.objects.UserIcons}
		 */
		get icons()
		{
			return this._icons;
		}

		set icons(_icons)
		{
			if (!(_icons instanceof NewgroundsIO.objects.UserIcons) && typeof(_icons) === 'object')
				_icons = new NewgroundsIO.objects.UserIcons(_icons);

				if (_icons !== null && !(_icons instanceof NewgroundsIO.objects.UserIcons))
				console.warn("Type Mismatch: expecting NewgroundsIO.objects.UserIcons, got ",_icons);

			this._icons = _icons;
		}

		/**
		 * Returns true if the user has a Newgrounds Supporter upgrade.
		 * @type {Boolean}
		 */
		get supporter()
		{
			return this._supporter;
		}

		set supporter(_supporter)
		{
			if (typeof(_supporter) !== 'boolean' && typeof(_supporter) !== 'number' && _supporter !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a boolean, got', _supporter);
			this._supporter = _supporter ? true:false;

		}

		objectMap = {"icons":"UserIcons"};

	}

/** End Class NewgroundsIO.objects.User **/
if (typeof(NewgroundsIO.objects) === 'undefined') NewgroundsIO.objects = {};
NewgroundsIO.objects.User = User;

})();

