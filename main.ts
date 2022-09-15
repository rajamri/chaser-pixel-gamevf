function Animation_led () {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 0)
        basic.pause(100)
    }
    for (let index = 0; index <= 4; index++) {
        led.plot(4, index)
        basic.pause(100)
    }
    i = 4
    while (i >= 0) {
        led.plot(i, 4)
        basic.pause(100)
        i += -1
    }
    i = 4
    while (i >= 0) {
        led.plot(0, i)
        basic.pause(100)
        i += -1
    }
}
input.onButtonPressed(Button.A, function () {
    game.resume()
    count = 0
})
function reculer () {
    if (sprite.get(LedSpriteProperty.X) == 0 && sprite.get(LedSpriteProperty.Y) == 4 || sprite.get(LedSpriteProperty.X) == 4 && sprite.get(LedSpriteProperty.Y) == 4 || sprite.get(LedSpriteProperty.X) == 4 && sprite.get(LedSpriteProperty.Y) == 0 || sprite.get(LedSpriteProperty.X) == 0 && sprite.get(LedSpriteProperty.Y) == 0) {
        sprite.turn(Direction.Right, -90)
        sprite.move(-1)
        basic.pause(400)
    } else {
        sprite.move(-1)
        basic.pause(400)
    }
}
input.onButtonPressed(Button.AB, function () {
    if (sprite.isTouching(coin)) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        game.addScore(1)
        Créer_Coin()
        basic.pause(200)
        Créer_Ennemy()
    } else {
        game.gameOver()
    }
})
function Créer_Ennemy () {
    ennemy.set(LedSpriteProperty.X, Math.abs(coin.get(LedSpriteProperty.Y) - 4))
    ennemy.set(LedSpriteProperty.Y, Math.abs(coin.get(LedSpriteProperty.X) - 4))
    if (coin.get(LedSpriteProperty.X) == ennemy.get(LedSpriteProperty.X) && coin.get(LedSpriteProperty.X) == ennemy.get(LedSpriteProperty.X)) {
        ennemy.set(LedSpriteProperty.X, Math.abs(coin.get(LedSpriteProperty.X) - 3))
    }
}
function Créer_Coin () {
    liste = [
    0,
    1,
    2,
    3,
    4
    ]
    if (liste._pickRandom() == 0 || liste._pickRandom() == 4) {
        coin.set(LedSpriteProperty.X, list._pickRandom())
        coin.set(LedSpriteProperty.Y, randint(0, 4))
    } else {
        coin.set(LedSpriteProperty.X, randint(0, 4))
        coin.set(LedSpriteProperty.Y, list._pickRandom())
    }
}
input.onButtonPressed(Button.B, function () {
    count = 1
})
function avancer () {
    if (sprite.get(LedSpriteProperty.X) == 0 && sprite.get(LedSpriteProperty.Y) == 4 || sprite.get(LedSpriteProperty.X) == 4 && sprite.get(LedSpriteProperty.Y) == 4 || sprite.get(LedSpriteProperty.X) == 4 && sprite.get(LedSpriteProperty.Y) == 0 || sprite.get(LedSpriteProperty.X) == 0 && sprite.get(LedSpriteProperty.Y) == 0) {
        sprite.turn(Direction.Right, 90)
        sprite.move(1)
        basic.pause(400)
    } else {
        sprite.move(1)
        basic.pause(400)
    }
}
let liste: number[] = []
let i = 0
let ennemy: game.LedSprite = null
let coin: game.LedSprite = null
let sprite: game.LedSprite = null
let list: number[] = []
let count = 0
Animation_led()
basic.pause(1000)
count = 0
list = [0, 4]
sprite = game.createSprite(0, 0)
coin = game.createSprite(list._pickRandom(), randint(1, 4))
coin.set(LedSpriteProperty.Brightness, 255)
coin.set(LedSpriteProperty.Blink, 200)
ennemy = game.createSprite(randint(1, 4), list._pickRandom())
ennemy.set(LedSpriteProperty.Brightness, 155)
music.setBuiltInSpeakerEnabled(true)
basic.forever(function () {
    if (count % 2 == 1) {
        avancer()
    } else {
        reculer()
    }
})
basic.forever(function () {
    while (sprite.isTouching(ennemy)) {
        game.gameOver()
    }
})
