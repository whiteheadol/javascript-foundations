var Runner = require('./runner.js')

class Roadrace {
  constructor(raceObj) {
    this.name = raceObj.title;
    this.location = raceObj.city;
    this.distance = 0;
    this.participants = [];
  }

  setDistance(distanceInput) {
    this.distance = distanceInput;
    return `The ${this.name} in ${this.location} is a ${this.distance} mile race.`;
  }

  registerParticipants(racerObj) {
    return this.participants.push(racerObj);
  }

  completeRace() {
    // console.log(this.participants);
    for (var i = 0; i < this.participants.length; i++) {
      this.participants[i].runRace(this.name, this.distance);
    }
  }
}

module.exports = Roadrace;
