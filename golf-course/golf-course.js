class GolfCourse {
  constructor(nameInput, difficultyInput, openingsInput, featuresInput) {
    this.name = nameInput;
    this.difficulty = difficultyInput;
    this.openings = openingsInput;
    this.features = featuresInput;
    this.currentlyPlaying = [];
  }
  checkInGroup(groupInput) {
    for (var i = 0; i < groupInput.length; i++) {
      if (this.openings >= groupInput.length) {
        this.currentlyPlaying.unshift(groupInput[i].name);
      } else {
        return `Sorry, we are currently booked! Please come back later.`;
      }
    }
      this.openings -= groupInput.length;
      return `You're checked in. Have fun!`;
  }
}

module.exports = GolfCourse;
