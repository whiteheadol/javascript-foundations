class Sphinx {
  constructor() {
    this.name =
    this.riddles = [];
    this.heroesEaten = 0;
  }
  collectRiddle(riddle) {
    if (this.riddles.length < 3) {
      this.riddles.push(riddle);
    } else {
      this.riddles.splice(0, 1);
      this.riddles.push(riddle);
    }
  }
  attemptAnswer(answerInput) {
    for (var i = 0; i < this.riddles.length; i++) {
      if (this.riddles[i].answer === answerInput) {
        this.riddles.splice(i, 1);
        return `That wasn't that hard, I bet you don't get the next one`;
      }
        // var numRiddles = this.riddles.length;
        return (this.heroesEaten += this.riddles.length);
    }
  }
}

module.exports = Sphinx;
