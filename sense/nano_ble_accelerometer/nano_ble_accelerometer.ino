#include <ArduinoBLE.h>
#include <Arduino_LSM9DS1.h>

BLEService accelerometerService("19b10000-e8f2-537e-4f6c-d104768a1214");

BLEStringCharacteristic firstCharacteristic("19b10010-e8f2-537e-4f6c-d104768a1214",  
    BLERead | BLENotify, 50); 

void setup() {
  Serial.begin(9600);    

  pinMode(LED_BUILTIN, OUTPUT); 

  if (!BLE.begin()) {
    Serial.println("Starting BLE failed!");

    while (1);
  }
  if (!IMU.begin()) {
    Serial.println("Failed to initialize IMU!");
    while (1);
  }
  Serial.print("Accelerometer sample rate = ");
  Serial.print(IMU.accelerationSampleRate());
  Serial.println(" Hz");
  Serial.println();
  BLE.setLocalName("Accelerometer");
  BLE.setAdvertisedService(accelerometerService); 
  accelerometerService.addCharacteristic(firstCharacteristic); 
  BLE.addService(accelerometerService); 
  BLE.advertise();
  Serial.println("Bluetooth device active, waiting for connections...");
}

void loop() {
  BLEDevice central = BLE.central();
  if (central) {
    Serial.print("Connected to central: ");
    Serial.println(central.address());
    digitalWrite(LED_BUILTIN, HIGH);

    while (central.connected()) {
        updateAcceleration();
    }
    digitalWrite(LED_BUILTIN, LOW);
    Serial.print("Disconnected from central: ");
    Serial.println(central.address());
  }
}

void updateAcceleration() {
  float x, y, z;

  if (IMU.accelerationAvailable()) {
    IMU.readAcceleration(x, y, z);
    String accelerometerData = String(x)+"|"+String(y)+"|"+String(z);
    Serial.println(accelerometerData);
    firstCharacteristic.writeValue(accelerometerData);
  }
}
