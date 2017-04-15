
$(function () {

	showTitle(title, "Kalin Karaleev", 0, 100); 

	setTimeout(function(){
	  	showAbout(about, 'About', 0, 1);
	  }, 1000)
	  
	setTimeout(function(){
	  showMusic(music, "Audio", 0, 100 );
	}, 1000);

	setTimeout(function(){
	  showContact(contact, 'Contact', 0, 10);
	}, 100)

	setTimeout(function(){
		$("#img:hidden:first").fadeIn(10000);
		}, 1000)  

});

var title = document.getElementById('title');
var about = document.getElementById('about')
var music = document.getElementById('musique');
var contact = document.getElementById('contact');
var img = document.getElementById('img');

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
	







