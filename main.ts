function light2 () {
    if (hummingbird.getSensor(SensorType.Light, ThreePort.Two) > 50) {
        hummingbird.setPositionServo(FourPort.Three, 90)
        basic.pause(100)
        hummingbird.setPositionServo(FourPort.Three, 0)
        basic.pause(100)
        hummingbird.setPositionServo(FourPort.Four, 90)
        basic.pause(100)
        hummingbird.setPositionServo(FourPort.Four, 0)
    } else {
    	
    }
}
function KRAKEN () {
    if (input.soundLevel() > 250) {
        hummingbird.setTriLED(
        TwoPort.One,
        200,
        0,
        0
        )
        hummingbird.setTriLED(
        TwoPort.Two,
        200,
        0,
        0
        )
        hummingbird.setLED(ThreePort.One, 100)
        hummingbird.setLED(ThreePort.Two, 100)
        hummingbird.setLED(ThreePort.Three, 100)
    } else {
    	
    }
}
hummingbird.startHummingbird()
basic.forever(function () {
    KRAKEN()
})
basic.forever(function () {
    light2()
})
