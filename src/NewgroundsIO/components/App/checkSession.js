(()=>{

	/**
	 * Used to call the App.checkSession component.
	 */
	class checkSession extends NewgroundsIO.BaseComponent {

		/**
		 * Constructor
		 */
		constructor()
		{
			super();

			this.__object = "App.checkSession";
			this.__requireSession = true;
		}

	}

	// Move class to namespace
	if (typeof(NewgroundsIO.components.App) === 'undefined') NewgroundsIO.components.App = {};
	NewgroundsIO.components.App.checkSession = checkSession;

})();

