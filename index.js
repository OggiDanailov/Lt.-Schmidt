
	$(function () {

	  showTitle(title, "Lieutenant Schmidt", 0, 100  ); 

	  setTimeout(function(){
	  	showAbout(about, 'About', 0, 1);
	  }, 8000)
	  
	  setTimeout(function(){
	  showMusic(music, "Music", 0, 100 );
	}, 11000);

	  setTimeout(function(){
	  showContact(contact, 'Contact', 0, 10);
	}, 13800)

		setTimeout(function(){
			$('#img').addClass('seeIt')
		}, 14000)  

	});

	var title = document.getElementById('title');
	var about = document.getElementById('about')
	var music = document.getElementById('musique');
	var contact = document.getElementById('contact');
	var img = document.getElementById('img');


		var showTitle = function (target, message, index, interval) {   
		  if (index < message.length) {
		    $(target).append(message[index++]);
		    setTimeout(function () { showTitle(target, message, index, interval); }, Math.random() * 800);

		  }
		}



	var showAbout = function (target, message, index, interval) {
			if (index < message.length) {
			  $(target).append(message[index++]);  
			  setTimeout(function () { showAbout(target, message, index, interval); }, Math.random() * 900);
			}	  	
	}

	var showMusic = function (target, message, index, interval) {
			if (index < message.length) {
			  $(target).append(message[index++]);  
			  setTimeout(function () { showMusic(target, message, index, interval); }, Math.random() * 700);
			}		  	
	}


	var showContact = function (target, message, index, interval) {
			if (index < message.length) {
			  $(target).append(message[index++]);  
			  setTimeout(function () { showTitle(target, message, index, interval); }, Math.random() * 600);
			}
			
	}
	







