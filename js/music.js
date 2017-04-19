var audio = new Audio;
var array = new Array('audio/Jorge.mp3', 'audio/run.mp3')

var play1 = document.getElementById('play1')
var pause1 = document.getElementById('pause1')




var jukebox = new Jukebox()


play1.addEventListener('click', jukebox.play)
pause1.addEventListener('click', jukebox.pause)

function Jukebox(play, pause){
	this.play = function(){
	audio.src = array[0];
	audio.play()
	},
	this.pause = function() {
	audio.src = array[0];
	audio.pause()
	} 



}

