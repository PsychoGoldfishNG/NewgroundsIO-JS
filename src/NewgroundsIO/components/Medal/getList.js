(()=>{

	/**
	 * Used to call the Medal.getList component.
	 */
	class getList extends NewgroundsIO.BaseComponent {

		/**
		 * Constructor
		 */
		constructor()
		{
			super();

			this.__object = "Medal.getList";
		}

	}

	// Move class to namespace

	/**
	 * NewgroundsIO Medal Components Namespace
	 * @namespace
	 */
	if (typeof(NewgroundsIO.components.Medal) === 'undefined') NewgroundsIO.components.Medal = {};
	NewgroundsIO.components.Medal.getList = getList;

})();

