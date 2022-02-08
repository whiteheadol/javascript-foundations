class Unicorn {
  constructor(name, color) {
    this.name = name;
    if (color === undefined) {
      this.color = 'white';
    } else {
    this.color = color;
    }
  }
  isWhite() {
    if (this.color !== 'white') {
      return false;
      }
    }

  says(message) {
    return`**;* ${message} *;**`;
  }
  };

// class Unicorn {
//   constructor(name, color) {
//     this.name = name;
//     if (color === undefined) {
//       this.color = 'white';
//     } else {
//     this.color = color;
//     }
//   }
//   isWhite() {
//     // if (this.color === 'white') {
//     //   return true;
//     // } else {
//     //   return false;
//     }
//   }
// }

module.exports = Unicorn;

//1. Read the test
//2. Ask yourself if it's going to fail and why
//3. Run the test
//4. Make it pass

//assert.equal(actual, expected);
