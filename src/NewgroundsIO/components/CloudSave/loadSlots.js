(()=>{

	/**
	 * Used to call the CloudSave.loadSlots component.
	 */
	class loadSlots extends NewgroundsIO.BaseComponent {

		/**
		 * Constructor
		 */
		constructor()
		{
			super();

			this.__object = "CloudSave.loadSlots";
			this.__requireSession = true;
		}

	}

	// Move class to namespace

	/**
	 * NewgroundsIO CloudSave Components Namespace
	 * @namespace
	 */
	if (typeof(NewgroundsIO.components.CloudSave) === 'undefined') NewgroundsIO.components.CloudSave = {};
	NewgroundsIO.components.CloudSave.loadSlots = loadSlots;

})();

