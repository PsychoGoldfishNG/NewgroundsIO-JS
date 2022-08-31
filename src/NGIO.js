/** Start Class NGIO **/

/**
 * NGIO singleton wrapper for NewgroundsIO Library.
 */
class NGIO
{

	/* ================================ Constants ================================= */

	// preloading statuses

	/**
	 * @type {string}
	 */
	static get STATUS_INITIALIZED()				{ return "initialized"; }

	/**
	 * @type {string}
	 */
	static get STATUS_CHECKING_LOCAL_VERSION()	{ return "checking-local-version"; }
	
	/**
	 * @type {string}
	 */
	static get STATUS_LOCAL_VERSION_CHECKED()	{ return "local-version-checked"; }
	
	/**
	 * @type {string}
	 */
	static get STATUS_PRELOADING_ITEMS()		{ return "preloading-items"; }
	
	/**
	 * @type {string}
	 */
	static get STATUS_ITEMS_PRELOADED()			{ return "items-preloaded"; }
	
	/**
	 * @type {string}
	 */
	static get STATUS_READY()					{ return "ready"; }


	// aliases from SessionState

	
	/**
	 * @type {string}
	 */
	static get STATUS_SESSION_UNINITIALIZED()	{ return NewgroundsIO.SessionState.SESSION_UNINITIALIZED; }
	
	/**
	 * @type {string}
	 */
	static get STATUS_WAITING_FOR_SERVER()		{ return NewgroundsIO.SessionState.WAITING_FOR_SERVER; }
	
	/**
	 * @type {string}
	 */
	static get STATUS_LOGIN_REQUIRED()			{ return NewgroundsIO.SessionState.LOGIN_REQUIRED; }
	
	/**
	 * @type {string}
	 */
	static get STATUS_WAITING_FOR_USER()		{ return NewgroundsIO.SessionState.WAITING_FOR_USER; }
	
	/**
	 * @type {string}
	 */
	static get STATUS_LOGIN_CANCELLED()			{ return NewgroundsIO.SessionState.LOGIN_CANCELLED; }
	
	/**
	 * @type {string}
	 */
	static get STATUS_LOGIN_SUCCESSFUL()		{ return NewgroundsIO.SessionState.LOGIN_SUCCESSFUL; }
	
	/**
	 * @type {string}
	 */
	static get STATUS_LOGIN_FAILED()			{ return NewgroundsIO.SessionState.LOGIN_FAILED; }
	
	/**
	 * @type {string}
	 */
	static get STATUS_USER_LOGGED_OUT()			{ return NewgroundsIO.SessionState.USER_LOGGED_OUT; }
	
	/**
	 * @type {string}
	 */
	static get STATUS_SERVER_UNAVAILABLE()		{ return NewgroundsIO.SessionState.SERVER_UNAVAILABLE; }
	
	/**
	 * @type {string}
	 */
	static get STATUS_EXCEEDED_MAX_ATTEMPTS()	{ return NewgroundsIO.SessionState.EXCEEDED_MAX_ATTEMPTS; }

