## gn! HEAR 

This NFT can sense :)

This is an interactive NFT built with [p5.js](https://p5js.org/) and [p5.ble](https://itpnyu.github.io/p5ble-website/). It communicates with an [Arduino Nano 33 BLE Sense](https://docs.arduino.cc/hardware/nano-33-ble-sense). This is a small board that comes with different environment sensors: accelerometer, gyroscope, magnetometer, microphone, proximity, ambient light, colours, gestures, barometric pressure, relative humidity and temperature. In addition, you can run AI directly on it using TinyML and TensorFlow Lite.

The NFT and the Arduino are connected via Bluetooth Low Energy (BLE). The NFT acts as the BLE central and the Arduino board as the peripheral.

The code is specific to the particular device and the sensor data to be read. The Arduino must be prepared in the Arduino IDE beforhand by uploading the code in the directory "nano_ble_accelerometer". Then the serial monitor has to be activated. Then the NFT can initiate a BLE connection. When the device is connected, the sensor data can be read. 

## license

The code in index.html and sketch.js is released under the terms of the MIT license. Copyright @crcdng

p5.js copyright p5.js contributors is released under the GNU LESSER GENERAL PUBLIC LICENSE Version 2.1, February 1999

p5.ble copyright 2018 ML5.js is released under MIT License. 
