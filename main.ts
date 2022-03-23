function blink () {
    hummingbird.setPositionServo(FourPort.Three, 180)
    hummingbird.setPositionServo(FourPort.Four, 180)
    basic.pause(500)
    hummingbird.setPositionServo(FourPort.Four, 90)
    hummingbird.setPositionServo(FourPort.Four, 90)
    basic.pause(500)
    hummingbird.setPositionServo(FourPort.Three, 180)
    hummingbird.setPositionServo(FourPort.Four, 180)
    basic.pause(100)
    hummingbird.setPositionServo(FourPort.Three, 90)
    hummingbird.setPositionServo(FourPort.Four, 90)
}
function kraken () {
    hummingbird.setTriLED(
    TwoPort.One,
    255,
    0,
    0
    )
    hummingbird.setLED(ThreePort.One, 100)
    for (let index = 0; index < 99999999999 * 9999999999; index++) {
        drive()
    }
}
function drive () {
    if (hummingbird.getSensor(SensorType.Distance, ThreePort.One) < 10) {
        music.playTone(131, music.beat(BeatFraction.Half))
        hummingbird.setRotationServo(FourPort.One, 100)
        basic.pause(5000)
        hummingbird.setRotationServo(FourPort.One, -100)
        hummingbird.setRotationServo(FourPort.Two, 100)
    } else {
        hummingbird.setRotationServo(FourPort.One, -100)
        hummingbird.setRotationServo(FourPort.Two, 100)
    }
}
function KRAKEN () {
	
}
function light2 () {
    if (hummingbird.getSensor(SensorType.Light, ThreePort.Three) > 50) {
        hummingbird.setPositionServo(FourPort.Three, 180)
        hummingbird.setPositionServo(FourPort.Four, 180)
    } else {
        hummingbird.setPositionServo(FourPort.Three, 90)
        hummingbird.setPositionServo(FourPort.Four, 90)
    }
}
hummingbird.startHummingbird()
music.setTempo(30)
music.setVolume(255)
basic.forever(function () {
    hummingbird.setTriLED(
    TwoPort.Two,
    0,
    0,
    255
    )
    hummingbird.setLED(ThreePort.Two, 100)
})
basic.forever(function () {
    if (hummingbird.getSensor(SensorType.Sound, ThreePort.Two) >= 75) {
        KRAKEN()
        kraken()
    }
})
basic.forever(function () {
    light2()
})
