class Wagon {
  constructor(wagon) {
    this.title = wagon.name;
    this.wheels = wagon.wheels || [];
    this.axles = wagon.axles || [];
    this.oxen = wagon.oxen || [];
    this.yokes = wagon.yokes || [];
    this.food = wagon.food;
    this.ammunition = wagon.ammunition;
    this.clothes = wagon.clothes;
    this.settlers = wagon.settlers || [];
  }

  addPart(part) {
    if (part.type === 'wheel') {
      this.wheels.push(part);
    } else if (part.type === 'axle') {
      this.axles.push(part);
    } else if (part.type === 'ox') {
      this.oxen.push(part);
    } else if (part.type === 'yoke') {
      this.yokes.push(part);
    }
  }

  canTravel() {
    if (this.wheels.length > 3 && this.axles.length > 1 && this.oxen.length > 1
    && this.yokes.length > 0 && this.settlers.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Wagon;

// this[`part.type`].push(part);
// if (part.type === this[part]) {
//   this[part].push(part);
// }
