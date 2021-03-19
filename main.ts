controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, spacePlane, 200, 0)
})
info.onLifeZero(function () {
    music.bigCrash.play()
    game.over(false, effects.blizzard)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 100)
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
    music.zapped.play()
})
let bogey: Sprite = null
let projectile: Sprite = null
let spacePlane: Sprite = null
info.setLife(3)
spacePlane = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 5 5 8 8 8 8 8 . . . . . . . . 
    . 5 8 8 8 8 8 8 8 8 . . . . . . 
    . . . . . 8 8 . . . . . . . . . 
    . . . . . . 8 . . . . . . . . . 
    . . . . . 8 8 8 8 8 8 8 8 8 2 . 
    . . . . 8 8 2 2 2 2 2 2 2 2 8 2 
    . . . . . 8 8 8 8 8 8 8 8 8 2 . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(spacePlane, 200, 200)
spacePlane.setStayInScreen(true)
game.onUpdateInterval(500, function () {
    bogey = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 3 . . 3 3 3 3 . . . 
        . . . . . f 1 5 f f 5 5 . . . . 
        . . . . 6 6 6 1 6 f f c . . . . 
        . . . . . f 1 5 f f 5 5 . . . . 
        . . . . 1 1 3 . . 3 3 3 3 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(160, randint(5, 115))
    bogey.setFlag(SpriteFlag.AutoDestroy, false)
})
