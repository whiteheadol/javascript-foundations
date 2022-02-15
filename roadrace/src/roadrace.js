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
    // var newRunner = new Runner();
    // return racer.runRace(this.name, this.distance);
    return runner.completedRaces.push(this.name);
  }
}

module.exports = Roadrace;
