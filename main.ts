let WRONG_TEMP = false
let DRY = false
pins.digitalWritePin(DigitalPin.P1, 0)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > 800) {
        basic.showString("I'm thirsty")
        DRY = true
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(10000)
    } else {
        DRY = false
    }
    if (input.temperature() < 20) {
        basic.showString("I'm too cold")
        WRONG_TEMP = true
    } else if (input.temperature() > 30) {
        basic.showString("I'm too hot")
        WRONG_TEMP = true
    } else {
        WRONG_TEMP = false
    }
    if (DRY == false && WRONG_TEMP == false) {
        basic.showIcon(IconNames.Happy)
    }
})
