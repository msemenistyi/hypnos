(function(doc, root){
	var hypnos = new Hypnos({
		delay: 2000,
		error: 1000		
	});

	var $ = Document.prototype.querySelector.bind(document);

	var $el = {
		screen: $('#screen'),
		text: $('#cb-text'),
		countdown: $('#cb-countdown'),
		button: $('#sb-button'),
		startBlock: $('#start-block') ,
		countdownBlock: $('#countdown-block') 
	}

	var interval;
	var result = false;

	bindListeners();

	function startCountdown(){
		$el.startBlock.style.display = 'none';
		$el.countdownBlock.style.display = 'block';
		var seconds = 2;

		$el.countdown.innerHTML = seconds;
		interval = setInterval(function(){
			seconds--;
			$el.countdown.innerHTML = seconds;
			if (!seconds) {
				stopCountdown();
			}
		}, 1000);
	}

	function stopCountdown(){

		clearInterval(interval);
		hypnos.isSleeping(function(isSleeping){
			result = isSleeping;
			changeBackground();
		});

		$el.startBlock.style.display = 'block';
		$el.countdownBlock.style.display = 'none';

	}

	function changeBackground () {
		if (result){
			$el.screen.className = 'night';
		} else {
			$el.screen.className = 'day';
		}
	}

	function bindListeners(){
		$el.button.addEventListener('click', function(event){
			startCountdown();
		}, true);
	}

}(document, window));