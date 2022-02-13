var Stark = require('./stark

class Direwolf {
  constructor(nameInput, homeInput, sizeInput) {
    this.name = nameInput;
    this.home = homeInput || 'Beyond the Wall';
    this.size = sizeInput || 'Massive';
    this.starksToProtect = [];
  };
  protect(objName) {
    this.starksToProtect.push(objName.name);
  }
};

module.exports = Direwolf;
