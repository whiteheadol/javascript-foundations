class Skater {
  constructor(skaterObj) {
    this.name = skaterObj.name;
    this.skill = skaterObj.skill;
    this.tricks = skaterObj.tricks;
    this.money = skaterObj.cash;
    this.frustration = 0;
  }

  practice(trickName) {
    if (!this.tricks.instanceOf(trickName)) {
      this.frustration++;
    }
  }
};

module.exports = Skater;
