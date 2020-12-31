basic.forever(function () {
    if (input.lightLevel() > 100) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
    } else {
        basic.showLeds(`
            . # # . .
            # # . . .
            # # . . .
            # # # . .
            . # # # .
            `)
        basic.clearScreen()
    }
})
