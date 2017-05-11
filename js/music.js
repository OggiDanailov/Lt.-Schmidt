var audio = new Audio;

var play1 = document.getElementById('play1')
var pause1 = document.getElementById('pause1')
var next1 = document.getElementById('next1')
var songList = document.getElementById('songList')

var jukebox = new Jukebox()

play1.addEventListener('click', jukebox.play)
play1.addEventListener('click', jukebox.timeLineRepresentation)
pause1.addEventListener('click', jukebox.pause)
next1.addEventListener('click', jukebox.next)
previous1.addEventListener('click', jukebox.previous)
random1.addEventListener('click', jukebox.random)

var jorge = new Song('Jorge','audio/Jorge.mp3')
var run = new Song('Running','audio/run.mp3')
var ukulele = new Song('Ukulele', 'audio/ukulele.mp3')
var extension = new Song('extension', 'audio/extension.mp3')
var arabesque = new Song('arabesque', 'audio/arabesque.mp3')
var blues = new Song('blues', 'audio/blues.mp3')
var eye = new Song('eye', 'audio/eye convergence.mp3')
var siberia = new Song('siberia', 'audio/siberia.mp3')
var snowflakes = new Song('snowflakes', 'audio/snowflakes.mp3')

var songs = [jorge, run, ukulele, extension, blues, arabesque, eye, siberia, snowflakes]



$(document).ready(function() {
  for (i=0;i<songs.length;i++) {
    var song = document.createElement("h3");
    song.innerText = songs[i].name;
    songList.appendChild(song, songList);
  }
  songStrings = [];
  var songNames = $("h3");

  $.each(songNames, function(index, value) {
    songStrings.push(value.innerText)
    // console.log(songStrings)
  });

  $("h3").click(function() {
    currentSong = songStrings.indexOf(this.innerText);
    jukebox.play();
    jukebox.timeLineRepresentation()
  })
})


function Song(name, fileName, art){
	this.name = name;
	this.fileName = fileName;
	this.art = art;
	
}

function Jukebox(){
	currentSong = 0;
	this.play = play;
	this.pause = stop;
	this.next = next;
	this.previous = previous;
	this.random = random;
	this.timeLineRepresentation = timeLineRepresentation;
}


function play(){
	audio.src = songs[currentSong].fileName;	
	
		audio.play()

	setTimeout(function(){
		audio.duration
	}, 100)
}

function stop() {
	audio.src = songs[currentSong].fileName;
	audio.pause()
	// console.log(currentSong)
}




function next(){
	 	if(currentSong == songs.length - 1){
	 		currentSong = 0;
	 		audio.src = songs[currentSong].fileName;
	 		audio.play()
	 		// console.log(currentSong)
	 	}else{
	 		currentSong = currentSong +  1;
	 		audio.src = songs[currentSong].fileName;
	 		audio.play()
	 		// console.log(currentSong)
	 	}
}

function previous(){
	 	currentSong = currentSong -  1;
	 	// console.log(currentSong)
	 	if(currentSong < 0){
	 		currentSong = songs.length-1;
	 		audio.src = songs[currentSong].fileName;
	 		audio.play()
	 	}else {
	 		audio.src = songs[currentSong].fileName;
	 		audio.play()
	 	}
}

function random(x, y){
	currentSong = Math.floor(Math.random()* (songs.length-1 * 0)) + 0;
	audio.src = songs[currentSong].fileName;
	audio.play()
	// console.log(currentSong)
}

function timeLineRepresentation(){
		var totalLength = timeline.offsetWidth - playhead.offsetWidth
// console.log(totalLength)
		audio.addEventListener('timeupdate', timeUpdate)

		audio.addEventListener("canplaythrough", function() {
		    duration = audio.duration;
		}, false);

		timeline.addEventListener('click', function(event){
			moveplayhead(event)
		   audio.currentTime = duration * clickPercent(event);
		}, false);

		// returns click as decimal (.77) of the total timelineWidth
		function clickPercent(event) {
		    return (event.clientX - getPosition(timeline)) / totalLength;

		}

		function moveplayhead(event) {
		    var newMargLeft = event.clientX - getPosition(timeline);

		    if (newMargLeft >= 0 && newMargLeft <= totalLength) {
		        playhead.style.marginLeft = newMargLeft + "px";
		    }
		    if (newMargLeft < 0) {
		        playhead.style.marginLeft = "0px";
		    }
		    if (newMargLeft > totalLength) {
		        playhead.style.marginLeft = totalLength + "px";
		    }
		}

		function timeUpdate() {
		    var playPercent = totalLength * (audio.currentTime / duration);
		    playhead.style.marginLeft = playPercent + "px";
		    if (audio.currentTime == duration) {
		        pButton.className = "";
		        pButton.className = "play";
		    }
		}



		function getPosition(el) {
		    return el.getBoundingClientRect().left;
		}
}

