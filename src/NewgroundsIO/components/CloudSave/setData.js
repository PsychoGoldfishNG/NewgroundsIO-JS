(()=>{
/** Start NewgroundsIO.components.CloudSave.setData **/

	class setData extends NewgroundsIO.BaseComponent {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {Number} props.id The slot number.
		 * @param {String} props.data The data you want to save.
		 */
		constructor(props)
		{
			super();

			this.__object = "CloudSave.setData";
			this._id = null;
			this._data = null;
			this.__required = ["id","data"];
			this.__properties = this.__properties.concat(["id","data"]);
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

		/**
		 * The data you want to save.
		 * @type {String}
		 */
		get data()
		{
			return this._data;
		}

		set data(_data)
		{
			if (typeof(_data) !== 'string' && _data !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _data);
			this._data = String(_data);

		}

	}

/** End Class NewgroundsIO.components.CloudSave.setData **/
if (typeof(NewgroundsIO.components.CloudSave) === 'undefined') NewgroundsIO.components.CloudSave = {};
NewgroundsIO.components.CloudSave.setData = setData;

})();

