var jorge = new Song('Jorge','audio/Jorge.mp3')
var run = new Song('Running','audio/run.mp3')
var ukulele = new Song('Ukulele', 'audio/ukulele.mp3')
var extension = new Song('extension', 'audio/extension.mp3')
var arabesque = new Song('arabesque', 'audio/arabesque.mp3')
var blues = new Song('blues', 'audio/blues.mp3')
var eye = new Song('eye', 'audio/eye convergence.mp3')
var siberia = new Song('siberia', 'audio/siberia.mp3')
var snowflakes = new Song('snowflakes', 'audio/snowflakes.mp3')

var playButton = document.getElementById('play1')

var songs = [jorge, run, ukulele, extension, blues, arabesque, eye, siberia, snowflakes]


function Jukebox(){
	currentSong = 0;
	this.play = play;
	this.pause = stop;
	this.next = next;
	this.previous = previous;
	this.random = random;
}