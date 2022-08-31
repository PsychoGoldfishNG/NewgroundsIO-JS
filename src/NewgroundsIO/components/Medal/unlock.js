(()=>{
/** Start NewgroundsIO.components.Medal.unlock **/

	class unlock extends NewgroundsIO.BaseComponent {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {Number} props.id The numeric ID of the medal to unlock.
		 */
		constructor(props)
		{
			super();
			let _this = this;

			this.__object = "Medal.unlock";
			this.__isSecure = true;
			this.__requireSession = true;
			["id"].forEach(prop => {
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
		 * The numeric ID of the medal to unlock.
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

	}

/** End Class NewgroundsIO.components.Medal.unlock **/
if (typeof(NewgroundsIO.components.Medal) === 'undefined') NewgroundsIO.components.Medal = {};
NewgroundsIO.components.Medal.unlock = unlock;

})();

