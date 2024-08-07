/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: mini wario
@author: Shaibal Haque
@tags: []
@addedOn: 2024-00-00
*/

/* setting constants will assign sprites to these later  */
const player = "p"
const duck = "d"
const bg_street = "s"
const bg_op = "o"
const building = "b"
/* end of assigning variables */

/* setting sprites for all the variable */
setLegend(
  [ player, bitmap`
................
......HHHHH.....
......H2H2H.....
......HHHHH.....
......HHHHH.....
....888HHH888...
....H88HHH888...
....HH8HHH8H8...
....HH88H88H8...
....HH88888HH...
....2.88888.....
......88.8H.....
......88.8H.....
......H8.8H.....
......HH.HH.....
................` ],
  [ duck, bitmap`
.....FFFFF......
.....FFH0F......
....FFF60F6.....
...FFFFC33......
...FFFFC333.....
...F66661FFF....
...F6666HFFF....
..2F6666F6FF....
..6FF666F66F....
..6FF666F666....
..6FFF66F.66....
...FFFFFF.......
...FFFFFF.......
....9..9........
....99.99.......
................` ],
  [ bg_street, bitmap`
7777777777777777
7777777777722277
7777777772222227
7222277772222222
2222222277112227
1222222277777777
7112221777777777
7777777777777777
7777777777777777
7777777777777777
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
1111111111111111
LLLLLLLLLLLLLLLL
L66LLL66LL66LL66
LLLLLLLLLLLLLLLL` ],
  [ bg_op, bitmap`
................
................
................
................
.............2..
.....00000...2..
....00LLL00.....
....0221220.....
....0321320.....
.00LLL111LLL00..
.0LLLLL1LLLLL0..
.0L000LLL000L0..
.0L0.00000.0L0..
.000.00.00.000..
.....11.11......
....000.000.....` ],
  [ building, bitmap`
................
................
....L0LLLL0L....
....1L1717L1....
....1L1515L1....
....1L1717L1....
....1L1515L1....
....1L1717L1....
....1L1515L1....
....1L1717L1....
....CCCCCCCC....
....CCCCCCCC....
................
................
................
................` ]
)
/* end sprite assignment */

/* setting the solid objects */
setSolids([player, bg_op, duck])
/*end solid objects*/

/* setting maps */
let level = 0
const levels = [
  map`
sddddsss
sdssdsss
sdssssss
sddddsss
ssssdsss
ssddssss
sdsssssb`
]

setMap(levels[level])
/* end setting maps */

/* objects that can be pushed */
setPushables({
  [ player ]: [bg_op, duck]
})
/* end pushables */

/* adjust key setting */
onInput("s", () => {
  getFirst(player).y += 1
})
onInput("w", () => {
  getFirst(player).y -= 1
})
onInput("a", () => {
  getFirst(player).x -= 1
})
onInput("d", () => {
  getFirst(player).x += 1
})
onInput("j", () => {
  setMap(levels[level])
})
/* end adjusting key settings */

/* reset button text */
addText("Press J to reset", { x: 2, y: 7, color: '9' })
/* reset button text end */

/*rest is for winning the game */
afterInput(() => {
  clearText()
  if (tilesWith(player, building).length >= 1) {
    addText("Game won", { x: 2, y: 7, color: '9' })
  }
})

