(()=>{
/** Start NewgroundsIO.objects.Medal **/

	class Medal extends NewgroundsIO.BaseObject {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {Number} props.id The numeric ID of the medal.
		 * @param {String} props.name The name of the medal.
		 * @param {String} props.description A short description of the medal.
		 * @param {String} props.icon The URL for the medal's icon.
		 * @param {Number} props.value The medal's point value.
		 * @param {Number} props.difficulty The difficulty id of the medal.
		 * @param {Boolean} props.secret 
		 * @param {Boolean} props.unlocked This will only be set if a valid user session exists.
		 */
		constructor(props)
		{
			super();

			this.__object = "Medal";
			this._id = null;
			this._name = null;
			this._description = null;
			this._icon = null;
			this._value = null;
			this._difficulty = null;
			this._secret = null;
			this._unlocked = null;
			this.__properties = this.__properties.concat(["id","name","description","icon","value","difficulty","secret","unlocked"]);
			if (typeof(props) === 'object') {
				for(var i=0; i<this.__properties.length; i++) {
					if (typeof(props[this.__properties[i]]) !== 'undefined') this[this.__properties[i]] = props[this.__properties[i]];
				}
			}
		}

		/**
		 * The numeric ID of the medal.
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
		 * The name of the medal.
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
		 * A short description of the medal.
		 * @type {String}
		 */
		get description()
		{
			return this._description;
		}

		set description(_description)
		{
			if (typeof(_description) !== 'string' && _description !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _description);
			this._description = String(_description);

		}

		/**
		 * The URL for the medal's icon.
		 * @type {String}
		 */
		get icon()
		{
			return this._icon;
		}

		set icon(_icon)
		{
			if (typeof(_icon) !== 'string' && _icon !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _icon);
			this._icon = String(_icon);

		}

		/**
		 * The medal's point value.
		 * @type {Number}
		 */
		get value()
		{
			return this._value;
		}

		set value(_value)
		{
			if (typeof(_value) !== 'number' && _value !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a number, got', _value);
			else if (!Number.isInteger(_value) && _value !== null) console.warn('NewgroundsIO Type Mismatch: Value should be an integer, got a float');
			this._value = Number(_value);
			if (isNaN(this._value)) this._value = null;

		}

		/**
		 * The difficulty id of the medal.
		 * @type {Number}
		 */
		get difficulty()
		{
			return this._difficulty;
		}

		set difficulty(_difficulty)
		{
			if (typeof(_difficulty) !== 'number' && _difficulty !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a number, got', _difficulty);
			else if (!Number.isInteger(_difficulty) && _difficulty !== null) console.warn('NewgroundsIO Type Mismatch: Value should be an integer, got a float');
			this._difficulty = Number(_difficulty);
			if (isNaN(this._difficulty)) this._difficulty = null;

		}

		/**
		 * @type {Boolean}
		 */
		get secret()
		{
			return this._secret;
		}

		set secret(_secret)
		{
			if (typeof(_secret) !== 'boolean' && typeof(_secret) !== 'number' && _secret !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a boolean, got', _secret);
			this._secret = _secret ? true:false;

		}

		/**
		 * This will only be set if a valid user session exists.
		 * @type {Boolean}
		 */
		get unlocked()
		{
			return this._unlocked;
		}

		set unlocked(_unlocked)
		{
			if (typeof(_unlocked) !== 'boolean' && typeof(_unlocked) !== 'number' && _unlocked !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a boolean, got', _unlocked);
			this._unlocked = _unlocked ? true:false;

		}

	
		/**
		 * @callback responseCallback
		 * @param {NewgroundsIO.objects.Response} serverResponse
		 */

		/**
		 * Unlocks this medal, then fires a callback.
		 * @param {responseCallback} callback An optional function to call when the medal is unlocked on the server.
		 * @param {object} thisArg An optional object to use as 'this' in your callback function.
		 */
		unlock(callback, thisArg)
		{
			if (!this.__ngioCore) {
				console.error("NewgroundsIO - Can not unlock medal object without attaching a NewgroundsIO.Core instance.");
				return;
			}

			var component = this.__ngioCore.getComponent('Medal.unlock', {id:this.id});
			this.__ngioCore.executeComponent(component, callback, thisArg);
		}
			}

/** End Class NewgroundsIO.objects.Medal **/
if (typeof(NewgroundsIO.objects) === 'undefined') NewgroundsIO.objects = {};
NewgroundsIO.objects.Medal = Medal;

})();

