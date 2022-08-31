(()=>{
/** Start NewgroundsIO.objects.Execute **/

	class Execute extends NewgroundsIO.BaseObject {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {String} props.component The name of the component you want to call, ie 'App.connect'.
		 * @param {(Object|Array.<Object>)} props.parameters An object of parameters you want to pass to the component.
		 * @param {String} props.secure A an encrypted NewgroundsIO.objects.Execute object or array of NewgroundsIO.objects.Execute objects.
		 * @param {mixed} props.echo An optional value that will be returned, verbatim, in the NewgroundsIO.objects.Result object.
		 */
		constructor(props)
		{
			super();
			let _this = this;

			this.__object = "Execute";
			["component","parameters","secure"].forEach(prop => {
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
		#component = null;

		/**
		 * The name of the component you want to call, ie 'App.connect'.
		 * @type {String}
		 */
		get component()
		{
			return this.#component;
		}

		set component(_component)
		{
			if (typeof(_component) !== 'string' && _component !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _component);
			this.#component = String(_component);

		}

		/**
		 * @private
		 */
		#parameters = null;

		/**
		 * An object of parameters you want to pass to the component.
		 * @type {(Object|Array.<Object>)}
		 */
		get parameters()
		{
			return this.#parameters;
		}

		set parameters(_parameters)
		{
			if (Array.isArray(_parameters)) {
				let newArr = [];
				_parameters.forEach(function(val,index) {
					if (typeof(val) !== 'object' && val !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a object, got', val);
					newArr[index] = val

				});
				this.#parameters = newArr;
				return;
			}

			if (typeof(_parameters) !== 'object' && _parameters !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a object, got', _parameters);
			this.#parameters = _parameters

		}

		/**
		 * @private
		 */
		#secure = null;

		/**
		 * A an encrypted NewgroundsIO.objects.Execute object or array of NewgroundsIO.objects.Execute objects.
		 * @type {String}
		 */
		get secure()
		{
			return this.#secure;
		}

		set secure(_secure)
		{
			if (typeof(_secure) !== 'string' && _secure !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _secure);
			this.#secure = String(_secure);

		}



		/**
		 * @private
		 */
		#componentObject = null;

		/**
		 * Set a component object to execute
		 * @param {NewgroundsIO.BaseComponent} component Any NGIO component object
		 */
		setComponent(component)
		{
			if (!(component instanceof NewgroundsIO.BaseComponent))
				console.error('NewgroundsIO Error: Expecting NewgroundsIO component, got '+typeof(component));

			this.#componentObject = component;

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
			if (this.#componentObject) {
				if (this.#componentObject.__requireSession && !this.__ngioCore.session.isActive()) {
					console.warn('NewgroundsIO Warning: '+this.component+' can only be used with a valid user session.');
					this.__ngioCore.session.logProblems();
					return false;
				}

				return (this.#componentObject instanceof NewgroundsIO.BaseComponent) && this.#componentObject.isValid();
			}

			return true;
		}

		/**
		 * Override the default toJSON handler and use encryption on components that require it
		 * @return {object} A native JS object that can be converted to a JSON string
		 */
		toJSON()
		{
			if (this.#componentObject && this.#componentObject.__isSecure) return this.toSecureJSON();
			return super.toJSON();
		}

	}

/** End Class NewgroundsIO.objects.Execute **/
if (typeof(NewgroundsIO.objects) === 'undefined') NewgroundsIO.objects = {};
NewgroundsIO.objects.Execute = Execute;

})();

