(()=>{

	/**
	 * Used to call the ScoreBoard.getBoards component.
	 */
	class getBoards extends NewgroundsIO.BaseComponent {

		/**
		 * Constructor
		 */
		constructor()
		{
			super();

			this.__object = "ScoreBoard.getBoards";
		}

	}

	// Move class to namespace
	if (typeof(NewgroundsIO.components.ScoreBoard) === 'undefined') NewgroundsIO.components.ScoreBoard = {};
	NewgroundsIO.components.ScoreBoard.getBoards = getBoards;

})();

