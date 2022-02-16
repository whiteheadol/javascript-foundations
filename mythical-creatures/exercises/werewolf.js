var Victim = require('./victim');

class Werewolf {
  constructor(nameInput) {
    this.name = nameInput;
    this.form = 'human';
    this.hungry = false;
  }

  completeTransformation() {
    if (this.form === 'human') {
      this.form = 'wolf';
      this.hungry = true;
      return `Aaa-Woooo!`;
    } else {
      this.form = 'human';
      this.hungry = false;
      return `Where are I?`;
    }
  };

  eatVictim(victim) {
    if(this.hungry && this.form === 'wolf') {
      victim.alive = false;
      this.form = 'human';
      return `Yum, ${victim.name} was delicious.`
    }
    return `No way am I eating ${victim.name}, I'd like a burger!`;
  };
}

module.exports = Werewolf;
