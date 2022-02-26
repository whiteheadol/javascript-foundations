class Skier {
  constructor(skierName, ticketStatus) {
    this.name = skierName;
    this.hasLiftTicket = ticketStatus;
    this.skillLevel = 1;
    this.nextSlope = 'green circle';
  }

  takeLesson() {
    this.skillLevel++;
  }

  pickSlope() {
    if (this.skillLevel >= 4) {
      this.nextSlope = 'black diamond';
    } else if (this.skillLevel >= 3) {
      this.nextSlope = 'blue square';
    }
  }
}

module.exports = Skier;
