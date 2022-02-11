class Material {
  constructor(name, price, amount, units) {
    this.name = name;
    this.price = price;
    this.amount = amount;
    this.units = units;
  }
  useMaterial(amountUsed) {
    if (this.amount >= amountUsed) {
    return `You now have ${this.amount -= amountUsed} ${this.units} of ${this.name} left.`;
    } else {
    return `You don't have enough ${this.name}! Try using ${this.amount} ${this.units} or less.`
    }
  }
  calculateMaterialCost() {
    return this.amount * this.price;
  }
}

//You can structure useMaterial without an else statement if you reverse the order


module.exports = Material;
