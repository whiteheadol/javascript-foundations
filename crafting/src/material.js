class Material {
  constructor(materialType, price, amount, unitType) {
    this.name = materialType;
    this.price = price;
    this.amount = amount;
    this.units = unitType;
  }

  useMaterial(amountUsed) {
    if (this.amount >= amountUsed) {
      this.amount -= amountUsed;
      return `You now have ${this.amount} ${this.units} of ${this.name} left.`;
    } else {
      return `You don't have enough ${this.name}! Try using ${this.amount} ${this.units} or less.`;
    }
  }

  calculateMaterialCost() {
    return this.amount * this.price;
  }
}

//You can structure useMaterial without an else statement if you reverse the order
module.exports = Material;
