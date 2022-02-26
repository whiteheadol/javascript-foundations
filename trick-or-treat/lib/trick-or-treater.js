class TrickOrTreater {
  constructor(costume, bag) {
    this.dressedUpAs = costume.style;
    this.bag = bag;
    this.hasCandy = false;
    this.countCandies = 0;
  }

  putCandyInBag(candy) {
    this.countCandies++;
    this.hasCandy = true;
    this.bag.fill(candy);
  }

  eat() {
    this.countCandies--;
    this.bag.candies.pop();
  }
}

module.exports = TrickOrTreater;
