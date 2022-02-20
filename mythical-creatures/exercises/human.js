class Human {
  constructor(nameInput) {
    this.name = nameInput;
    this.encounterCounter = 0;
    this.notices = false;
  }
  noticesOgre() {
    if (this.encounterCounter === 3 || this.encounterCounter === 6) {
      this.notices = true;
      return true;
    } else {
      this.notices = false;
      return false;
    }
  }
}

module.exports = Human;
