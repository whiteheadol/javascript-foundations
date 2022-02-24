class Ship {
  constructor(ship) {
    this.name = ship.name;
    this.type = ship.type;
    this.maxCrew = ship.maxCrew;
    this.odometer = ship.odometer || 0;
    this.fuelCapacity = ship.fuelCapacity || 10;
    this.fuel = 0;
    this.captain = ship.captain;
    this.crew = [];
  }
  addCrew(crew) {
    for (var i = 0; i < crew.length; i++) {
      if (this.crew.length < this.maxCrew) {
        this.crew.push(crew[i]);
      }
    }
  }
};

// && typeof crew[i] === "object"
// typeof arr[i] != "string"
// && typeof i === "string"

module.exports = Ship;
