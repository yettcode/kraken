function kraken () {
    hummingbird.setTriLED(
    TwoPort.One,
    255,
    0,
    0
    )
    hummingbird.setTriLED(
    TwoPort.Two,
    255,
    0,
    0
    )
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
    for (let index = 0; index < 99999999999 * 9999999999; index++) {
        drive()
    }
}
function drive () {
    if (hummingbird.getSensor(SensorType.Distance, ThreePort.One) < 5) {
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
    if (hummingbird.getSensor(SensorType.Sound, ThreePort.Two) >= 84) {
        kraken()
    }
})
basic.forever(function () {
    KRAKEN()
})
basic.forever(function () {
    light2()
})
