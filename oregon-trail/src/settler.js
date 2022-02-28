class Settler {
  constructor(settler) {
    this.name = settler.name;
    this.age = settler.age;
    this.nationality = settler.nationality || 'unknown';
    this.status = 'healthy';
    this.ailments = [];
  }

  experienceDistress(distress) {
    if (this.ailments.length === 0) {
      this.ailments.push(distress);
      this.status = 'fair';
    } else if (this.ailments.length === 1) {
      this.ailments.push(distress);
      this.status = 'poor';
    } else if (this.ailments.length === 2) {
      this.ailments.push(distress);
      this.status = 'dead';
    }
  }

  heal() {
    if (this.status !== 'dead') {
      this.ailments = [];
      this.status = 'healthy';
    } else {
      return `Sorry, we can't heal a corpse. ${this.name} needs a proper burial!`;
    }
  }
}


module.exports = Settler;
