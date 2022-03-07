input.onGesture(Gesture.Shake, function () {
    basic.showString("Ask a Question")
    basic.pause(8000)
    number = randint(0, 7)
    if (number == 0) {
        basic.showString("Yes!")
    } else if (number == 1) {
        basic.showString("No")
    } else if (number == 2) {
        basic.showString("Maby")
    } else if (number == 3) {
        basic.showString("Not a Chance")
    } else if (number == 4) {
        basic.showString("Possibly")
    } else if (number == 5) {
        basic.showString("Probable")
    } else if (number == 6) {
        basic.showString("No Way!")
    } else {
        basic.showString("Absolutely!")
    }
})
let number = 0
number = 0
