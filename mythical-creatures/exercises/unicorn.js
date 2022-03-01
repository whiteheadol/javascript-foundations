class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color || 'white';
  }

  isWhite() {
    if (this.color === 'white') {
      return true;
    } else {
      return false;
    }
  }

  says(phrase) {
    return `**;* ${phrase} *;**`;
  }
}

module.exports = Unicorn;

//1. Read the test
//2. Ask yourself if it's going to fail and why
//3. Run the test
//4. Make it pass

//assert.equal(actual, expected);
