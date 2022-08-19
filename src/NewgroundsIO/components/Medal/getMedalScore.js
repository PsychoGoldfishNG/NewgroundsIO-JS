(()=>{

	/**
	 * Used to call the Medal.getMedalScore component.
	 */
	class getMedalScore extends NewgroundsIO.BaseComponent {

		/**
		 * Constructor
		 */
		constructor()
		{
			super();

			this.__object = "Medal.getMedalScore";
			this.__requireSession = true;
		}

	}

	// Move class to namespace

	/**
	 * NewgroundsIO Medal Components Namespace
	 * @namespace
	 */
	if (typeof(NewgroundsIO.components.Medal) === 'undefined') NewgroundsIO.components.Medal = {};
	NewgroundsIO.components.Medal.getMedalScore = getMedalScore;

})();

