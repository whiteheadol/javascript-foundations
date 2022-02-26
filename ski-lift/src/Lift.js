var Skier = require('./Skier');

class Lift {
  constructor(limit) {
    this.inService = true;
    this.limit = limit;
    this.skiers = [];
    this.safetyBar = 'up';
  }

  admitSkier(skierName, ticketStatus) {
    var newSkier = new Skier(skierName, ticketStatus)
    if (this.skiers.length < this.limit && newSkier.hasLiftTicket) {
      this.skiers.push(newSkier);
    } else if (this.skiers.length >= this.limit && newSkier.hasLiftTicket){
      return `Sorry, ${newSkier.name}. Please wait for the next lift!`;
    } else if (!newSkier.hasLiftTicket) {
      return `Sorry, ${newSkier.name}. You need a lift ticket!`;
    }
  }

  startLift() {
    if (this.skiers.length === this.limit) {
      this.safetyBar = 'down';
    } else if ((this.limit - this.skiers.length) === 1) {
      return `We still need 1 more skier!`;
    } else {
      return `We still need ${this.limit - this.skiers.length} more skiers!`;
    }
  }
}

module.exports = Lift;
