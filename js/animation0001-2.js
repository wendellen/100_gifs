window.addEventListener("load", ()=>{
  const audioContext = new AudioContext();
  const triggerLevel = 0.99;

  //setup analyser
  const analyser = audioContext.createAnalyser();
  analyser.fftSize = 128;

  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array( bufferLength );

  analyser.getByteTimeDomainData( dataArray );

  var audioElement = document.querySelector("#my-audio");
  console.log(audioElement);
  var source = audioContext.createMediaElementSource(audioElement);

  source.connect(analyser);
  source.connect(audioContext.destination)

  animate();

  function animate() {

    let didTrigger = false;

  	analyser.getByteTimeDomainData( dataArray );

  	for( var i = 0; i < bufferLength; i++ ) {

  		let v = ( dataArray[ i ] / 128 );
      if (v > triggerLevel) {
        didTrigger = true;
      }
  	}
    if (didTrigger) {
      shape.stop();
      shape.play();
    }

    console.log(didTrigger)
    window.requestAnimationFrame(animate);
  }
})


var shape = new mojs.Shape({
  shape: 'circle',
  scale: {0:3},
  duration: 2000,
  easing: 'cubic.out',
  repeat: 0
});
