(()=>{

	/**
	 * Used to call the Gateway.getDatetime component.
	 */
	class getDatetime extends NewgroundsIO.BaseComponent {

		/**
		 * Constructor
		 */
		constructor()
		{
			super();

			this.__object = "Gateway.getDatetime";
		}

	}

	// Move class to namespace

	/**
	 * NewgroundsIO Gateway Components Namespace
	 * @namespace
	 */
	if (typeof(NewgroundsIO.components.Gateway) === 'undefined') NewgroundsIO.components.Gateway = {};
	NewgroundsIO.components.Gateway.getDatetime = getDatetime;

})();

