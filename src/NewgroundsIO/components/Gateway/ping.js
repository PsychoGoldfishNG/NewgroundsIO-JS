(()=>{
/** Start Class NewgroundsIO.components.Gateway.ping **/

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

/** End Class NewgroundsIO.components.Gateway.ping **/
if (typeof(NewgroundsIO.components.Gateway) === 'undefined') NewgroundsIO.components.Gateway = {};
NewgroundsIO.components.Gateway.ping = ping;

})();

