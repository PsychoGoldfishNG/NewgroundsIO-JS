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
			let _this = this;

			this.__object = "Medal";
			["id","name","description","icon","value","difficulty","secret","unlocked"].forEach(prop => {
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
		#id = null;

		/**
		 * The numeric ID of the medal.
		 * @type {Number}
		 */
		get id()
		{
			return this.#id;
		}

		set id(_id)
		{
			if (typeof(_id) !== 'number' && _id !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a number, got', _id);
			else if (!Number.isInteger(_id) && _id !== null) console.warn('NewgroundsIO Type Mismatch: Value should be an integer, got a float');
			this.#id = Number(_id);
			if (isNaN(this.#id)) this.#id = null;

		}

		/**
		 * @private
		 */
		#name = null;

		/**
		 * The name of the medal.
		 * @type {String}
		 */
		get name()
		{
			return this.#name;
		}

		set name(_name)
		{
			if (typeof(_name) !== 'string' && _name !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _name);
			this.#name = String(_name);

		}

		/**
		 * @private
		 */
		#description = null;

		/**
		 * A short description of the medal.
		 * @type {String}
		 */
		get description()
		{
			return this.#description;
		}

		set description(_description)
		{
			if (typeof(_description) !== 'string' && _description !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _description);
			this.#description = String(_description);

		}

		/**
		 * @private
		 */
		#icon = null;

		/**
		 * The URL for the medal's icon.
		 * @type {String}
		 */
		get icon()
		{
			return this.#icon;
		}

		set icon(_icon)
		{
			if (typeof(_icon) !== 'string' && _icon !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _icon);
			this.#icon = String(_icon);

		}

		/**
		 * @private
		 */
		#value = null;

		/**
		 * The medal's point value.
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
		#difficulty = null;

		/**
		 * The difficulty id of the medal.
		 * @type {Number}
		 */
		get difficulty()
		{
			return this.#difficulty;
		}

		set difficulty(_difficulty)
		{
			if (typeof(_difficulty) !== 'number' && _difficulty !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a number, got', _difficulty);
			else if (!Number.isInteger(_difficulty) && _difficulty !== null) console.warn('NewgroundsIO Type Mismatch: Value should be an integer, got a float');
			this.#difficulty = Number(_difficulty);
			if (isNaN(this.#difficulty)) this.#difficulty = null;

		}

		/**
		 * @private
		 */
		#secret = null;

		/**
		 * @type {Boolean}
		 */
		get secret()
		{
			return this.#secret;
		}

		set secret(_secret)
		{
			if (typeof(_secret) !== 'boolean' && typeof(_secret) !== 'number' && _secret !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a boolean, got', _secret);
			this.#secret = _secret ? true:false;

		}

		/**
		 * @private
		 */
		#unlocked = null;

		/**
		 * This will only be set if a valid user session exists.
		 * @type {Boolean}
		 */
		get unlocked()
		{
			return this.#unlocked;
		}

		set unlocked(_unlocked)
		{
			if (typeof(_unlocked) !== 'boolean' && typeof(_unlocked) !== 'number' && _unlocked !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a boolean, got', _unlocked);
			this.#unlocked = _unlocked ? true:false;

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

