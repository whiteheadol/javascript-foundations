class Ogre {
  constructor(ogreObj) {
    this.name = ogreObj.name;
    this.home = ogreObj.abode || 'Swamp';
    this.swings = 0;
  }

  encounter(humanObj) {
    humanObj.encounterCounter++;
    if (humanObj.notices = true) {
      this.swingAt(humanObj);
    }
  }

  swingAt(humanObj) {
      this.swings++;
  }
}

module.exports = Ogre;
