class Runner {
  constructor(nameInput, ageInput) {
    this.name = nameInput;
    this.age = ageInput;
    this.milesRun = 0;
    this.fitness = 25;
    this.completedRaces = [];
  };

  runSomeMiles(milesInput) {
    this.fitness += milesInput;
    return this.milesRun += milesInput;
  };

  stretch() {
    return this.fitness += 0.5;
  };

  runRace(raceName, raceMiles) {
    this.completedRaces.push(raceName);
    this.fitness += raceMiles;
    this.milesRun += raceMiles;
  };
}

module.exports = Runner;
