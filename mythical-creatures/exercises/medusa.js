var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(nameInput) {
    this.name = nameInput;
    this.statues = [];
  }
  gazeAtVictim(victim) {
    this.statues.push(victim.name);
  }
};


module.exports = Medusa;
