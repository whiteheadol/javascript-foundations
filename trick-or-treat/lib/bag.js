class Bag {
  constructor() {
    this.empty = true;
    this.count = 0;
    this.candies = [];
  }

  fill(candy) {
    this.candies.push(candy);
    this.count++;
  }

  contains(candyType) {
    for (var i = 0; i < this.candies.length; i++) {
      if (candyType === this.candies[i].type) {
        return true;
      } else {
        return false;
      }
    }
  }
};

module.exports = Bag;
