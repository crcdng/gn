let capture;
let objects = [];
let objectDetector;

function setup() {
  createCanvas(640, 480);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();
  text('loading data model', width/2, height/2);
  objectDetector = ml5.objectDetector('cocossd', { filterBoxesThreshold: 0.01, IOUThreshold: 0.4, classProbThreshold: 0.4 }, modelLoaded);
}

function draw() {
  
  if (!capture.loadedmetadata) return;
  objectDetector.detect(capture, (err, results) => {
    objects = results;
    console.log(results); // Will output bounding boxes of detected objects
  });
  image(capture, 0, 0, width, height);
  for (let i = 0; i < objects.length; i += 1) {
    noStroke();
    fill(0, 255, 0);
    text(objects[i].label, objects[i].x + 5, objects[i].y + 15);
    noFill();
    strokeWeight(4);
    stroke(0, 255, 0);
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
  }
}

function modelLoaded() {
  console.log('Model Loaded!');
}
