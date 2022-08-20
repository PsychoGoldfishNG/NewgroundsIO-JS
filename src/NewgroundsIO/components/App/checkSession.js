(()=>{
/** Start Class NewgroundsIO.components.App.checkSession **/

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

/** End Class NewgroundsIO.components.App.checkSession **/
if (typeof(NewgroundsIO.components.App) === 'undefined') NewgroundsIO.components.App = {};
NewgroundsIO.components.App.checkSession = checkSession;

})();

