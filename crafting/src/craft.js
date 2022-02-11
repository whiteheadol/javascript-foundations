class Craft {
  constructor(craftObj) {
    this.name = craftObj.type;
    this.materials = craftObj.materials;
    this.completed = false;
  }
  completeCraft() {
    this.completed = true;
    return "All done! It looks great!";
  }
  calculateProjectTotal() {
    var totalCost = 0;
    for (var i =0; i < this.materials.length; i++) {
      totalCost += this.materials[i].calculateMaterialCost();
    }
    return totalCost;
  }
}

//this.materials[i] is an instance of the Material class and
//has access to everything inside of that Material class

//import the other file in the first file you call the instance
module.exports = Craft;
