var audio = new Audio;

var play1 = document.getElementById('play1')
var pause1 = document.getElementById('pause1')
var next1 = document.getElementById('next1')




var jukebox = new Jukebox()


play1.addEventListener('click', jukebox.play)
pause1.addEventListener('click', jukebox.pause)
next1.addEventListener('click', jukebox.next)
previous1.addEventListener('click', jukebox.previous)

var jorge = new Song('Jorge','audio/Jorge.mp3')
var run = new Song('Running','audio/run.mp3')
var songs = [jorge, run]

function Song(name, fileName, art){
	this.name = name;
	this.fileName = fileName;
	this.art = art;
}

function Jukebox(play, pause, next){
	currentSong = 0;
	this.play = function(){

	audio.src = songs[currentSong].fileName;
	audio.play()
	console.log(currentSong)
	},
	this.pause = function() {
	audio.src = songs[currentSong].fileName;
	audio.pause()
	console.log(currentSong)
	},
	 this.next = function(){
	 	if(currentSong == songs.length - 1){
	 		currentSong = 0;
	 		audio.src = songs[currentSong].fileName;
	 		audio.play()
	 		console.log(currentSong)
	 	}else{
	 		currentSong = currentSong +  1;
	 		audio.src = songs[currentSong].fileName;
	 		audio.play()
	 		console.log(currentSong)
	 	}
	 	

	 },
	 this.previous = function(){
	 	currentSong -= currentSong;
	 	audio.src = songs[currentSong].fileName;
	 		audio.play()
	 		console.log(currentSong)
	 }



}

