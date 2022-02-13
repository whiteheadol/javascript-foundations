class Stark {
  constructor(objName) {
    this.name = objName.name;
    this.location = objName.area || 'Winterfell';
  };
};

module.exports = Stark;
