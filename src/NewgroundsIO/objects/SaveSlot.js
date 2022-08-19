(()=>{

	/**
 * Contains information about a CloudSave slot.
	 */
	class SaveSlot extends NewgroundsIO.BaseObject {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 */
		constructor(props)
		{
				super();

				this.__object = 'SaveSlot';

				this._id = null;
				this._size = null;
				this._datetime = null;
				this._timestamp = null;
				this._url = null;
				this.__properties = this.__properties.concat(["id","size","datetime","timestamp","url"]);
				if (props && typeof(props) === 'object') {
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
		 * The size of the save data in bytes.
		 * @type {Number}
		 */
		get size()
		{
			return this._size;
		}

		set size(_size)
		{
			if (typeof(_size) !== 'number' && _size !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a number, got', _size);
			else if (!Number.isInteger(_size) && _size !== null) console.warn('NewgroundsIO Type Mismatch: Value should be an integer, got a float');
			this._size = Number(_size);
			if (isNaN(this._size)) this._size = null;

		}

		/**
		 * A date and time (in ISO 8601 format) representing when this slot was last saved.
		 * @type {String}
		 */
		get datetime()
		{
			return this._datetime;
		}

		set datetime(_datetime)
		{
			if (typeof(_datetime) !== 'string' && _datetime !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _datetime);
			this._datetime = String(_datetime);

		}

		/**
		 * A unix timestamp representing when this slot was last saved.
		 * @type {Number}
		 */
		get timestamp()
		{
			return this._timestamp;
		}

		set timestamp(_timestamp)
		{
			if (typeof(_timestamp) !== 'number' && _timestamp !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a number, got', _timestamp);
			else if (!Number.isInteger(_timestamp) && _timestamp !== null) console.warn('NewgroundsIO Type Mismatch: Value should be an integer, got a float');
			this._timestamp = Number(_timestamp);
			if (isNaN(this._timestamp)) this._timestamp = null;

		}

		/**
		 * The URL containing the actual save data for this slot, or null if this slot has no data.
		 * @type {String}
		 */
		get url()
		{
			return this._url;
		}

		set url(_url)
		{
			if (typeof(_url) !== 'string' && _url !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _url);
			this._url = String(_url);

		}

	

		/**
		 * This will be true if this save slot has any saved data.
		 */
		get hasData() {
			return this.url !== null;
		}

		/**
		 * Loads the save file for this slot then passes its contents to a callback function. 
		 * @param {function} callback The callback function.
		 * @param {object} thisArg An optional object to use as 'this' in your callback function.
		 */
		getData(callback, thisArg)
		{
			if (typeof(callback) !== 'function') {
				debug.error("NewgroundsIO - Missing required callback function");
				return;
			}

			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function() {
				if (thisArg) callback.call(thisArg,xhr.responseText);
				else callback(xhr.responseText);
			}
			xhr.open('GET', this.url, true);
			xhr.send();
		}

		/**
		 * Unlocks this medal, then fires a callback.
		 * @param {string} data The data, in a serialized string, you want to save.
		 * @param {function} callback An optional function to call when the data is saved on the server.
		 * @param {object} thisArg An optional object to use as 'this' in your callback function.
		 */
		setData(data, callback, thisArg)
		{
			if (!this.__ngioCore) {
				console.error("NewgroundsIO - Can not save data without attaching a NewgroundsIO.Core instance.");
				return;
			}

			var component = this.__ngioCore.getComponent('CloudSave.setData', {id:this.id, data:data});
			this.__ngioCore.executeComponent(component, callback, thisArg);
		}
			}

	// Move class to namespace
	NewgroundsIO.objects.SaveSlot = SaveSlot;

})();
