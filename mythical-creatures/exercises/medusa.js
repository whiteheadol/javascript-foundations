var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(nameInput) {
    this.name = nameInput;
    this.statues = [];
  }

  gazeAtVictim(personObj) {
    var newStatue = new Statue(personObj.name);
    if (this.statues.length <= 2) {
      this.statues.push(newStatue);
    } else {
      this.statues.push(newStatue);
      return new Person(this.statues.shift().name, 'relieved');
    }
  }
};


//this.statues.push(new Statue(personObj.name))

module.exports = Medusa;
