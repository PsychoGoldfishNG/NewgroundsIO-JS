(($)=>{


	// This is all vanilla javascript and jQuery with basic HTML and CSS.
	// Any of the non-display code should work in any JavaScript game framework

	// we'll use intervals to simulte a real game loop
	var gameLoop;

	// loaded cloudsave data is stored here
	var gameData = "";

	// overall layout for the title screen
	var $title_screen = $('#title-screen');

	// overall layout for the title screen
	var $test_screen = $('#test-screen');

	// initialize the api

	NGIO.init("39685:NJ1KkPGb","qsqKxz5dJouIkUNe3NBppQ==", {
		version: "1.0.0",
		checkHostLicense: true,
		autoLogNewView: true,
		preloadMedals: true,
		preloadScoreBoards: true,
		preloadSaveSlots: true,
		debugMode: false
	});

	// start the title screen
	function startTitleScreen()
	{
		$title_screen.show();
		$test_screen.hide();

		// get our jQuery UI elements

		var $main_menu = $('#main-menu');
		var $new_game_btn = $('#new-game-btn');
		var $continue_btn = $('#continue-btn');

		var $continue_menu = $('#continue-menu');

		var $log_in_prompt = $('#log-in-prompt');
		var $log_in_btn = $('#log-in-btn');
		var $username = $('#username');

		var $cancel_log_in_prompt = $('#cancel-log-in-prompt');
		var $cancel_log_in_btn = $('#cancel-log-in-btn');

		var $log_out_prompt = $('#log-out-prompt');
		var $log_out_btn = $('#log-out-btn');

		var $log_in_overlay = $('#log-in-overlay');
		var $log_in_btn2 = $('#log-in-btn2');
		var $cancel_log_in_btn2 = $('#cancel-log-in-btn2');
		var $dont_log_in_btn = $('#dont-log-in-btn');
		var $get_login = $('#get-login');
		var $wait_login = $('#wait-login');

		var $please_wait = $('#please-wait');
		var $new_version = $('#new-version');

		var $illegal_version_overlay = $('#illegal-version-overlay');

		var $new_version_btn = $('#new-version-btn');

		var $back_btn = $('#back-btn');

		var continue_slot_template = $continue_menu.html();

		var use_large_login_prompt = true;


		// Button handling (kill any old listeners, then add new ones)

		$dont_log_in_btn.off('click').on('click', ()=>{
			use_large_login_prompt = false;
			NGIO.skipLogin();
			return false;
		});

		$log_in_btn.off('click').on('click', ()=>{
			showLoggingIn();
			return false;
		});

		$log_in_btn2.off('click').on('click', ()=>{
			showLoggingIn();
			return false;
		});

		$log_out_btn.off('click').on('click', ()=>{
			NGIO.logOut();
			return false;
		});

		$cancel_log_in_btn.off('click').on('click', ()=>{
			NGIO.cancelLogin();
			return false;
		});

		$cancel_log_in_btn2.off('click').on('click', ()=>{
			NGIO.cancelLogin();
			return false;
		});

		$new_game_btn.off('click').on('click', ()=>{
			startGame();
		});

		$continue_btn.off('click').on('click', ()=>{
			openContinueMenu();
		});

		$back_btn.off('click').on('click',()=>{
			showMainMenu();
		})


		// generic function to hide all our UI buttons/menus		
		function hideUI()
		{
			$please_wait.hide();
			$log_in_overlay.hide();
			$log_in_prompt.hide();
			$cancel_log_in_prompt.hide();
			$log_out_prompt.hide();
			$main_menu.hide();
			$continue_menu.hide();
			$back_btn.hide();
		}


		// show UI elements needed to get a user logged in
		function userNotLoggedIn()
		{
			// if we haven't finished our preloading routine, show the big login prompt
			if (use_large_login_prompt) {
				$log_in_overlay.show();
				$get_login.show();
				$wait_login.hide();
			} else {
				$log_in_prompt.show();
			}
		}


		// the user is logging in on another browser tab. Show the cancel login options
		function showLoggingIn()
		{
			NGIO.openLoginPage();
		}


		// we're waiting for user input.  It's PROBABLY because they are logging in
		function waitingForUser()
		{
			// This will be true if they are logging in
			if (NGIO.loginPageOpen) {

				// show the spinner
				$please_wait.show();

				// if we haven't done our preload routine, show the cancel option in the big prompt
				if (use_large_login_prompt) {
					$log_in_overlay.show();
					$get_login.hide();
					$wait_login.show();

				// otherwise, show the smaller prompt at the top of the screen
				} else {
					$cancel_log_in_prompt.show();
				}
			}
		}

		// NGIO is all preloaded, we can show the main menu
		function ngioReady()
		{
			// don't bother the user with the big login prompt again
			use_large_login_prompt = false;

			showMainMenu();
		}

		// show the main menu
		function showMainMenu()
		{
			hideUI();
			$main_menu.show();
			showUserPrompt();
		}

		// show the user promp in the top right
		function showUserPrompt()
		{
			// user is logged in, so show the log out option
			if (NGIO.hasUser) {
				$log_out_prompt.show();
				$username.text(NGIO.user.name);

				// Since we have a user, we can use the continue menu!
				$continue_btn.prop('disabled',false);

			// user is not logged in, so show the login prompt
			} else {
				
				$log_in_prompt.show();

				// user didn't sign in, and can't use cloud saves. Disable the continue button.
				$continue_btn.prop('disabled',true);
			}
		}

		// open (or refresh) the continue menu
		function openContinueMenu()
		{
			hideUI();
			showUserPrompt();

			// remove any existing listeners
			$("button", $continue_menu).off();
			
			// clear the menu
			$continue_menu.html("");

			// rebuild the menu with current saveslot data
			for(let i=0; i<3; i++) {
				
				let slot = NGIO.saveSlots[i];
				let $slot_ui = $(continue_slot_template);

				$('h3', $slot_ui).text("Slot "+slot.id);
				$('button', $slot_ui).attr("debug",i);
				$('em', $slot_ui).text(slot.hasData ? (slot.getDate()).toLocaleString() : "No Data");

				$("button[action='delete']", $slot_ui).off('click').on('click',function() {
					slot.clearData();
					openContinueMenu();
				});

				$("button[action='load']", $slot_ui).off('click').on('click',function() {
					startGame(slot, this);
				});

				if (!slot.hasData) $slot_ui.addClass('disabled');
				$continue_menu.append($slot_ui);
			}

			$continue_menu.show();
			$back_btn.show();
		}

		// start the game (show the test screen)
		function startGame(slot, huh)
		{
			if (slot) {
				
				hideUI();
				$please_wait.show();

				slot.getData(function(data) {
					gameData = data;
					showTestScreen();
				});

			} else {

				gameData = "";
				showTestScreen();

			}
		}

		// we've already done the login/preload routine
		if (NGIO.isReady) {
			ngioReady();
		}

		// reset the game loop
		if (gameLoop) clearInterval(gameLoop);
		gameLoop = setInterval(()=> {

			// note: the callback function only fires if there's a change in status

			NGIO.getConnectionStatus(function(status) {

				console.log("?"+status,NGIO.isWaitingStatus);

				hideUI();

				if (NGIO.isWaitingStatus) {
					$please_wait.show();
				}

				switch (status) {

					// we have version and license info
					case NGIO.STATUS_LOCAL_VERSION_CHECKED:

						// this is an out-of-date (or possibly a development) version
						if (NGIO.isDeprecated) $new_version.show();

						// the site hosting this copy has been blocked
						if (!NGIO.legalHost) $illegal_version_overlay.show();

						break;

					// user needs to log in
					case NGIO.STATUS_LOGIN_REQUIRED:

						userNotLoggedIn();

						break;

					// user needs to log in
					case NGIO.STATUS_READY:

						ngioReady();
						
						break;

					// user needs to log in
					case NGIO.STATUS_WAITING_FOR_USER:

						waitingForUser();
						
						break;
				}

			});

		},16);
	}

	function showTestScreen()
	{
		// clear the game loop (we won't need it for any of this other stuff)
		if (gameLoop) clearInterval(gameLoop);

		$title_screen.hide();
		$test_screen.show();


		// cloud save test stuff
		
		var $game_data = $("#gameData");
		var $save_btns = $("button[save_id]", $test_screen);

		$game_data.val(gameData);
		
		$save_btns.off('click').on('click', function() {
			let slot_id = parseInt($(this).attr('save_id'));
			let slot = NGIO.getSaveSlot(slot_id);
			slot.setData($game_data.val(), function() {
				alert('data saved to slot '+slot_id);
			});
		});

		
		// event logging
		var event_name = "test event";

		$("#log-event").off('click').on('click', function(){
			NGIO.logEvent(event_name, function() {
				alert("Event logged!");
			});
		});

		var event_name2 = "test event 2";

		$("#log-event2").off('click').on('click', function(){
			NGIO.logEvent(event_name2, function() {
				alert("Event 2 logged!");
			});
		});


		// scoreboard test stuff

		var board_id = 5853;

		var $scoreboard_inner = $("#scoreboard-inner");
		var $social_select = $("#score-social-select");
		var $period_select = $("#score-period-select");

		var template_message = $('#template-message').removeAttr("id").remove()[0].outerHTML;
		var template_score = $('#template-score').removeAttr("id").remove()[0].outerHTML;

		function updateScores()
		{
			let social = $social_select.val() == "1";
			let period = $period_select.val();

			$scoreboard_inner.html("");

			let $message = $(template_message);

			$scoreboard_inner.append($message);
			$("em", $message).text("Loading...");

			NGIO.getScores(board_id, {period:period, social:social}, function(scores, board, options) {

				if (!scores || scores.length < 1) {
					$("em", $message).text("No scores available.");
				} else {
					$message.remove();

					for(let i=0; i<scores.length; i++) {
						let $score = $(template_score);
						$("[property='rank']",$score).text((i+1)+":");
						$("[property='name']",$score).text(scores[i].user.name);
						$("[property='score']",$score).text(scores[i].formatted_value);
						$scoreboard_inner.append($score);
					}
				}
			}, this)
		}

		$social_select.off('change').on('change', updateScores);
		$period_select.off('change').on('change', updateScores);
		updateScores();

		var $new_score = $('#new-score');
		var $post_score_btn = $('#post-score-btn');

		$post_score_btn.off('click').on('click', function() {
			if (!$new_score.val()) return;

			let score = parseInt($new_score.val());
			$new_score.val("");

			NGIO.postScore(board_id, score, function() {
				updateScores();
			}, this);
		});


		var $medals = $("#medals");
		var medal_template = $medals.html();

		function updateMedals()
		{
			$medals.html("");

			NGIO.medals.forEach(medal=>{
				console.log(medal);
				let $medal = $(medal_template);

				$('strong', $medal).text(medal.name);
				$('em', $medal).text(medal.value+" Points");

				if (medal.unlocked) {
					$('a', $medal).remove();
				} else {
					$('a', $medal).click(function() {
						medal.unlock(updateMedals);
						return false;
					});
					$('span', $medal).remove();
				}

				$("img", $medal).attr("src", medal.icon);
				$medals.append($medal);
			});
		}
		updateMedals();
	}

	startTitleScreen();
})(jQuery);