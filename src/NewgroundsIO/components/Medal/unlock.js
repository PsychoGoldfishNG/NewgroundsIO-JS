(()=>{
/** Start Class NewgroundsIO.components.Medal.unlock **/

	/**
	 * Used to call the Medal.unlock component.
	 */
	class unlock extends NewgroundsIO.BaseComponent {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {Number} props.id The numeric ID of the medal to unlock.
		 */
		constructor(props)
		{
			super();

			this.__object = "Medal.unlock";
			this._id = null;
			this.__required = ["id"];
			this.__isSecure = true;
			this.__requireSession = true;
			this.__properties = this.__properties.concat(["id"]);
			if (typeof(props) === 'object') {
				for(var i=0; i<this.__properties.length; i++) {
					if (typeof(props[this.__properties[i]]) !== 'undefined') this[this.__properties[i]] = props[this.__properties[i]];
				}
			}
		}

		/**
		 * The numeric ID of the medal to unlock.
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

	}

/** End Class NewgroundsIO.components.Medal.unlock **/
if (typeof(NewgroundsIO.components.Medal) === 'undefined') NewgroundsIO.components.Medal = {};
NewgroundsIO.components.Medal.unlock = unlock;

})();

