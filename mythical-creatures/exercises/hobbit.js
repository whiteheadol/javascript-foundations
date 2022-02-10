class Hobbit {
  constructor({name}) {
    this.name = name;
    this.age = 0;
    this.adult = true;
    this.old = false;
    this.hasRing = false;
  }
celebrateBirthday() {
  this.age++;
  if (this.age < 33) {
    this.adult = false;
  } else if (this.age < 101) {
    this.adult = true;
  } else {
    this.old = true;
  }
  }
  getRing() {
    if (this.name === "Frodo") {
      this.hasRing = true;
      return "Here is the ring!";
    } else {
      return "You can't have it!";
    }
  }
};


module.exports = Hobbit;
