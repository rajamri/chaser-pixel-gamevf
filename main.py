def on_button_pressed_a():
    global count
    game.resume()
    count = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def reculer():
    if sprite.get(LedSpriteProperty.X) == 0 and sprite.get(LedSpriteProperty.Y) == 4 or sprite.get(LedSpriteProperty.X) == 4 and sprite.get(LedSpriteProperty.Y) == 4 or sprite.get(LedSpriteProperty.X) == 4 and sprite.get(LedSpriteProperty.Y) == 0 or sprite.get(LedSpriteProperty.X) == 0 and sprite.get(LedSpriteProperty.Y) == 0:
        sprite.turn(Direction.RIGHT, -90)
        sprite.move(-1)
        basic.pause(500)
    else:
        sprite.move(-1)
        basic.pause(500)

def on_button_pressed_ab():
    if sprite.get(LedSpriteProperty.X) == coin.get(LedSpriteProperty.X) and sprite.get(LedSpriteProperty.Y) == coin.get(LedSpriteProperty.Y):
        game.add_score(1)
        coin.set(LedSpriteProperty.DIRECTION, 90)
        coin.move(randint(0, 4))
    else:
        game.game_over()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global count
    count = 1
input.on_button_pressed(Button.B, on_button_pressed_b)

def avancer():
    if sprite.get(LedSpriteProperty.X) == 0 and sprite.get(LedSpriteProperty.Y) == 4 or sprite.get(LedSpriteProperty.X) == 4 and sprite.get(LedSpriteProperty.Y) == 4 or sprite.get(LedSpriteProperty.X) == 4 and sprite.get(LedSpriteProperty.Y) == 0 or sprite.get(LedSpriteProperty.X) == 0 and sprite.get(LedSpriteProperty.Y) == 0:
        sprite.turn(Direction.RIGHT, 90)
        sprite.move(1)
        basic.pause(500)
    else:
        sprite.move(1)
        basic.pause(500)
coin: game.LedSprite = None
sprite: game.LedSprite = None
count = 0
game.pause()
count = 0
sprite = game.create_sprite(0, 0)
list2 = [0, 4]
list_sprite = [game.create_sprite(list2._pick_random(), randint(0, 4)),
    game.create_sprite(randint(0, 4), list2._pick_random())]
coin = list_sprite._pick_random()
coin.set(LedSpriteProperty.BRIGHTNESS, 128)
coin.set(LedSpriteProperty.BLINK, 200)

def on_forever():
    if count % 2 == 1:
        avancer()
    else:
        reculer()
basic.forever(on_forever)
