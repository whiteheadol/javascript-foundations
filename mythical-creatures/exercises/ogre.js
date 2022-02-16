class Ogre {
  constructor(ogreObj) {
    this.name = ogreObj.name;
    this.home = ogreObj.abode || 'Swamp';
    this.swings = 0;
  }

  encounter(humanObj) {
    humanObj.encounterCounter++;
    this.swingAt(humanObj);
  }

  swingAt(humanObj) {
    // if (humanObj.noticesOgre()) {
      this.swings++;
    // }
  }
}

module.exports = Ogre;
