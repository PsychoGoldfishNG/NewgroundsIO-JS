(()=>{
/** Start Class NewgroundsIO.components.CloudSave.loadSlot **/

	/**
	 * Used to call the CloudSave.loadSlot component.
	 */
	class loadSlot extends NewgroundsIO.BaseComponent {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {Number} props.id The slot number.
		 */
		constructor(props)
		{
			super();

			this.__object = "CloudSave.loadSlot";
			this._id = null;
			this.__required = ["id"];
			this.__requireSession = true;
			this.__properties = this.__properties.concat(["id"]);
			if (typeof(props) === 'object') {
				for(var i=0; i<this.__properties.length; i++) {
					if (typeof(props[this.__properties[i]]) !== 'undefined') this[this.__properties[i]] = props[this.__properties[i]];
				}
			}
		}

		/**
		 * The slot number.
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

/** End Class NewgroundsIO.components.CloudSave.loadSlot **/
if (typeof(NewgroundsIO.components.CloudSave) === 'undefined') NewgroundsIO.components.CloudSave = {};
NewgroundsIO.components.CloudSave.loadSlot = loadSlot;

})();

