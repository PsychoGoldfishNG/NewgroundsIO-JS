(()=>{

	/**
 * Contains information about the current user session.
	 */
	class Session extends NewgroundsIO.BaseObject {

		/**
		 * Constructor
		 * @param {object} props An object of initial properties for this instance
		 */
		constructor(props)
		{
				super();

				this.__object = 'Session';

				this._id = null;
				this._user = null;
				this._expired = null;
				this._remember = null;
				this._passport_url = null;
				this.__properties = this.__properties.concat(["id","user","expired","remember","passport_url"]);
				if (props && typeof(props) === 'object') {
					for(var i=0; i<this.__properties.length; i++) {
						if (typeof(props[this.__properties[i]]) !== 'undefined') this[this.__properties[i]] = props[this.__properties[i]];
					}
				}


			/**
			 * The current state of this session.
			 * @private
			 */
			this._status = NewgroundsIO.SessionState.SESSION_UNINITIALIZED;

			/**
			 * The status from the last time Update() was called.
			 * @private
			 */
			this._lastStatus = null;

			/**
			 * The last time Update() was called. (Start in the past so Update() will work immediately.)
			 * @private
			 */
			this._lastUpdate = new Date((new Date()).getTime() - 30000);

			/**
			 * If false, Update() will end immediately when called.
			 * @private
			 */
			this._canUpdate = true;

			/**
			 * The mode we'll use to check the status of this session.
			 * @private
			 */
			this._mode = "expired";

			/**
			 * The total number of attempts we've tried to contact the server without success.
			 * @private
			 */
			this._totalAttempts = 0;

			/**
			 * TThe max number of attempts we can make to the server without success before we give up.
			 * @private
			 */
			this._maxAttempts = 5;

			/**
			 * Stores a session ID from the game's URI if hosted on Newgrounds.
			 * @private
			 */
			this._uri_id = null;

			/**
			 * Stores a session ID that was saved from a Passport login.
			 * @private
			 */
			this._saved_id = null;

		}

		/**
		 * A unique session identifier
		 * @type {String}
		 */
		get id()
		{
			return this._id;
		}

		set id(_id)
		{
			if (typeof(_id) !== 'string' && _id !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _id);
			this._id = String(_id);

		}

		/**
		 * If the user has not signed in, or granted access to your app, this will be null
		 * @type {NewgroundsIO.objects.User}
		 */
		get user()
		{
			return this._user;
		}

		set user(_user)
		{
				if (_user !== null && !(_user instanceof NewgroundsIO.objects.User))
				console.warn("Type Mismatch: expecting NewgroundsIO.objects.User, got ",_user);

			this._user = _user;
		}

		/**
		 * If true, the session_id is expired. Use App.startSession to get a new one.
		 * @type {Boolean}
		 */
		get expired()
		{
			return this._expired;
		}

		set expired(_expired)
		{
			if (typeof(_expired) !== 'boolean' && _expired !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a boolean, got', _expired);
			this._expired = _expired ? true:false;

		}

		/**
		 * If true, the user would like you to remember their session id.
		 * @type {Boolean}
		 */
		get remember()
		{
			return this._remember;
		}

		set remember(_remember)
		{
			if (typeof(_remember) !== 'boolean' && _remember !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a boolean, got', _remember);
			this._remember = _remember ? true:false;

		}

		/**
		 * If the session has no associated user but is not expired, this property will provide a URL that can be used to sign the user in.
		 * @type {String}
		 */
		get passport_url()
		{
			return this._passport_url;
		}

		set passport_url(_passport_url)
		{
			if (typeof(_passport_url) !== 'string' && _passport_url !== null) console.warn('NewgroundsIO Type Mismatch: Value should be a string, got', _passport_url);
			this._passport_url = String(_passport_url);

		}


		/**
		 * The current state of this session.
		 * @type {string}
		 */
		get status()
		{
			return this._status;
		}

		/**
		 * The current state of this session.
		 * @type {boolean}
		 */
		get statusChanged()
		{
			return this._lastStatus != this.status;
		}

		/**
		 * The current state of this session.
		 * @type {boolean}
		 */
		get waiting()
		{
			return this._lastStatus != this.status;
		}

		/**
		 * The current state of this session.
		 * @type {boolean}
		 */
		get storageKey()
		{
			return this.__ngioCore ? "_ngio_" + this.__ngioCore.appID + "_session_" : null;
		}

		/**
		 * resets everything except the session id.
		 * @private
		 */
		resetSession()
		{
			this._uri_id = null;
			this._saved_id = null;
			this.remember = false;
			this.user = null;
			this.expired = false;

			localStorage.setItem(this.storageKey, null);
		}

		/**
		 * Opens the Newgrounds Passport login page in a new browser tab.
		 */
		openLoginPage()
		{
			if (!this.passport_url) return;

			this._status = NewgroundsIO.SessionState.WAITING_FOR_USER;
			this.mode = "check";
			window.open(this.passport_url, "_blank");
		}

		/**
		 * Logs the user out of their current session, locally and on the server, then calls a function when complete.
		 * @param {function} callback The callback function.
		 * @param {object} thisArg An optional object to use as 'this' in your callback function.
		 */
		logOut(callback, thisArg)
		{
			this.mode = "wait";
			this.endSession(callback, thisArg);
		}

		/**
		 * Cancels a pending login attempt.
		 * @param {function} newStatus An optional status code to use if LOGIN_CANCELLED is insufficient.
		 */
		cancelLogin(newStatus)
		{
			if (typeof(newStatus) === "undefined") newStatus = NewgroundsIO.SessionState.LOGIN_CANCELLED;

			// clear the current session data, and set the appropriate cancel status
			this.resetSession();
			this.id = null;
			this._status = newStatus;

			// this was a manual cancel, so we can reset the retry counter
			this._totalAttempts = 0;

			// this was a manual cancel, so we can reset the retry counter
			this._mode = "new";
			this._lastUpdate = new Date((new Date()).getTime() - 30000);
		}


		/**
		 * Call this to update the session process and call a function if there are any changes.
		 * @param {function} callback The callback function.
		 * @param {object} thisArg An optional object to use as 'this' in your callback function.
		 */
		update(callback, thisArg)
		{

			if (this._lastStatus != this.status) {
				this._lastStatus = this.status;
				if (typeof(callback) === "function") {
					if (thisArg) callback.call(thisArg, this);
					else callback(this);
				}
			}

			// we can skip this whole routine if we're in the middle of checking things
			if (!this._canUpdate || this.mode == "wait") return;
			if (!this.__ngioCore) {
				console.error("NewgroundsIO - Can't update session without attaching a NewgroundsIO.Core instance.");
				this._canUpdate = false;
				return;
			}

			// Server is not responding as expected, it may be down...  We'll set the session back to unintialized and try again
			if (this.status == NewgroundsIO.SessionState.SERVER_UNAVAILABLE) {
				
				// we've had too many failed attempts, time to stop retrying
				if (this._totalAttempts >= this._maxAttempts) {
					this._status = NewgroundsIO.SessionState.EXCEEDED_MAX_ATTEMPTS;

				// next time our delay time has passed, we'll reset this, and try our sessions again
				} else {
					this._status = NewgroundsIO.SessionState.SESSION_UNINITIALIZED;
					this._totalAttempts++;

				}
			}

			// first time getting here (probably).  We need to see if we have any existing session data to try...
			if (this.status == NewgroundsIO.SessionState.SESSION_UNINITIALIZED) {

				this._saved_id = localStorage.getItem(this.storageKey);

				// check if we have a session id from our URL params (hosted on Newgrounds)
				if (this._uri_id) {
					this.id = this._uri_id;

				// check if we have a saved session (hosted elsewhere or standalone app)
				} else if (this._saved_id) {
					this.id = this._saved_id;

				}

				// If we have an existing session, we'll use "check" mode to varify it, otherwise we'll nequest a "new" one.
				this.mode = this.id ? "check" : "new";

				console.log(this.mode , this.id);
			
			}

			// make sure at least 5 seconds pass between each API call so we don't get blocked by DDOS protection.
			var _now = new Date();
			var wait = _now - this._lastUpdate;
			if (wait < 5000) return;

			this._lastUpdate = _now;
			
			switch (this.mode) {

				// we don't have an existing session, so we're requesting a new one
				case "new":

					// change our mode to wait so the coroutine can finish before we make ny other API calls
					this.mode = "wait";
					this.startSession();
					break;

				// we have a session, we just need to check and see if there's a valid login attached to it
				case "check":

					// change our mode to wait so the coroutine can finish before we make ny other API calls
					this.mode = "wait";
					this.checkSession();
					break;
			}
		}

		// =================================== API CALLS/HANDLERS =================================== //


		/* App.startSession */

		/**
		 * This will reset our current session object, then make the API call to get a new session.
		 */
		startSession()
		{
			// don't check for any new updates while we're starting the new session
			this._canUpdate = false;
			
			// clear out any pre-existing session data
			this.resetSession();

			this._status = NewgroundsIO.SessionState.WAITING_FOR_SERVER;

			var startSession = this.__ngioCore.getComponent('App.startSession');
			this.__ngioCore.executeComponent(startSession, this._onStartSession, this);
		}

		/**
		 * Handles the acquisition of a new session id from the server.
		 * @private
		 */
		_onStartSession(response)
		{

			// The start session request was successful!
			if (response.success === true) {

				// save the new session data to this session object
				this.id = response.result.session.id;
				this.passport_url = response.result.session.passport_url;

				// update our session status. This will trigger the callback in our update loop.
				this._status = NewgroundsIO.SessionState.LOGIN_REQUIRED;

				// The update loop needs to wait until the user clicks a login button
				this.mode = "wait";
				
			// Something went wrong!  (Good chance the servers are down)
			} else {
				this._status = NewgroundsIO.SessionState.SERVER_UNAVAILABLE;
			}

			// Let our update loop know it can actually do stuff again
			this._canUpdate = true;
		}


		/* App.checkSession */

		/**
		 * This will call the API to see what the status of our current session is
		 */
		checkSession()
		{
			// don't check for any new updates while we're checking session
			this._canUpdate = false;

			var checkSession = this.__ngioCore.getComponent('App.checkSession');
			this.__ngioCore.executeComponent(checkSession, this._onCheckSession, this);
		}

		/**
		 * Handles the response to checkSession. This may lead to a change in status if the user has signed in, 
		 * cancelled, or the session has expired.
		 * @private
		 */
		_onCheckSession(response)
		{
			// The API request was successful 
			if (response.success === true) {

				// Our session either failed, or the user cancelled the login on the server.
				if (!response.result.success) {

					// clear our id, and cancel the login attempt
					this.id = null;
					this.cancelLogin(response.result.error.code === 111 ? NewgroundsIO.SessionState.LOGIN_CANCELLED : NewgroundsIO.SessionState.LOGIN_FAILED);
					
				} else {

					// The session is expired
					if (response.result.session.expired) {

						// reset the session so it's like we never had one
						this.resetSession();
						this.id = null;
						this._status = NewgroundsIO.SessionState.SESSION_UNINITIALIZED;

					// we have a valid user login attached!
					} else if (response.result.session.user !== null) {

						// store the user info, and update status
						this.user = response.result.session.user;
						this._status = NewgroundsIO.SessionState.LOGIN_SUCCESSFUL;
						this.mode = "valid";

						// if the user selected to remember the login, save it now!
						if (response.result.session.remember) {
							this._saved_id = this.id;
							this.remember = true;
							localStorage.setItem(this.storageKey, this.id);
						}

					// Nothing has changed, we'll have to check again in the next loop.
					} else {
						this.mode = "check";
					}
				}

			} else {

				// Something went wrong!  Servers may be down, or you got blocked for sending too many requests
				this._status = NewgroundsIO.SessionState.SERVER_UNAVAILABLE;

			}

			// Let our update loop know it can actually do stuff again
			this._canUpdate = true;
		}


		/* App.endSession */

		/**
		 * This will end the current session on the server
		 * @param {function} callback The callback function.
		 * @param {object} thisArg An optional object to use as 'this' in your callback function.
		 */
		endSession(callback, thisArg)
		{
			// don't check for any new updates while we're ending session
			this._canUpdate = false;

			var endSession = this.__ngioCore.getComponent('App.endSession');
			this.__ngioCore.executeComponent(endSession, function(response) {
				this._onEndSession(response);
				if (typeof(callback) === "function") {
					if (thisArg) callback.call(thisArg, this);
					else callback(this);
				}
			}, this);
		}

		/**
		 * Handler for endSession. Resets the session locally
		 * @private
		 */
		_onEndSession(response)
		{
			// We'll just clear out the whole session, even if something failed.
			this.resetSession();
			this.id = null;
			this.mode = "new";
			this._status = NewgroundsIO.SessionState.USER_LOGGED_OUT;

			// Let our update loop know it can actually do stuff again
			this._canUpdate = true;
		}

			}

	// Move class to namespace
	NewgroundsIO.objects.Session = Session;

})();

