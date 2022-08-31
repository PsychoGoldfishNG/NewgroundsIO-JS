(()=>{
/** Start NewgroundsIO.components.App.logView **/

	class logView extends NewgroundsIO.BaseComponent {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 * @param {String} props.host The domain hosting your app. Examples: "www.somesite.com", "localHost"
		 */
		constructor(props)
		{
			super();
			let _this = this;

			this.__object = "App.logView";
			["host"].forEach(prop => {
			   if (_this.__properties.indexOf(prop) < 0) _this.__properties.push(prop);
			});
			if (props && typeof(props) === 'object') {
				for(var i=0; i<this.__properties.length; i++) {
					if (typeof(props[this.__properties[i]]) !== 'undefined') this[this.__properties[i]] = props[this.__properties[i]];
				}
			}
		}

	}

/** End Class NewgroundsIO.components.App.logView **/
if (typeof(NewgroundsIO.components.App) === 'undefined') NewgroundsIO.components.App = {};
NewgroundsIO.components.App.logView = logView;

})();

