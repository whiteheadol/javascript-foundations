class Human {
  constructor(nameInput) {
    this.name = nameInput;
    this.encounterCounter = 0;
  }
  noticesOgre() {
    if (this.encounterCounter === 3 || this.encounterCounter === 6) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Human;