	/**
	 * Will be true if the current connection status is one requiring a 'please wait' message
	 * @type {boolean}
	 */
	static get isWaitingStatus() {

		return NewgroundsIO.SessionState.SESSION_WAITING.indexOf(this.#lastConnectionStatus) >= 0 || [
			this.STATUS_PRELOADING_ITEMS,
			this.LOCAL_VERSION_CHECKED,
			this.STATUS_CHECKING_LOCAL_VERSION
		].indexOf(this.#lastConnectionStatus) >= 0;
	}

	
	// scoreboard periods

	/**
	 * @type {string}
	 */
	static get PERIOD_TODAY()			{ return "D"; }
	
	/**
	 * @type {string}
	 */
	static get PERIOD_CURRENT_WEEK()	{ return "W"; }
	
	/**
	 * @type {string}
	 */
	static get PERIOD_CURRENT_MONTH()	{ return "M"; }
	
	/**
	 * @type {string}
	 */
	static get PERIOD_CURRENT_YEAR()	{ return "Y"; }
	
	/**
	 * @type {string}
	 */
	static get PERIOD_ALL_TIME()		{ return "A"; }

	/**
	 * @type {Array.<string>}
	 */
	static get PERIODS() { return [NGIO.PERIOD_TODAY, NGIO.PERIOD_CURRENT_WEEK, NGIO.PERIOD_CURRENT_MONTH, NGIO.PERIOD_CURRENT_YEAR, NGIO.PERIOD_ALL_TIME]; }


	/* ============================= Public Properties ============================ */

	/**
	 * A reference to the NewgroundsIO.Core instance created in Init().
	 * @type {NewgroundsIO.Core}
	 */
	static get ngioCore() { return this.#ngioCore; }
	static #ngioCore = null;

	/*
	 * The user's overall Newgrounds medal score
	 * @type {number}
	 */
	static get medalScore() { return this.#medalScore; }
	static #medalScore = -1;

	/**
	 * An array of preloaded medals
	 * @type {Array.<NewgroundsIO.objects.Medal>}
	 */
	static get medals() { return this.#medals; }
	static #medals = null;

	/**
	 * An array of preloaded scoreBoards
	 * @type {Array.<NewgroundsIO.objects.ScoreBoard>}
	 */
	static get scoreBoards() { return this.#scoreBoards; }
	static #scoreBoards = null;

	/**
	 * An array of preloaded saveSlots
	 * @type {Array.<NewgroundsIO.objects.SaveSlot>}
	 */
	static get saveSlots() { return this.#saveSlots; }
	static #saveSlots = null;

	/**
	 * The last time a component or queue was executed
	 * @type {Date}
	 */
	static get lastExecution() { return this.#lastExecution; }
	static #lastExecution = new Date();

	/**
	 * Contains the last connection status. Value will be one of the STATUS_XXXXX constants.
	 * @type {string}
	 */
	static get lastConnectionStatus() { return this.#lastConnectionStatus; }
	static #lastConnectionStatus = new Date();

	/**
	 * Will be null unless there was an error in our session.
	 * @type {NewgroundsIO.objects.Error}
	 */
	static get sessionError() { return this.#sessionError; }
	static #sessionError = null;

	/**
	 * Will be set to false if the local copy of the game is being hosted illegally.
	 * @type {boolean}
	 */
	static get legalHost() { return this.#legalHost; }
	static #legalHost = true;

	/**
	 * Will be set to true if this is an out-of-date copy of the game.
	 * @type {boolean}
	 */
	static get isDeprecated() { return this.#isDeprecated; }
	static #isDeprecated = true;

	/**
	 * This is the version number(string) of the newest available copy of the game.
	 * @type {boolean}
	 */
	static get newestVersion() { return this.#newestVersion; }
	static #newestVersion = true;

	/**
	 * Will be true if the user opened the login page via OpenLoginPage().
	 * @type {boolean}
	 */
	static get loginPageOpen() { return this.#loginPageOpen; }
	static #loginPageOpen = false;

	/**
	 * The current version of the Newgrounds.io gateway.
	 * @type {string}
	 */
	static get gatewayVersion() { return this.#gatewayVersion; }
	static #gatewayVersion = true;

	/**
	 * Stores the last medal that was unlocked.
	 * @type {NewgroundsIO.objects.Medal}
	 */
	static get lastMedalUnlocked() { return this.#lastMedalUnlocked; }
	static #lastMedalUnlocked = true;

	/**
	 * Stores the last scoreboard that was posted to.
	 * @type {NewgroundsIO.objects.ScoreBoard}
	 */
	static get lastBoardPosted() { return this.#lastBoardPosted; }
	static #lastBoardPosted = true;

	/**
	 * Stores the last score that was posted to.
	 * @type {NewgroundsIO.objects.Score}
	 */
	static get lastScorePosted() { return this.#lastScorePosted; }
	static #lastScorePosted = true;

	/**
	 * Stores the last scores that were loaded.
	 * @type {NewgroundsIO.results.ScoreBoard.getScores}
	 */
	static get lastGetScoresResult() { return this.#lastGetScoresResult; }
	static #lastGetScoresResult = true;

	/**
	 * Stores the last saveSlot that had data loaded.
	 * @type {NewgroundsIO.objects.SaveSlot}
	 */
	static get lastSaveSlotLoaded() { return this.#lastSaveSlotLoaded; }
	static #lastSaveSlotLoaded = true;

	/**
	 * Stores the last saveSlot that had data saved.
	 * @type {NewgroundsIO.objects.SaveSlot}
	 */
	static get lastSaveSlotSaved() { return this.#lastSaveSlotSaved; }
	static #lastSaveSlotSaved = true;

	/**
	 * Stores the last DateTime that was loaded from the API.
	 * @type {string}
	 */
	static get lastDateTime() { return this.#lastDateTime; }
	static #lastDateTime = "0000-00-00";

	/**
	 * Stores the last event that was logged.
	 * @type {string}
	 */
	static get lastLoggedEvent() { return this.#lastLoggedEvent; }
	static #lastLoggedEvent = null;

	/**
	 * Stores the last unix timestamp that was loaded API.
	 * @type {number}
	 */
	static get lastTimeStamp() { return this.#lastTimeStamp; }
	static #lastTimeStamp = 0;

	/**
	 * Stores wether the last server ping succeeded.
	 * @type {boolean}
	 */
	static get lastPingSuccess() { return this.#lastPingSuccess; }
	static #lastPingSuccess = true;

	/**
	 * Will be true if we've called Init().
	 * @type {boolean}
	 */
	static get isInitialized() { return this.ngioCore !== null; }

	/**
	 * Contains all information about the current user session.
	 * @type {NewgroundsIO.objects.Session}
	 */
	static get session() { return this.isInitialized ? this.ngioCore.session : null; }

	/**
	 * Contains user information if the user is logged in. Otherwise null.
	 * @type {NewgroundsIO.objects.User}
	 */
	static get user() { return this.session === null ? null : this.ngioCore.session.user; }

	/**
	 * Returns true if we currently have a valid session ID.
	 * @type {boolean}
	 */
	static get hasSession() { return this.session !== null; }

	/**
	 * Returns true if we currently have a valid session ID.
	 * @type {boolean}
	 */
	static get hasUser() { return this.user !== null; }

	/**
	 * Will be true if we've finished logging in and preloading data.
	 * @type {boolean}
	 */
	static get isReady() { return this.#lastConnectionStatus === this.STATUS_READY; }

	/**
	 * The version number passed in Init()'s options
	 * @type {string}
	 */
	static get version() { return this.#version; }
	static #version = "0.0.0";

	/**
	 * Will be tue if using debugMode via Init()
	 * @type {boolean}
	 */
	static get debugMode() { return this.#debugMode; }
	static #debugMode = false;

	/* ============================= Private Properties ============================ */

	// Preloading flags
	static #preloadFlags = {
		autoLogNewView: false,
		preloadMedals: false,
		preloadScoreBoards: false,
		preloadSaveSlots: false,
	};

	// Connection states
	static #sessionReady = false;
	static #skipLogin = false;
	static #localVersionChecked = false;
	static #checkingConnectionStatus = false;

	/* ============================= Misc Public Methods ============================ */

	/**
	 * Initializes the NGIO wrapper. You must call this BEFORE using any other methods!
	 * @param {string} appID The App ID from your Newgrounds Project's "API Tools" page.
	 * @param {string} aesKey The AES-128 encryption key from your Newgrounds Project's "API Tools" page.
	 * @param {object} options An object of options to set up the API wrapper.
	 * @param {boolean} options.debugMode Set to true to run in debug mode.
	 * @param {string} options.version A string in "X.X.X" format indicating the current version of this game.
	 * @param {boolean} options.checkHostLicense Set to true to check if the site hosting your game has been blocked.
	 * @param {boolean} options.preloadMedals Set to true to preload medals (will show if the player has any unlocked, and get their current medal score).
	 * @param {boolean} options.preloadeScoreBoards Set to true to preload Score Board information.
	 * @param {boolean} options.preloadeSaveSlots Set to true to preload Save Slot information.
	 * @param {boolean} options.autoLogNewView Set to true to automatcally log a new view to your stats.
	 */
	static init(appID, aesKey, options)
	{
		if (!this.isInitialized) {

			this.#ngioCore = new NewgroundsIO.Core(appID, aesKey);

			this.#ngioCore.addEventListener("serverResponse", function(e) {
				NGIO.#onServerResponse(e);
			});

			if (options && typeof(options) === "object") {

				if (typeof(options['version']) === 'string') this.#version = options['version'];

				let preloadFlags = [
					"debugMode",
					"checkHostLicense",
					"autoLogNewView",
					"preloadMedals",
					"preloadScoreBoards",
					"preloadSaveSlots"
				];

				for(let i=0; i<preloadFlags.length; i++) {
					if (typeof(options[preloadFlags[i]]) !== 'undefined') this.#preloadFlags[preloadFlags[i]] = options[preloadFlags[i]] ? true:false;
				}
			}

			this.#ngioCore.debug = this.debugMode;

			this.#lastConnectionStatus = this.STATUS_INITIALIZED;

			// auto-ping the server every 30 seconds once connected
			setTimeout(function() {
				NGIO.keepSessionAlive();
			}, 30000)
		}
	}

	/* ======================== Public Login/Session Methods ======================== */

	/**
	 * Call this if you want to skip logging the user in.
	 */
	static skipLogin()
	{
		if (!this.#sessionReady) this.#skipLogin = true;
	}

	/**
	 * Opens the Newgrounds login page in a new browser tab.
	 */
	static openLoginPage()
	{
		if (!this.#loginPageOpen) {
			this.#skipLogin = false;
			this.#sessionReady = false;
			this.#loginPageOpen = true;
			this.session.openLoginPage();
		} else {
			console.warn("loginPageOpen is true. Use CancelLogin to reset.");
		}
	}

	/**
	 * If the user opened the NG login page, you can call this to cancel the login attempt.
	 */
	static cancelLogin()
	{
		if (!this.session) {
			console.error("NGIO Error - Can't cancel non-existent session");
			return;
		}

		this.session.cancelLogin(NewgroundsIO.SessionState.SESSION_UNINITIALIZED);
		this.#resetConnectionStatus();
		this.skipLogin();
	}

	/**
	 * Logs the current use out of the game (locally and on the server) and resets the connection status.
	 */
	static logOut()
	{
		if (!this.session) {
			console.error("NGIO Error - Can't cancel non-existent session");
			return;
		}
		this.session.logOut(function() {
			this.#resetConnectionStatus();
			this.skipLogin();
		}, this);
	}


	/* ============================ Public Loader Methods =========================== */

	/**
	 * Loads "Your Website URL", as defined on your App Settings page, in a new browser tab.
	 */
	static loadAuthorUrl()
	{
		this.ngioCore.loadComponent(this.ngioCore.getComponent('Loader.loadAuthorUrl'));
	}

	/**
	 * Loads our "Official Version URL", as defined on your App Settings page, in a new browser tab.
	 */
	static loadOfficialUrl()
	{
		this.ngioCore.loadComponent(this.ngioCore.getComponent('Loader.loadOfficialUrl'));
	}

	/**
	 * Loads the Games page on Newgrounds in a new browser tab.
	 */
	static loadMoreGames()
	{
		this.ngioCore.loadComponent(this.ngioCore.getComponent('Loader.loadMoreGames'));
	}

	/**
	 * Loads the Newgrounds frontpage in a new browser tab.
	 */
	static loadNewgrounds()
	{
		this.ngioCore.loadComponent(this.ngioCore.getComponent('Loader.loadNewgrounds'));
	}

	/**
	 * Loads the Newgrounds frontpage in a new browser tab.
	 * @param {string} referralName The name of your custom referral.
	 */
	static loadReferral(referralName)
	{
		this.ngioCore.loadComponent(this.ngioCore.getComponent('Loader.loadReferral', {referral_name:referralName}));
	}


	/* ============================ Public Medal Methods ============================ */

	/**
	 * Gets a preloaded Medal object.
	 * @param {number} medalID The ID of the medal
	 */
	static getMedal(medalID)
	{
		if (this.medals === null) {
			console.error("NGIO Error: Can't use getMedal without setting preloadMedals option to true");
			return null;
		}
		for(let i=0; i<this.medals.length; i++)
		{
			if (this.medals[i].id === medalID) return this.medals[i];
		}
	}

	/**
	 * @callback unlockMedalCallback
	 * @param {NewgroundsIO.objects.Medal} medal
	 */

	/**
	 * Attempts to unlock a medal and returns the medal to an optional callback function when complete.
	 * @param {number} medalID The id of the medal you are unlocking.
	 * @param {unlockMedalCallback} callback A function to run when the medal has unlocked.
	 * @param {object} thisArg An optional object to use as 'this' in your callback function.
	 */
	static unlockMedal(medalID, callback, thisArg)
	{
		if (this.medals == null) {
			console.error("unlockMedal called without any preloaded medals.");
			if (typeof(callback) === 'function') thisArg ? callback.call(thisArg, null) : callback(null);
			return;
		}
		
		let medal = this.getMedal(medalID);

		if (medal == null) {
			console.error("Medal #"+medalID+" does not exist.");
			if (typeof(callback) === 'function') thisArg ? callback.call(thisArg, null) : callback(null);
			return;
		}

		medal.unlock(function() {
			if (typeof(callback) === 'function') thisArg ? callback.call(thisArg, this.lastMedalUnlocked) : callback(this.lastMedalUnlocked);
		}, this);
		
	}

	/* ======================== Public getScoreBoard Methods ======================== */

	/**
	 * Gets a preloaded ScoreBoard object.
	 * @param {number} scoreBoardID The ID of the score board
	 */
	static getScoreBoard(scoreBoardID)
	{
		if (this.scoreBoards === null) {
			console.error("NGIO Error: Can't use getScoreBoard without setting preloadScoreBoards option to true");
			return null;
		}
		for(let i=0; i<this.scoreBoards.length; i++)
		{
			if (this.scoreBoards[i].id === scoreBoardID) return this.scoreBoards[i];
		}
	}

	/**
	 * @callback postScoreCallback
	 * @param {NewgroundsIO.objects.ScoreBoard} scoreBoard
	 * @param {NewgroundsIO.objects.Score} score
	 */
	
	/**
	 * Posts a score and returns the score and scoreboard to an optional callback function when complete.
	 * @param {number} boardID The id of the scoreboard you are posting to.
	 * @param {number} value The integer value of your score.
	 * @param {string} tag An optional tag to attach to the score (use null for no tag).
	 * @param {postScoreCallback} callback A function to run when the score has posted.
	 * @param {object} thisArg An optional object to use as 'this' in your callback function.
	 */
	static postScore(boardID, value, tag, callback, thisArg)
	{

		// if not using a tag, 3rd and 4th params can be callback and thisArg
		if (typeof(tag) === "function") {
			thisArg = callback;
			callback = tag;
			tag = '';
		} else if (typeof(tag) === 'undefined') {
			tag = '';
		}

		if (this.scoreBoards == null) {
			console.error("NGIO Error - postScore called without any preloaded scoreboards.");
			if (typeof(callback) === "function") thisArg ? callback.call(thisArg, null, null) : callback(null, null);
			return;
		}
		var board = this.getScoreBoard(boardID);
		if (board == null) {
			console.error("NGIO Error - ScoreBoard #"+boardID+" does not exist.");
			if (typeof(callback) === "function") thisArg ? callback.call(thisArg, null, null) : callback(null, null);
			return;
		}

		board.postScore(value, tag, function() {
			if (typeof(callback) === "function") thisArg ? callback.call(thisArg, this.lastBoardPosted, this.lastScorePosted) : callback(this.lastBoardPosted, this.lastScorePosted);
		}, this);
		
	}

	/**
	 * @callback getScoresCallback
	 * @param {NewgroundsIO.objects.ScoreBoard} scoreBoard
	 * @param {NewgroundsIO.objects.Score} score
	 * @param {object} options
	 * @param {string} options.period
	 * @param {string} options.tag
	 * @param {boolean} options.social
	 * @param {Number} options.skip
	 * @param {Number} options.limit
	 */
	
	/**
	 * Gets the best scores for a board and returns the board, score list, period, tag and social bool to an optional callback.
	 * @param {number} boardID The id of the scoreboard you loading from.
	 * @param {object} options Any lookup options you want to use.
	 * @param {string} options.period The time period to get scores from. Will match one of the PERIOD_XXXX constants.
	 * @param {string} options.tag An optional tag to filter results by (use null for no tag).
	 * @param {boolean} options.social Set to true to only get scores from the user's friends.
	 * @param {Number} options.skip The number of scores to skip.
	 * @param {Number} options.limit The total number of scores to load.
	 * @param {getScoresCallback} callback A function to run when the scores have been loaded.
	 * @param {object} thisArg An optional object to use as 'this' in your callback function.
	 */
	static getScores(boardID, options, callback, thisArg)
	{
		let _options = {
			period: typeof(options['period']) === 'undefined' ? NGIO.PERIOD_TODAY : options['period'],
			tag: typeof(options['tag']) !== 'string' ? '' : options['tag'],
			social: typeof(options['social']) === 'undefined' ? false : options['social'] ? true:false,
			skip: typeof(options['skip']) !== 'number' ? 0 : options['skip'],
			limit: typeof(options['limit']) !== 'number' ? 10 : options['limit']
		};

		if (this.scoreBoards == null) {
			console.error("NGIO Error - getScores called without any preloaded scoreboards.");
			if (typeof(callback) === "function") thisArg ? callback.call(thisArg, null, null, _options) : callback(null, null, _options);
			return;
		}

		var board = this.getScoreBoard(boardID);

		if (board == null) {
			console.error("NGIO Error - ScoreBoard #"+boardID+" does not exist.");
			if (typeof(callback) === "function") thisArg ? callback.call(thisArg, null, null, _options) : callback(null, null, _options);
			return;
		}
		
		board.getScores(_options, function() {
			if (typeof(callback) === "function") thisArg ? callback.call(thisArg, board, this.lastGetScoresResult.scores, _options) : callback(board, this.lastGetScoresResult.scores, _options);
		}, this);

	}


	/* ======================== Public getSaveSlot Methods ======================== */

	/**
	 * Gets a preloaded SaveSlot object. (Use getSaveSlotData to get actual save file)
	 * @param {number} saveSlotID The desired slot number
	 */
	static getSaveSlot(saveSlotID)
	{
		if (this.saveSlots === null) {
			console.error("NGIO Error: Can't use getSaveSlot without setting preloadSaveSlots option to true");
			return null;
		}
		for(let i=0; i<this.saveSlots.length; i++)
		{
			if (this.saveSlots[i].id === saveSlotID) return this.saveSlots[i];
		}
	}

	/**
	 * Gets the number of non-empty save slots.
	 */
	static getTotalSaveSlots()
	{
		let total = 0;
		this.saveSlots.forEach(slot => {
			if (slot.hasData) total++;
		});
		return total;
	}

	/**
	 * @callback getSaveSlotDataCallback
	 * @param {string} data
	 */

	/**
	 * Loads the actual save file from a save slot, and passes the string result to a callback function.
	 * @param {number} slotID The slot number to load from
	 * @param {getSaveSlotDataCallback} callback A function to run when the file has been loaded
	 * @param {object} thisArg An optional object to use as 'this' in your callback function.
	 */
	static getSaveSlotData(slotID, callback, thisArg)
	{
		if (this.saveSlots === null) {
			console.error("getSaveSlotData data called without any preloaded save slots.");
			thisArg ? callback.call(thisArg, null) : callback(null);
		}

		let slot = this.getSaveSlot(slotID);
		this.#lastSaveSlotLoaded = slot;
		slot.getData(callback, thisArg);
	}

	/**
	 * @callback setSaveSlotDataCallback
	 * @param {NewgroundsIO.objects.SaveSlot} saveSlot
	 */

	/**
	 * Loads the actual save file from a save slot and returns the save slot to an optional callback function when complete.
	 * @param {number} slotID The slot number to save to.
	 * @param {string} data The (serialized) data you want to save.
	 * @param {setSaveSlotDataCallback} callback An optional function to run when the file finished saving.
	 * @param {object} thisArg An optional object to use as 'this' in your callback function.
	 */
	static setSaveSlotData(slotID, data, callback, thisArg)
	{
		if (saveSlots == null) {
			console.error("setSaveSlotData data called without any preloaded save slots.");
			if (typeof(callback) === 'function') thisArg ? callback(thisArg, null) : callback(null);
			return;
		}
		
		var slot = this.getSaveSlot(slotID);
		if (slot == null) {
			console.error("Slot #"+slotID+" does not exist.");
			if (typeof(callback) === 'function') thisArg ? callback(thisArg, null) : callback(null);
			return;
		}
		
		slot.SetData(data, function() {
			if (typeof(callback) === 'function') thisArg ? callback(thisArg, this.lastSaveSlotSaved) : callback(this.lastSaveSlotSaved);
		}, this);
	}

	/* =========================== Public Event Methods ========================== */

	/**
	 * @callback logEventCallback
	 * @param {string} eventName
	 */

	/**
	 * Logs a custom event and returns the eventName to an optional callback function when complete.
	 * @param {string} eventName The name of the event to log.
	 * @param {logEventCallback} callback A function to run when the event has logged.
	 * @param {object} thisArg An optional object to use as 'this' in your callback function.
	 */
	static logEvent(eventName, callback, thisArg)
	{
		this.ngioCore.executeComponent(this.ngioCore.getComponent('Event.logEvent', {event_name:eventName}), function() {
			if (typeof(callback) === 'function') thisArg ? callback(thisArg, this.lastLoggedEvent) : callback(this.lastLoggedEvent);
		}, this);
	}

	/* ========================== Public Gateway Methods ========================= */

	/**
	 * @callback getDateTimeCallback
	 * @param {string} dateime
	 * @param {number} timestamp
	 */

	/**
	 * Loads the current DateTime from the server and returns it to an optional callback function.
	 * @param {getDateTimeCallback} callback A function to run when the datetime has loaded.
	 * @param {object} thisArg An optional object to use as 'this' in your callback function.
	 */
	static getDateTime(callback, thisArg)
	{
		this.ngioCore.executeComponent(this.ngioCore.getComponent('Gateway.getDatetime'), function() {
			if (typeof(callback) === 'function') thisArg ? callback(thisArg, this.lastDateTime, this.lastTimeStamp) : callback(this.lastDateTime, this.lastTimeStamp);
		}, this);
	}

	/* ========================= Public KeepAlive Methods ========================= */

	/**
	 * Keeps your ssessions from expiring. Is called automatically.
	 * This will only hit the server once every 30 seconds, no matter how often you call it.
	 */
	static keepSessionAlive()
	{
		if (!this.hasUser) return;

		let elapsed = (new Date()) - this.#lastExecution
		if (elapsed.Seconds >= 30000) {
			this.#lastExecution = new Date();
			this.ngioCore.executeComponent(this.ngioCore.getComponent('Gateway.ping'));
		}
	}

	/* ======================= Public Login/Preload Methods ====================== */

	/**
	 * @callback getConnectionStatusCallback
	 * @param {string} connectionStatus
	 */

	/**
	 * Intended to be called from your game loop, this does an entire process of things based on your Init() options:
	 *  * Checks if the hosting site has a legal copy of this game
	 *  * Checks for a newer version of the game
	 *  * Makes sure you have a user session
	 *  * Checks if the current user is logged in
	 *  * Preloads Medals, Saveslots, etc
	 *  * Logs a new view to your stats
	 * 
	 * Whenever a new operation begins or ends, the current state will be passed to your callback function.
	 * @param {getConnectionStatusCallback} callback A function to be called when there's a change of status. Will match one of the STATUS_XXXX constants.
	 * @param {object} thisArg An optional object to use as 'this' in your callback function.
	 */
	static getConnectionStatus(callback, thisArg)
	{
		let _this = this;
		if (this.#checkingConnectionStatus || (this.#lastConnectionStatus === null) || (this.session == null)) return;
		this.#checkingConnectionStatus = true;

		if (this.#lastConnectionStatus === this.STATUS_INITIALIZED)
		{

			this.#lastConnectionStatus = this.STATUS_CHECKING_LOCAL_VERSION;
			this.#reportConnectionStatus(callback,thisArg);

			this.#checkLocalVersion(callback, thisArg);

		} else if (!this.#sessionReady) {

			if (this.#skipLogin) {
				this.#updateSessionHandler(callback,thisArg);
			} else if (this.#lastConnectionStatus !== this.STATUS_CHECKING_LOCAL_VERSION) {
				this.session.update(function() {
					this.#updateSessionHandler(callback,thisArg);
				}, this);
			}

		} else if (this.#lastConnectionStatus === this.STATUS_LOGIN_SUCCESSFUL) {

			this.#lastConnectionStatus = this.STATUS_PRELOADING_ITEMS;
			this.#reportConnectionStatus(callback,thisArg);

			this.#PreloadItems(function() {
				this.#reportConnectionStatus(callback,thisArg);
				this.#skipLogin = false;
			}, this);


		} else if (this.#lastConnectionStatus === this.STATUS_ITEMS_PRELOADED) {
			this.#loginPageOpen = false;
			this.#lastConnectionStatus = this.STATUS_READY;
			this.#reportConnectionStatus(callback,thisArg);

			this.#skipLogin = false;
		} else {
			this.keepSessionAlive();
		}

		this.#checkingConnectionStatus = false;
	}


	/* ===================== Private Login/Preloader Methods ==================== */


	static #updateSessionHandler(callback,thisArg)
	{
		if (this.session.statusChanged || this.#skipLogin) {
			this.#lastConnectionStatus = this.session.status;

			if (this.session.status == NewgroundsIO.SessionState.LOGIN_SUCCESSFUL || this.#skipLogin) {
				this.#lastConnectionStatus = NewgroundsIO.SessionState.LOGIN_SUCCESSFUL;
				this.#sessionReady = true;
			}

			this.#reportConnectionStatus(callback,thisArg);
		}

		this.#skipLogin = false;
	}

	static #reportConnectionStatus(callback, thisArg)
	{
		thisArg ? callback.call(thisArg, this.#lastConnectionStatus) : callback(this.#lastConnectionStatus);
	}


	// Loads the latest version info, and will get the host license and log a view if those Init() options are enabled.
	static #checkLocalVersion(callback, thisArg) {
		
		// if a login fails, this may get called again. Catch it and avoid an extra lookup!
		if (this.#localVersionChecked) {
			this.#lastConnectionStatus = this.STATUS_LOCAL_VERSION_CHECKED;
			this.#reportConnectionStatus(callback,thisArg);
			return;
		}

		this.ngioCore.queueComponent(this.ngioCore.getComponent('App.getCurrentVersion', {version:this.#version}));
		this.ngioCore.queueComponent(this.ngioCore.getComponent('Gateway.getVersion'));

		if (this.#preloadFlags.autoLogNewView) {
			this.ngioCore.queueComponent(this.ngioCore.getComponent('App.logView'));
		}
		if (this.#preloadFlags.checkHostLicense) {
			this.ngioCore.queueComponent(this.ngioCore.getComponent('App.getHostLicense'));
		}

		this.ngioCore.executeQueue(function() {
			this.#lastConnectionStatus = this.STATUS_LOCAL_VERSION_CHECKED;
			this.#localVersionChecked = true;
			this.#reportConnectionStatus(callback,thisArg);

			if (this.#isDeprecated) {
				console.warn("NGIO - Version mistmatch! Published version is: "+this.#newestVersion+", this version is: "+this.version);
			}
			if (!this.#legalHost) {
				console.warn("NGIO - This host has been blocked fom hosting this game!");
				this.#sessionReady = true;
				this.#lastConnectionStatus = this.STATUS_ITEMS_PRELOADED;
				this.#reportConnectionStatus(callback,thisArg);
			}
		}, this);

	}

	// Preloads any items that were set in the Init() options.
	static #PreloadItems() {
		
		if (this.#preloadFlags.preloadMedals) {
			this.ngioCore.queueComponent(this.ngioCore.getComponent('Medal.getMedalScore'));
			this.ngioCore.queueComponent(this.ngioCore.getComponent('Medal.getList'));
		}
		if (this.#preloadFlags.preloadScoreBoards) {
			this.ngioCore.queueComponent(this.ngioCore.getComponent('ScoreBoard.getBoards'));
		}
		if (this.user !== null && this.#preloadFlags.preloadSaveSlots) this.ngioCore.queueComponent(this.ngioCore.getComponent('CloudSave.loadSlots'));

		if (this.ngioCore.hasQueue) {
			this.ngioCore.executeQueue(function() {
				this.#lastConnectionStatus = this.STATUS_ITEMS_PRELOADED;
			}, this);
		} else {
			this.#lastConnectionStatus = this.STATUS_ITEMS_PRELOADED;
		}
	}

	/* =============================== Private Methods ============================== */

	// Resets the connection state, typically after a user logs out or cancels a login.
	static #resetConnectionStatus()
	{
		this.#lastConnectionStatus = this.STATUS_INITIALIZED;
		this.#loginPageOpen = false;
		this.#skipLogin = false;
		this.#sessionReady = false;
	}

	static #replaceSaveSlot(slot)
	{
		if (this.#saveSlots) {
			let replace = this.#saveSlots.length;
			for(let i=0; i<this.#saveSlots.length; i++) {
				if (this.#saveSlots[i].id === slot.id) {
					replace = i;
					break;
				}
			}
			this.#saveSlots[replace] = slot.clone(replace < this.#saveSlots.length ? this.#saveSlots[replace] : null);
		}
	}

	static #replaceScoreBoard(board)
	{
		if (this.#scoreBoards) {
			let replace = this.#scoreBoards.length;
			for(let i=0; i<this.#scoreBoards.length; i++) {
				if (this.#scoreBoards[i].id === board.id) {
					replace = i;
					break;
				}
			}
			this.#scoreBoards[replace] = board.clone(replace < this.#scoreBoards.length ? this.#scoreBoards[replace] : null);
		}
	}

	static #replaceMedal(medal)
	{
		if (this.#medals) {
			let replace = this.#medals.length;
			for(let i=0; i<this.#medals.length; i++) {
				if (this.#medals[i].id === medal.id) {
					replace = i;
					break;
				}
			}
			this.#medals[replace] = medal.clone(replace < this.#medals.length ? this.#medals[replace] : null);
		}
	}

	// Runs anytime the core gets a server response. Grabs individual result objects and runs them through #handleNewComponentResult().
	static #onServerResponse(e)
	{
		let response = e.detail

		if (response && response.success) {

			// make a note of our last update time
			this.#lastExecution = new Date();

			if (Array.isArray(response.result)) {
				for(let i=0; i<response.result.length; i++) {
					if (response.result[i]) this.#handleNewComponentResult(response.result[i]);
				}
			} else {
				if (response.result) this.#handleNewComponentResult(response.result);
			}
		}
	}

	// Checks component results from every server response to see if they need any further handling.
	static #handleNewComponentResult(result)
	{
		// show any errors, but ignore the one about null sessions, that's bound to happen anytime the game is played outside of Newgrounds
		if (!result.success && result.error.code !== 104 && result.error.code !== 110)
		{
			console.error(result.error.message+" \ncode("+result.error.code+")");
		}

		switch(result.__object) {

			/* ============================== App Info ============================== */

			case "App.getCurrentVersion":

				if (!result.success) return;

				// Save the latest version and note if this copy of the game is deprecated
				this.#newestVersion = result.current_version;
				this.#isDeprecated = result.client_deprecated;

				break;

			case "App.getHostLicense":

				if (!result.success) return;
				// Make a note of whether this game is being hosted legally or not
				this.#legalHost = result.host_approved;
				
				break;

			case "App.endSession":

				// reset the connection state if the user logged out
				this.#resetConnectionStatus();
				
				break;

			case "App.checkSession":

				// if something fails with a session check, reset the connection status
				if (!result.success) {
					this.#resetConnectionStatus();
				}

			case "App.startSession":

				// if something fails with a session check, reset the connection status
				if (!result.success) {
					this.#resetConnectionStatus();
					break;
				}
				
				result.session.clone(this.session);
				break;

			/* ============================ Cloud Saves ============================= */

			case "CloudSave.loadSlots":

				if (!result.success) return;

				// Store the loaded cloud saves in our dictionary so we can get them by slot number
				this.#saveSlots = result.slots;

				break;

			case "CloudSave.loadSlot":

				if (!result.success) return;

				// add or replace the slot
				this.#replaceSaveSlot(result.slot);

				break;

			case "CloudSave.setData":

				if (!result.success) {
					this.#lastSaveSlotSaved = null;
					return;
				}

				// add or replace the slot
				this.#replaceSaveSlot(result.slot);

				break;

			case "CloudSave.clearSlot":

				if (!result.success) return;

				// add or replace the slot
				this.#replaceSaveSlot(result.slot);

				break;


			/* ============================== Events ================================ */
			
			case "Event.logEvent":

				if (!result.success) {
					this.#lastLoggedEvent = null;
					return;
				}

				this.#lastLoggedEvent = result.event_name;

				break;

			/* ============================== Gateway ================================ */
			
			case "Gateway.getDatetime":

				if (!result.success) {
					this.#lastTimeStamp = 0;
					this.#lastDateTime = "0000-00-00";
					return;
				}

				this.#lastDateTime = result.datetime;
				this.#lastTimeStamp = result.timestamp;

				break;

			case "Gateway.getVersion":

				if (!result.success) {
					this.#gatewayVersion = null;
					return;
				}

				this.#gatewayVersion = result.version;

				break;

			case "Gateway.ping":

				this.#lastPingSuccess = result.success;

				break;

			/* ============================== Medals ================================ */
			
			case "Medal.getList":

				if (!result.success) return;

				// Store the loaded medals.
				this.#medals = [];
				for(let i=0; i<result.medals.length; i++) {
					this.#medals.push(result.medals[i].clone());
				}

				break;

			case "Medal.unlock":

				if (!result.success) {
					this.#lastMedalUnlocked = null;
					return;
				}

				if (this.#medals) {
					// Save, or replace, the medal
					this.#replaceMedal(result.medal);

					// record the last unlock
					this.#lastMedalUnlocked = this.getMedal(result.medal.id);
				}

				// Record the current user's medal score
				this.#medalScore = result.medal_score;
				window.top.postMessage(JSON.stringify({ngioComponent:"Medal.unlock",id:result.medal.id}), "*");

				break;

			case "Medal.getMedalScore":

				if (!result.success) return;

				// Record the current user's medal score
				this.#medalScore = result.medal_score;

				break;

			/* ============================= ScoreBoards ============================ */

			case "ScoreBoard.getBoards":
				if (!result.success) return;

				// store the loaded scoreboards
				this.#scoreBoards = [];
				for(let i=0; i<result.scoreboards.length; i++) {
					this.#scoreBoards.push(result.scoreboards[i].clone());
				}

				break;

			case "ScoreBoard.postScore":
				if (!result.success) {
					this.#lastScorePosted = null;
					this.#lastBoardPosted = null;
					return;
				}

				if (this.#scoreBoards) {
					this.#lastScorePosted = result.score;
					this.#lastBoardPosted = this.getScoreBoard(result.scoreboard.id);
				}

				window.top.postMessage(JSON.stringify({ngioComponent:"ScoreBoard.postScore",id:result.scoreboard.id}), "*");

				break;

			case "ScoreBoard.getScores":
				if (!result.success) {
					this.#lastGetScoresResult = null;
					return;
				}
				this.#lastGetScoresResult = result;

				break;
		}
	}
	
}
/** End Class NGIO **/