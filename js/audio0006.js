const sampleURLs = ["assets/stems/choir bip_1.wav", "assets/stems/crystal impact repeat_1.wav", "assets/stems/crystal impact_1.wav", "assets/stems/drumz_1.wav", "assets/stems/mist pad_1.wav", "assets/stems/windows xp shutdown_1.wav"];

//create audio context
const audioContext = new AudioContext();

//setup analyser
const analyser = audioContext.createAnalyser();
analyser.fftSize = 128;

const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array( bufferLength );

analyser.getByteTimeDomainData( dataArray );

//setup a master gain
const masterGain = audioContext.createGain();
masterGain.connect( analyser );
masterGain.connect( audioContext.destination );

// setup Reverb
const reverb = new Reverb ({
	audioContext,
	url: "audio/impulses/space.wav"
})

masterGain.connect( reverb.input );
reverb.output.connect( audioContext.destination );


// polyphony
const voiceCount = 6;
let currentVoiceIndex = 0;
let voiceMap = new Map();

for( let i=0; i<voiceCount; i++ ){

	let voice =  new SynthVoice( { audioContext });
	voiceMap.set( i, voice );
	voice.output.connect( masterGain );

}

let currentVoice = voiceMap.get( currentVoiceIndex );

AudioBufferLoader.load( sampleURLs, audioContext )
	.then( buffers => {
		voiceMap.forEach( voice => {
			voice.buffers = buffers;
		})
	})

function setup() {

	createCanvas( windowWidth, windowHeight );

}

function keyPressed() {

	switch( keyCode ) {
		case 49://1
			setOscillator( "sine" );
			break;
		case 50://2
			setOscillator( "square" );
			break;
		case 51://3
			setOscillator( "sawtooth" );
			break;
		case 52://4
			setOscillator( "triangle" );
			break;
		case 53://5
			setLFOOscillator( "sine" );
			break;
		case 54://6
			setLFOOscillator( "square" );
			break;
		case 55://7
			setLFOOscillator( "sawtooth" );
			break;
		case 56://8
			setLFOOscillator( "triangle" );
			break;
	}

  console.log( "key pressed", keyCode );

}

function setOscillator( value ) {

	voiceMap.forEach( voice => {

		voice.oscillator.type = value;

	});

}

function setLFOOscillator( value ) {

	voiceMap.forEach( voice => {

		voice.lfo.oscillator.type = value;

	});

}

function startVoice( sampleId ){

	currentVoiceIndex = ( currentVoiceIndex + 1 ) % voiceCount;
	currentVoice = voiceMap.get( currentVoiceIndex );
	currentVoice.start( sampleId, (mouseX / windowWidth ));

}

function stopVoice(){

	currentVoice.stop();

}

function mousePressed(){

	startVoice( Math.floor( Math.random() * sampleURLs.length ));

}

function mouseReleased() {

	stopVoice();

}

function draw() {

	if( mouseIsPressed ) {
		currentVoice.lfo.oscillator.frequency.value = 50 * ( mouseX / windowWidth );
		currentVoice.lfo.depth.gain.value = ( mouseY / windowHeight );
	}

	fill( 255, 255, 255, 127 );
	rect( 0, 0, windowWidth, windowHeight );

	fill( 0 );

	//draw waveform
	let x = 0;
	let sliceWidth = windowWidth / bufferLength;

	analyser.getByteTimeDomainData( dataArray );

	for( var i = 0; i < bufferLength; i++ ) {

		let v = ( dataArray[ i ] / 128 );

		ellipse( i * sliceWidth, windowHeight * .5, 5, 50 * v );

	}

	ellipse( mouseX, mouseY, 80, 80 );



}
