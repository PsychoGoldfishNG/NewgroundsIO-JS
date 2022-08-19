(()=>{

	/**
	 * Used to call the Gateway.ping component.
	 */
	class ping extends NewgroundsIO.BaseComponent {

		/**
		 * Constructor
		 */
		constructor()
		{
			super();

			this.__object = "Gateway.ping";
		}

	}

	// Move class to namespace

	/**
	 * NewgroundsIO Gateway Components Namespace
	 * @namespace
	 */
	if (typeof(NewgroundsIO.components.Gateway) === 'undefined') NewgroundsIO.components.Gateway = {};
	NewgroundsIO.components.Gateway.ping = ping;

})();

