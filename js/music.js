var audio = new Audio;

var play1 = document.getElementById('play1')
var pause1 = document.getElementById('pause1')
var next1 = document.getElementById('next1')
var songList = document.getElementById('songList')
var songWrapperLeft = document.getElementById('songWrapperLeft')

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

var ferdinand = new Song('Ferdinand', 'audio/Fredinand.wav')
var jean = new Song('Jean', 'audio/Jean.wav')
var mandarin = new Song('Mandarin', 'audio/Mandarin.wav')
var panair = new Song('Panair', 'audio/panair.wav')
var second = new Song('Second', 'audio/Second.wav')
var convergence = new Song('Convergence', 'audio/convergence.wav')
var darky = new Song('Darky', 'audio/darky.wav')
var echoes = new Song('Echoes', 'audio/Echoes.wav')
var organ = new Song('Organ', 'audio/organ.wav')

var songs = [jorge, run, ukulele, extension, blues, arabesque, eye, siberia, snowflakes]
var songs2 = [ferdinand, jean, mandarin, panair, second, convergence, darky, echoes, organ]

$(document).ready(function() {
  for (i=0;i<songs.length;i++) {
    var song = document.createElement("h3");
    song.innerText = songs[i].name;
    songWrapperLeft.appendChild(song, songWrapperLeft);
  }

  for (i=0;i<songs2.length;i++) {
    var song = document.createElement("h3");
    song.innerText = songs2[i].name;
    songWrapperRight.appendChild(song, songWrapperRight);
  }


  songStrings = [];
  var songNames = $("h3");


  $.each(songNames, function(index, value) {
    songStrings.push(value.innerText)
  });
  
  

  $("h3").click(function() {
    currentSong = songStrings.indexOf(this.innerText);
    	changeColor(currentSong)
    jukebox.play();
    jukebox.timeLineRepresentation()
  })
})
 function changeColor(song){
 	h3 = document.getElementsByTagName('h3')
 	h3[song].style.color = 'brown'
 }

function Song(name, fileName){
	this.name = name;
	this.fileName = fileName;
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
	changeColor(currentSong)
	for(var i=0;i<songs2.length;i++){
		songs.push(songs2[i])	
	}
	audio.src = songs[currentSong].fileName;

		audio.play()
	setTimeout(function(){
		audio.duration
	}, 100)

}



function stop() {
	changeColorBack(currentSong)
	audio.src = songs[currentSong].fileName;
	audio.pause()
}


function changeColorBack(song){
	h3 = document.getElementsByTagName('h3')
 	h3[song].style.color = 'black'
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
}

function timeLineRepresentation(){
		var totalLength = timeline.offsetWidth - playhead.offsetWidth
		audio.addEventListener('timeupdate', timeUpdate)

		audio.addEventListener("canplaythrough", function() {
		    duration = audio.duration;
		}, false);

		timeline.addEventListener('click', function(event){
			moveplayhead(event)
		   audio.currentTime = duration * clickPercent(event);
		}, false);

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
		    
		    if(playhead.style.marginLeft === totalLength+ 'px'){
		    	next()
		    }
		    
		}


		function getPosition(el) {
		    return el.getBoundingClientRect().left;
		}
}



// this is the video

var theater = document.getElementById('theater')
var vid = document.getElementById('myVideo')

var video = new Video();

// theater.addEventListener('click', video.play)
// theater.addEventListener('click', video.pause)
theater.addEventListener('click', video.changeVisibility)



function Video(){
	this.play = playVideo;
	this.pause = pauseVideo;
	this.changeVisibility = changeVisibility;
}


function playVideo(){
	console.log(vid)
	vid.play()
}

function pauseVideo(){	
	vid.pause()
}

function changeVisibility(){
	
 $("body").animate({"scrollTop": window.scrollY+300}, 1500);

	if(vid.style.display === 'block'){
		vid.style.display = 'none'
	}else
	vid.style.display = 'block'
}



