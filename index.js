const Fighter = require('./src/Fighter'); 

const Heracles = new Fighter ("Heracles", 20, 6, '🧔');

const NemeanLion = new Fighter ("Nemean Lion", 11, 13, '🦁');

let round = 1

while (Heracles.life !== 0 && NemeanLion.life !== 0) {
    console.log('🕛 Round ' + round)
Heracles.fight(NemeanLion)
NemeanLion.fight(Heracles)

Heracles.isAlive(NemeanLion)
NemeanLion.isAlive(Heracles)

round += 1

}