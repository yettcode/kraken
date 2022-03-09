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
    if (input.soundLevel() > 125) {
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
        hummingbird.setTriLED(
        TwoPort.One,
        0,
        0,
        0
        )
        hummingbird.setTriLED(
        TwoPort.Two,
        0,
        0,
        0
        )
        hummingbird.setLED(ThreePort.One, 0)
        hummingbird.setLED(ThreePort.Two, 0)
        hummingbird.setLED(ThreePort.Three, 0)
    }
}
function light2 () {
    if (hummingbird.getSensor(SensorType.Light, ThreePort.Two) > 50) {
        hummingbird.setPositionServo(FourPort.Three, 90)
        hummingbird.setPositionServo(FourPort.Four, 90)
    } else {
        hummingbird.setPositionServo(FourPort.Three, 0)
        hummingbird.setPositionServo(FourPort.Four, 0)
    }
}
hummingbird.startHummingbird()
basic.forever(function () {
    if (hummingbird.getSensor(SensorType.Sound, ThreePort.Two) >= 225) {
        for (let index = 0; index < 99999999999 * 9999999999; index++) {
            music.playTone(139, music.beat(BeatFraction.Sixteenth))
            music.playTone(139, music.beat(BeatFraction.Sixteenth))
            music.playTone(139, music.beat(BeatFraction.Sixteenth))
            music.playTone(139, music.beat(BeatFraction.Sixteenth))
            music.playTone(139, music.beat(BeatFraction.Sixteenth))
            music.playTone(139, music.beat(BeatFraction.Sixteenth))
            music.playTone(139, music.beat(BeatFraction.Sixteenth))
            music.playTone(131, music.beat(BeatFraction.Eighth))
            music.playTone(139, music.beat(BeatFraction.Sixteenth))
            music.playTone(131, music.beat(BeatFraction.Sixteenth))
            drive()
        }
    }
})
basic.forever(function () {
    KRAKEN()
})
basic.forever(function () {
    light2()
})
