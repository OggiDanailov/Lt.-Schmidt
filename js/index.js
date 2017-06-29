var title = document.getElementById('title');
var about = document.getElementById('about')
var music = document.getElementById('musique');
var contact = document.getElementById('contact');
var img = document.getElementById('img');
var border = document.getElementsByClassName('whatever')[0]


$(function () {

	showTitle(title, "Kalinneevs Karalev", 0, 100); 

	setTimeout(function(){
	  	showAbout(about, 'About', 0, 1);
	  }, 5000)
	  
	setTimeout(function(){
	  showMusic(music, "Audio", 0, 100 );
	}, 7000);

	setTimeout(function(){
	  showContact(contact, 'Contact', 0, 10);
	}, 9000)

	setTimeout(function(){
		playImage();
		$("#img:hidden:first").fadeIn(10000);
		}, 10000)  

});

	setTimeout(function(){
		blink1()
		border.style.borderTop = '5px solid grey'
	},22000);

	setTimeout(function(){
		blink2()
		border.style.borderRight = '5px solid grey'
	},23100);

	setTimeout(function(){
		blink3()
		border.style.borderBottom = '5px solid grey'
	},24000);

	setTimeout(function(){
		blink4()
		title.style.boxShadow = '5px 5px 20px teal'
		about.style.boxShadow = '5px 5px 20px teal';
		music.style.boxShadow = '5px 5px 20px teal';
		contact.style.boxShadow = '5px 5px 20px teal';
		border.style.borderLeft = '5px solid grey';
		border.style.boxShadow = '5px 5px 20px teal'
	},24900)




	var showTitle = function (target, message, index, interval) {   
		 if (index < message.length) {
		    $(target).append(message[index++]);
		    	var audio = new Audio;
				var typewriting = new Array('audio/1.wav', 'audio/2.wav', 'audio/3.wav', 'audio/4.wav', 'audio/5.wav', 'audio/6.wav', 'audio/7.wav');
				audio.src = typewriting[Math.floor(Math.random() * typewriting.length)];
    			audio.play();
		    setTimeout(function () { showTitle(target, message, index, interval); }, Math.random() * 800);

		 }
	}

	var showAbout = function (target, message, index, interval) {
			if (index < message.length) {
			  $(target).append(message[index++]);
			  var audio = new Audio;
				var typewriting = new Array('audio/1.wav', 'audio/2.wav', 'audio/3.wav', 'audio/4.wav', 'audio/5.wav', 'audio/6.wav', 'audio/7.wav', 'audio/8.wav', 'audio/9.wav', 'audio/10.wav');
				audio.src = typewriting[Math.floor(Math.random() * typewriting.length)];
    			audio.play();  
			  setTimeout(function () { showAbout(target, message, index, interval); }, Math.random() * 900);
			}	  	
	}

	var showMusic = function (target, message, index, interval) {
			if (index < message.length) {
			  $(target).append(message[index++]);
			  var audio = new Audio;
				var typewriting = new Array('audio/1.wav', 'audio/2.wav', 'audio/3.wav', 'audio/4.wav', 'audio/5.wav', 'audio/6.wav', 'audio/7.wav', 'audio/8.wav', 'audio/9.wav', 'audio/10.wav');
				audio.src = typewriting[Math.floor(Math.random() * typewriting.length)];
    			audio.play();   
			  setTimeout(function () { showMusic(target, message, index, interval); }, Math.random() * 700);
			}		  	
	}


	var showContact = function (target, message, index, interval) {
			if (index < message.length) {
			  $(target).append(message[index++]);
			  var audio = new Audio;
				var typewriting = new Array('audio/1.wav', 'audio/2.wav', 'audio/3.wav', 'audio/4.wav', 'audio/5.wav', 'audio/6.wav', 'audio/7.wav', 'audio/8.wav', 'audio/9.wav', 'audio/10.wav');
				audio.src = typewriting[Math.floor(Math.random() * typewriting.length)];
    			audio.play();   
			  setTimeout(function () { showContact(target, message, index, interval); }, Math.random() * 600);
			}
			
	}

	var playImage = function(){
		var audio = new Audio;
		audio.src = 'audio/first.wav';
		audio.play()
	}

	var blink1 = function(){
		var audio = new Audio;
		audio.src = 'audio/blink1.wav'
		audio.play()
	}

	var blink2 = function(){
		var audio = new Audio;
		audio.src = 'audio/blink2.wav'
		audio.play()
	}

	var blink3 = function(){
		var audio = new Audio;
		audio.src = 'audio/blink3.wav'
		audio.play()
	}

	var blink4 = function(){
		var audio = new Audio;
		audio.src = 'audio/blink4.wav'
		audio.play()
	}
	







