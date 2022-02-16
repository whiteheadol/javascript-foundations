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
      if (answerInput === this.riddles[i].answer && this.riddles.length > 1) {
        this.riddles.splice(i, 1);
        return `That wasn't that hard, I bet you don't get the next one`;
      } else if (answerInput === this.riddles[i].answer && this.riddles.length === 1) {
        this.riddles.splice(i, 1);
        return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answerInput}"???`;
      }
    }
    return this.heroesEaten++;
  }
}

module.exports = Sphinx;
