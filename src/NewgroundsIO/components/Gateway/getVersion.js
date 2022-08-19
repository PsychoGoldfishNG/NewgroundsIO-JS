(()=>{

	/**
	 * Used to call the Gateway.getVersion component.
	 */
	class getVersion extends NewgroundsIO.BaseComponent {

		/**
		 * Constructor
		 */
		constructor()
		{
			super();

			this.__object = "Gateway.getVersion";
		}

	}

	// Move class to namespace
	if (typeof(NewgroundsIO.components.Gateway) === 'undefined') NewgroundsIO.components.Gateway = {};
	NewgroundsIO.components.Gateway.getVersion = getVersion;

})();

