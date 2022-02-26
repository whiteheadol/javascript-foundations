class Bag {
  constructor() {
    this.empty = true;
    this.count = 0;
    this.candies = [];
  }

  fill(candy) {
    this.count++;
    this.candies.push(candy);
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
}

module.exports = Bag;
