(()=>{

	/**
	 * Used to call the App.endSession component.
	 */
	class endSession extends NewgroundsIO.BaseComponent {

		/**
		 * Constructor
		 */
		constructor()
		{
			super();

			this.__object = "App.endSession";
			this.__requireSession = true;
		}

	}

	// Move class to namespace

	/**
	 * NewgroundsIO App Components Namespace
	 * @namespace
	 */
	if (typeof(NewgroundsIO.components.App) === 'undefined') NewgroundsIO.components.App = {};
	NewgroundsIO.components.App.endSession = endSession;

})();

