def light2():
    if hummingbird.get_sensor(SensorType.LIGHT, ThreePort.TWO) > 50:
        hummingbird.set_position_servo(FourPort.THREE, 90)
        basic.pause(100)
        hummingbird.set_position_servo(FourPort.THREE, 0)
        basic.pause(100)
        hummingbird.set_position_servo(FourPort.FOUR, 90)
        basic.pause(100)
        hummingbird.set_position_servo(FourPort.FOUR, 0)
    else:
        pass
def KRAKEN():
    if input.sound_level() > 250:
        hummingbird.set_tri_led(TwoPort.ONE, 200, 0, 0)
        hummingbird.set_tri_led(TwoPort.TWO, 200, 0, 0)
        hummingbird.set_led(ThreePort.ONE, 100)
        hummingbird.set_led(ThreePort.TWO, 100)
        hummingbird.set_led(ThreePort.THREE, 100)
    else:
        pass
hummingbird.start_hummingbird()

def on_forever():
    KRAKEN()
basic.forever(on_forever)

def on_forever2():
    light2()
basic.forever(on_forever2)
