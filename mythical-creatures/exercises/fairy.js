class Fairy {
  constructor(nameInput) {
    this.name = nameInput;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
    this.disposition = 'Good natured';
    this.humanWards = [];
  };

  receiveBelief() {
    this.dust++
  }

  believe() {
    this.dust += 10;
  }

makeDresses(flowers) {
  for (let i = 0; i < flowers.length ; i++) {
    this.clothes.dresses.push(flowers[i]);
  }
  console.log(this.clothes.dreses);
  }

  becomeProvoked() {
    this.disposition = 'Vengeful';
  }

  replaceInfant(infantObj) {
    if (this.disposition === 'Vengeful' && this.humanWards.length < 2) {
      infantObj.disposition = 'Malicious';
      this.humanWards.push(infantObj);
    } else {
      this.disposition = 'Good natured';
      return infantObj;
    }
  }
}

module.exports = Fairy;
