class VendingMachine {
  constructor(machine) {
    this.id = machine.id;
    this.isBroken = machine.isBroken;
    this.snacks = [];
  }

  addSnacks(snack) {
    for (var i = 0; i <= this.snacks.length; i++) {
      if (this.snacks.length === 0 || snack !== this.snacks[i]) {
        this.snacks.push(snack);
      }
    }
  }
}

//Check the < vs <= more often, or more quickly
//Not good practice to compare two objects, use .name instead of thte entire objects
//Primitives always preferred when comparing

module.exports = VendingMachine;
