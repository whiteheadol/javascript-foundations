class Golfer {
  constructor(golferObj) {
    this.name = golferObj.name;
    this.handicap = golferObj.handicap;
    this.frustration = 0;
    this.confidence = 0;
  }

  calculateAvg(par) {
    return `I usually shoot a ${this.handicap + par} on average.`;
  }

  playRound(golfCourseInput) {
    if (golfCourseInput.difficulty === 'hard') {
      return this.frustration = 500;
    } else {
      return this.frustration = 100;
    }
  }
  hitTheRange() {
    return this.confidence += 10;
  }
  marvel(moreGolfCourseInput) {
    return `I love the ${moreGolfCourseInput.features[0]} and ${moreGolfCourseInput.features[1]} on this course!`;
  }
  whatYaShoot(scoreInput) {
    if (scoreInput < 0) {
      this.frustration = 0;
      return `I AM THE GREATEST GOLFER ALIVE!`;
    } else if (scoreInput === 0) {
      this.frustration = 10;
      return `Booyah!`;
    } else {
      this.frustration += 20;
      return `Doh!`;
    }
  }
}

module.exports = Golfer;
