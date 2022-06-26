const serviceUuid = "19b10000-e8f2-537e-4f6c-d104768a1214"; // accelorameter

let myCharacteristic;
let myValue = 0;
let myBLE;

function setup() {
  myBLE = new p5ble();

  createCanvas(200, 200);
  textSize(20);
  textAlign(CENTER, CENTER);

  const connectButton = createButton("Connect");
  connectButton.mousePressed(connectToBle);
}

function connectToBle() {
  myBLE.connect(serviceUuid, gotCharacteristics);
}

function gotCharacteristics(error, characteristics) {
  if (error) console.log("error: ", error);
  console.log("characteristics: ", characteristics);
  myCharacteristic = characteristics[0];
  myBLE.read(myCharacteristic, gotValue);
}

function gotValue(error, value) {
  if (error) console.log("error: ", error);
  console.log("value: ", value);
  myValue = value;
  myBLE.read(myCharacteristic, gotValue);
}

function draw() {
  background(250);
  text(myValue, 100, 100);
}
