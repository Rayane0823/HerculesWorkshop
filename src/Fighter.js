/* Fighter class definition */



const MAX_LIFE = 100

class Fighter {
constructor (name, strength, dexterity, emoji, life) {
    this.name = name
    this.strength = strength
    this.dexterity = dexterity
    this.emoji = emoji
    this.life = MAX_LIFE
}
 fight(defender) {
    let degats = Math.round(Math.random() * this.strength);
    if (degats <= 1) {
        degats = 1;
    }
    if (degats - defender.dexterity > 0) {
        defender.life = defender.life - (degats - defender.dexterity)
        if (defender.life < 0) {
            defender.life = 0
        }
        return console.log(`${this.emoji} ${this.name} ⚔️ ${defender.emoji} ${defender.name} 💙 ${defender.life}`)
    }
    
    return console.log(`${this.emoji} ${this.name} ⚔️ ${defender.emoji} ${defender.name} 💙 ${defender.life}`)
}



isAlive(defender) {
    const results =  `💀 ${this.name} est mort, 🏆 ${defender.name} l'a tué !`
    
    if (this.life <= 0) {
        return console.log(results)
          
        
    }
}
}


module.exports = Fighter