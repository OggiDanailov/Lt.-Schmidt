var audio = new Audio;
var array = new Array('audio/Jorge.mp3', 'audio/run.mp3')

var play1 = document.getElementById('play1')
var pause1 = document.getElementById('pause1')


function play(){
	audio.src = array[0];
	audio.play()
}

function pause() {
	audio.src = array[0];
	audio.pause()
}


play1.addEventListener('click', play)
pause1.addEventListener('click', pause)
