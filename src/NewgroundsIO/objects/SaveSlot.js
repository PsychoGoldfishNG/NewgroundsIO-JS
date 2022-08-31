(()=>{
/** Start NewgroundsIO.objects.SaveSlot **/

	class SaveSlot extends NewgroundsIO.BaseObject {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {Number} props.id The slot number.
		 * @param {Number} props.size The size of the save data in bytes.
		 * @param {String} props.datetime A date and time (in ISO 8601 format) representing when this slot was last saved.
		 * @param {Number} props.timestamp A unix timestamp representing when this slot was last saved.
		 * @param {String} props.url The URL containing the actual save data for this slot, or null if this slot has no data.
		 */
		constructor(props)
		{
			super();
			let _this = this;

			this.__object = "SaveSlot";
			["id","size","datetime","timestamp","url"].forEach(prop => {
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
		 * The slot number.
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
		#size = null;

		/**
		 * The size of the save data in bytes.
		 * @type {Number}
		 */
		get size()
		{
			return this.#size;
		}

		set size(_size)
		{
			if (typeof(_size) !== 'number' && _size !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a number, got', _size);
			else if (!Number.isInteger(_size) && _size !== null) console.warn('NewgroundsIO Type Mismatch: Value should be an integer, got a float');
			this.#size = Number(_size);
			if (isNaN(this.#size)) this.#size = null;

		}

		/**
		 * @private
		 */
		#datetime = null;

		/**
		 * A date and time (in ISO 8601 format) representing when this slot was last saved.
		 * @type {String}
		 */
		get datetime()
		{
			return this.#datetime;
		}

		set datetime(_datetime)
		{
			if (typeof(_datetime) !== 'string' && _datetime !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _datetime);
			this.#datetime = String(_datetime);

		}

		/**
		 * @private
		 */
		#timestamp = null;

		/**
		 * A unix timestamp representing when this slot was last saved.
		 * @type {Number}
		 */
		get timestamp()
		{
			return this.#timestamp;
		}

		set timestamp(_timestamp)
		{
			if (typeof(_timestamp) !== 'number' && _timestamp !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a number, got', _timestamp);
			else if (!Number.isInteger(_timestamp) && _timestamp !== null) console.warn('NewgroundsIO Type Mismatch: Value should be an integer, got a float');
			this.#timestamp = Number(_timestamp);
			if (isNaN(this.#timestamp)) this.#timestamp = null;

		}

		/**
		 * @private
		 */
		#url = null;

		/**
		 * The URL containing the actual save data for this slot, or null if this slot has no data.
		 * @type {String}
		 */
		get url()
		{
			return this.#url;
		}

		set url(_url)
		{
			if (typeof(_url) !== 'string' && _url !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _url);
			this.#url = String(_url);

		}

	
		/**
		 * @callback getDataCallback
		 * @param {string} data The data loaded from the server
		 */

		/**
		 * @callback responseCallback
		 * @param {NewgroundsIO.objects.Response} serverResponse
		 */


		/**
		 * This will be true if this save slot has any saved data.
		 */
		get hasData() {
			return this.url !== null;
		}

		/**
		 * Loads the save file for this slot then passes its contents to a callback function. 
		 * @param {getDataCallback} callback A function to call when your data is loaded.
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
				if (xhr.readyState==4) {
					if (thisArg) callback.call(thisArg,xhr.responseText);
					else callback(xhr.responseText);
				}
			}
			xhr.open('GET', this.url, true);
			xhr.send();
		}

		/**
		 * Unlocks this medal, then fires a callback.
		 * @param {string} data The data, in a serialized string, you want to save.
		 * @param {responseCallback} callback An optional function to call when the data is saved on the server.
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

		/**
		 * Clears all data from this slot, then fires a callback
		 * @param {responseCallback} callback An optional function to call when the data is cleared from the server.
		 * @param {object} thisArg An optional object to use as 'this' in your callback function.
		 */
		clearData(callback, thisArg)
		{
			if (!this.__ngioCore) {
				console.error("NewgroundsIO - Can not clear data without attaching a NewgroundsIO.Core instance.");
				return;
			}
			this.#url = null;
			var component = this.__ngioCore.getComponent('CloudSave.clearSlot', {id:this.id});
			this.__ngioCore.executeComponent(component, callback, thisArg);
		}

		/**
		 * Gets the date this slot was last updated.
		 * @return {Date}
		 */
		getDate()
		{
			if (this.hasData) return new Date(this.datetime);
			return null;
		}
	}

/** End Class NewgroundsIO.objects.SaveSlot **/
if (typeof(NewgroundsIO.objects) === 'undefined') NewgroundsIO.objects = {};
NewgroundsIO.objects.SaveSlot = SaveSlot;

})();

