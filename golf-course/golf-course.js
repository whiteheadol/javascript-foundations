class GolfCourse {
  constructor(name, difficulty, openings, features) {
    this.name = name;
    this.difficulty = difficulty;
    this.openings = openings;
    this.features = features;
    this.currentlyPlaying = [];
  }

  checkInGroup(group) {
    for (var i = 0; i < group.length; i++) {
      if (this.openings >= group.length) {
        this.currentlyPlaying.unshift(group[i].name);
      } else {
        return `Sorry, we are currently booked! Please come back later.`;
      }
    }
    this.openings -= group.length;
    return `You're checked in. Have fun!`;
  }
}

module.exports = GolfCourse;
