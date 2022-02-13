class Centaur {
  constructor(objName) {
    this.name = objName.name;
    this.breed = objName.type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.crankyLevel = 0;
  }

  shootBow() {
    this.crankyLevel++
    if (this.crankyLevel >= 3 || this.layingDown) {
      this.cranky = true;
      return `NO!`;
    }
      this.cranky = false;
      return `Twang!!!`;
  };

  run() {
    this.crankyLevel++
    if (this.crankyLevel >= 3 || this.layingDown) {
      this.cranky = true;
      return `NO!`;
    }
      this.cranky = false;
      return `Clop clop clop clop!!!`;
  };

  sleep() {
    if (this.standing) {
      return `NO!`
    } else {
      this.cranky = false;
      this.crankyLevel = 0;
      return `ZZZZ`;
    }
  };

  layDown() {
    this.standing = false;
    this.layingDown = true;
  };

  standUp() {
    this.standing = true;
    this.layingDown = false;
  };
  drinkPotion() {
    if (this.standing) {
      this.cranky = false;
    } else {
      return `Not while I'm laying down!`
    }
  }
}

module.exports = Centaur;
