class Ship {
  constructor(ship) {
    this.name = ship.name;
    this.type = ship.type;
    this.maxCrew = ship.maxCrew;
    this.odometer = ship.odometer || 0;
    this.fuelCapacity = ship.fuelCapacity || 10;
    this.fuel = 0;
    this.captain = captain;
    // this.captain = captain.name;
  }
}

module.exports = Ship;
