let amplitude, fft, mic, recorder, soundFile, state;
const soundFileName = 'recording.wav';

function setup() {
  let cnv = createCanvas(500, 500);
  cnv.mousePressed(canvasPressed);
  textAlign(CENTER);
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  recorder = new p5.SoundRecorder();
  recorder.setInput(mic);
  amplitude = new p5.Amplitude();
  amplitude.setInput(mic);
  soundFile = new p5.SoundFile();
  state = 0;
  console.log('Click to start.');
}

function draw() {
  let spectrum = fft.analyze();
  let waveform = fft.waveform();
  let level = amplitude.getLevel();

  background(255);
  if (state === 0) {
    background(255);
    fill(0);
    text('click to start', width/2, height/2);
    return;
  }
  else if (state === 2) {
    background(255, 0, 0);
  }
  else if (state === 3) {
    background(0, 255, 0);
  }
  else if (state === 4) {
    background(0);
  }  

  fill(255, 0, 255);
  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, h)
  }

  beginShape();
  stroke(20);
  for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length, 0, width);
    let y = map(waveform[i], -1, 1, 0, height);
    vertex(x, y);
  }
  endShape();
  
  fill(22, 255, 17);
  let size = map(level, 0, 1, 0, 1200);
  ellipse(width/2, height/2, size, size);
}

function canvasPressed() {
  userStartAudio();
  if (state === 0 && mic.enabled) {
    console.log('Click to record.');
    state++;
  } else if (state === 1 && mic.enabled) {
    console.log('Recording! Click again to stop.');
    recorder.record(soundFile);
    state++;
  }
  else if (state === 2) {
    console.log('Recording done.');
    console.log('Click to play the recording.');
    recorder.stop();
    state++;
  }
  else if (state === 3) {
    console.log('Playing the recording.');
    console.log('Done. Reload the page to start over.');
    soundFile.play();
    state++;
  }
}