radio.onReceivedString(function (receivedString) {
    if (receivedString == "go") {
        music.playTone(988, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            . # . # .
            # . # . #
            `)
    } else if (receivedString == "stop") {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
radio.setGroup(41)
basic.forever(function () {
	
})
