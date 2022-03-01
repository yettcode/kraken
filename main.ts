hummingbird.startHummingbird()
music.setBuiltInSpeakerEnabled(true)
basic.forever(function () {
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
})
basic.forever(function () {
	
})
