(()=>{
/** Start Class NewgroundsIO.objects.Execute **/

	/**
 * Contains all the information needed to execute an API component.
	 */
	class Execute extends NewgroundsIO.BaseObject {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 */
		constructor(props)
		{
				super();

				this.__object = 'Execute';

				this._component = null;
				this._parameters = null;
				this._secure = null;
				this.__properties = this.__properties.concat(["component","parameters","secure"]);
				if (props && typeof(props) === 'object') {
					for(var i=0; i<this.__properties.length; i++) {
						if (typeof(props[this.__properties[i]]) !== 'undefined') this[this.__properties[i]] = props[this.__properties[i]];
					}
				}

			this.__required = ["component","secure"];

			this.__componentObject = null;
		}

		/**
		 * The name of the component you want to call, ie 'App.connect'.
		 * @type {String}
		 */
		get component()
		{
			return this._component;
		}

		set component(_component)
		{
			if (typeof(_component) !== 'string' && _component !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _component);
			this._component = String(_component);

		}

		/**
		 * An object of parameters you want to pass to the component.
		 * @type {(Object|Array.<Object>)}
		 */
		get parameters()
		{
			return this._parameters;
		}

		set parameters(_parameters)
		{
			if (Array.isArray(_parameters)) {
				let newArr = [];
				_parameters.forEach(function(val,index) {
					if (typeof(val) !== 'object' && val !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a object, got', val);
					newArr[index] = val

				});
				this._parameters = newArr;
				return;
			}

			if (typeof(_parameters) !== 'object' && _parameters !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a object, got', _parameters);
			this._parameters = _parameters

		}

		/**
		 * A an encrypted NewgroundsIO.objects.Execute object or array of NewgroundsIO.objects.Execute objects.
		 * @type {String}
		 */
		get secure()
		{
			return this._secure;
		}

		set secure(_secure)
		{
			if (typeof(_secure) !== 'string' && _secure !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _secure);
			this._secure = String(_secure);

		}

		/**
		 * An optional value that will be returned, verbatim, in the NewgroundsIO.objects.Result object.
		 * @type {mixed}
		 */
		get echo()
		{
			return this._echo;
		}

		set echo(_echo)
		{
			this._echo = _echo; // mixed

		}

		/**
		 * Set a component object to execute
		 * @param {NewgroundsIO.BaseComponent} component Any NGIO component object
		 */
		setComponent(component)
		{
			if (!(component instanceof NewgroundsIO.BaseComponent))
				console.error('NewgroundsIO Error: Expecting NewgroundsIO component, got '+typeof(component));

			this.__componentObject = component;

			// set the string name of the component;
			this.component = component.__object;
			this.parameters = component.toJSON();
		}

		/**
		 * Validate this object (overrides default valdator)
		 * @return {Boolean}
		 */
		isValid()
		{
			// must have a component set
			if (!this.component) {
				console.error('NewgroundsIO Error: Missing required component!');
			}

			// must be linked to a core NewgroundsIO instance
			if (!this.__ngioCore) {
				console.error('NewgroundsIO Error: Must call setCore() before validating!');
				return false;
			}

			// SHOULD have an actual component object. Validate that as well, if it exists
			if (this.__componentObject) {
				if (this.__componentObject.__requireSession && !this.__ngioCore.session.isActive()) {
					console.warn('NewgroundsIO Warning: '+this.component+' can only be used with a valid user session.');
					this.__ngioCore.session.logProblems();
					return false;
				}

				return (this.__componentObject instanceof NewgroundsIO.BaseComponent) && this.__componentObject.isValid();
			}

			return true;
		}

		/**
		 * Override the default toJSON handler and use encryption on components that require it
		 * @return {object} A native JS object that can be converted to a JSON string
		 */
		toJSON()
		{
			if (this.__componentObject && this.__componentObject.__isSecure) return this.toSecureJSON();
			return super.toJSON();
		}

	}

/** End Class NewgroundsIO.objects.Execute **/
NewgroundsIO.objects.Execute = Execute;

})();

