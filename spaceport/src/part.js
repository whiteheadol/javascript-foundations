class Part {
  constructor(part) {
    this.name = part.name;
    this.type = part.type;
    this.value = part.value;
    this.broken = false;
    this.isValid = false;
    this.checkForValidity = this.checkValidity();
  }

  checkValidity() {
    if (this.name && this.type && this.value) {
      this.isValid = true;
    } else if (!this.name) {
      return 'This part needs a name!';
    } else if (!this.type) {
      return 'This part needs a type!';
    } else {
      return 'This part needs a value!';
    }
  }
}

module.exports = Part;


// return (this.name) ? true : 'This part needs a name!';
// return (this.type) ? true : 'This part needs a type!';
