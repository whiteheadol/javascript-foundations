var Direwolf = require('./direwolf')

class Stark {
  constructor(objName) {
    this.name = objName.name;
    this.location = objName.area || 'Winterfell';
    this.safe = false;
  };

  sayHouseWords() {
    if (this.safe) {
      return `The North Remembers`;
    }
      return `Winter is Coming`;
  }

  callDirewolf(nameInput, homeInput) {
    var newDirewolf = new Direwolf(nameInput, homeInput);
    newDirewolf.home = this.location;
    this.safe = true;
    newDirewolf.protect(this);
    return newDirewolf;
  }
};

module.exports = Stark;
