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
    if (hummingbird.getSensor(SensorType.Distance, ThreePort.One) < 5) {
        hummingbird.setTriLED(
        TwoPort.Two,
        0,
        0,
        255
        )
        hummingbird.setLED(ThreePort.Two, 100)
        hummingbird.setLED(ThreePort.Three, 100)
        KRAKEN()
        blink()
        hummingbird.setRotationServo(FourPort.One, -100)
        basic.pause(1000)
        hummingbird.setRotationServo(FourPort.One, 100)
        hummingbird.setRotationServo(FourPort.Two, -100)
    } else {
        hummingbird.setRotationServo(FourPort.One, 100)
        hummingbird.setRotationServo(FourPort.Two, -100)
    }
}
function KRAKEN () {
    music.playTone(139, music.beat(BeatFraction.Whole))
    music.playTone(131, music.beat(BeatFraction.Half))
    music.playTone(139, music.beat(BeatFraction.Half))
    music.playTone(131, music.beat(BeatFraction.Whole))
    music.playTone(139, music.beat(BeatFraction.Whole))
    music.playTone(139, music.beat(BeatFraction.Whole))
    music.playTone(139, music.beat(BeatFraction.Whole))
    music.playTone(131, music.beat(BeatFraction.Half))
    music.playTone(139, music.beat(BeatFraction.Half))
    music.playTone(131, music.beat(BeatFraction.Whole))
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
basic.forever(function () {
	
})
basic.forever(function () {
    if (hummingbird.getSensor(SensorType.Sound, ThreePort.Two) >= 84) {
        kraken()
    }
})
basic.forever(function () {
    light2()
})
