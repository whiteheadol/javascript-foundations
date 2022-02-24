class VendingMachine {
  constructor(machine) {
    this.id = machine.id;
    this.isBroken = machine.isBroken;
    this.snacks = [];
  }

  addSnacks(snack) {
    this.snacks.push(snack);
  }

  // addSnacks(snack) {
  //   for (var i = 0; i < this.snacks.length; i++) {
  //     if (snack.name === this.snacks[i].name) {
  //     return
  //   } else {
  //     return this.snacks.push(snack);
  //     }
  //   }
  // }
}

module.exports = VendingMachine;
