// var Stark = require('./stark')

class Direwolf {
  constructor(nameInput, homeInput, sizeInput) {
    this.name = nameInput;
    this.home = homeInput || 'Beyond the Wall';
    this.size = sizeInput || 'Massive';
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  };
  protect(starkObj) {
    // var newStark = new Stark(starkObj);
    if (this.home === starkObj.location && this.starksToProtect.length < 2) {
      this.starksToProtect.push(starkObj);
      starkObj.safe = true;
      this.huntsWhiteWalkers = false;
    }
  }
  leave(starkObj) {
    for(let i = 0; i <= this.starksToProtect.length; i++) {
      if (starkObj === this.starksToProtect[i]) {
        this.starksToProtect.splice(i, 1);
        starkObj.safe = false;
      };
    };
  }
};

module.exports = Direwolf;
