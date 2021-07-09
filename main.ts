namespace SpriteKind {
    export const Goat = SpriteKind.create()
    export const StackGoat = SpriteKind.create()
}
let goatImgs = [
img`
    . . . . . . . . . . . . f e e . 
    . . . . . . . . . . . . . e e . 
    . . . . . . . . . . . . d c d c 
    . . . . . . . . . . . . d d d d 
    e d d d d d d d d d d d d a d d 
    . d d d d d d d d d d d d d a a 
    . d d d d d d d d d d d d . . . 
    . d d d d d d d d d d d d . . . 
    . . d d d d d d d d d d . . . . 
    . . . d . d . . d . d . . . . . 
    . . . d . d . . d . d . . . . . 
    . . . e . e . . e . e . . . . . 
    `,
img`
    . . . . f f . . . . . . . . . . . . . 
    . . d f f d f . . . . . . . . . . . . 
    . 4 4 4 4 4 4 4 . . . . . . . . . . . 
    . . 1 4 4 1 . . . . . . . . . . . . . 
    . 4 4 4 4 4 4 . . . . . . . . . . . . 
    . 4 4 4 4 4 4 . . . . . . . . . . . . 
    4 4 4 2 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
    . 4 2 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    . . 2 . . 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
    . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
    . . . . . 4 2 4 2 2 2 2 2 2 2 2 2 . . 
    . . . . . 4 . 4 . . . . . 2 . 4 . . . 
    . . . . . 4 . 4 . . . . . 2 . 4 . . . 
    . . . . . 4 . 4 . . . . . 2 . 4 . . . 
    `,
img`
    . . . . . . . . b b d . . d d b . . . 
    . . . . . . . . b b b b b b b b . . . 
    . . . . . . . . . b b d b b d . . . . 
    . . . . . . . . . . b b b b b c . . . 
    . b . . . . . . . b b b b b b b . . . 
    . b . . . . b b b b b b b b b b . . . 
    . c b b b b b b b b b b . . . . . . . 
    . c b b b b b b b b b b . . . . . . . 
    . . c b b b b b b b b b . . . . . . . 
    . . c c b b b b b b b c . . . . . . . 
    . . c c c c c c c c c c . . . . . . . 
    . . c . b . . . c c c c . . . . . . . 
    . . c . b . . . . b . c . . . . . . . 
    . . c . b . . . . b . c . . . . . . . 
    `,
img`
    . . . . . . . . . . . . e . . e . . . 
    . . . . . . . . . . . e e e e e e . . 
    . . . . . . . . . . e e e e e e e e . 
    . . . . . . . . . e e e e c c c e e e 
    . . . . . . . . . . . . c c b c . . . 
    . . . c c c c c c c c c c f b f c . . 
    . . c c b b b b b b b b b f b f . . . 
    . . c b b b c c c b b b b b b c . . . 
    . c c b b c b b b b b b f b b c . . . 
    c c b b c b b b b b b b b f f f . . . 
    c b b b b b b b b b b b c c c . . . . 
    c c c c c c c c c c c c c . . . . . . 
    . . . . c . c . . . c . c . . . . . . 
    . . . . c . c . . . c . c . . . . . . 
    `,
img`
    . . . 1 . . . . . . . . . . . . . . 
    . . 1 c c c . . . . . . . . . . . . 
    . 1 1 1 1 c c . . . . . . . . . . 1 
    1 1 f 1 c 1 c c . . . . . . . . . 1 
    1 1 1 c 1 1 c c 1 1 1 1 1 1 1 1 1 1 
    1 1 1 c c c c 1 1 1 1 1 1 1 1 1 1 . 
    . . . 1 c c 1 1 1 1 1 1 1 1 1 1 1 . 
    . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . . . 1 . 1 . . . . . . . 1 . 1 . 
    . . . . 1 . 1 . . . . . . . 1 . 1 . 
    . . . . 1 . 1 . . . . . . . 1 . 1 . 
    . . . . 1 . 1 . . . . . . . 1 . 1 . 
    . . . . c . c . . . . . . . c . c . 
    `,
img`
    .........................
    ff.............ff...ff...
    .ff............ffffff....
    ..ff............ff2f2ffff
    ...f............fffffffff
    ...f............ffffff...
    ...ff2f2ffffffffffffff...
    ....f2f22fffffffff.......
    ....f2ff2fffffffff.......
    ....ff22ffffffffff.......
    ....ffffffffffffff.......
    ....fffffffff222ff.......
    ....ffffffff2ff2ff.......
    ....ffffffff22f2ff.......
    ....fffffffff222f........
    .....f...f...f..f........
    .....f...f...f..f........
    .....f...f...f..f........
    `
]
let newGoat: Sprite = null
let baseGoat = sprites.create(goatImgs._pickRandom(), SpriteKind.StackGoat)
const PIXELSTOMETRES = 30
baseGoat.ay = 9.81 * PIXELSTOMETRES
scene.cameraFollowSprite(baseGoat)
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level`)
tiles.placeOnTile(baseGoat, tiles.getTileLocation(5, 38))


function createNewGoat(){
    newGoat = sprites.create(goatImgs._pickRandom(), SpriteKind.StackGoat)
    newGoat.setPosition(randint(20, 140), baseGoat.y - 20)
    if(Math.percentChance(50)){
        newGoat.vx = 50
    } else {
        newGoat.vx = -50
    }
    newGoat.setFlag(SpriteFlag.BounceOnWall, true)
}
createNewGoat()