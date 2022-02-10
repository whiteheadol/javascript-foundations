// class Vampire {
//   constructor(name, pet) {
//     this.name = name;
//     this.ouncesDrank = 0;
//     if (pet === undefined) {
//      this.pet = 'bat'
//     } else {
//      this.pet = pet;
//     }
//     this.thirsty = true;
//
//  };
//  drink() {
//   if (this.ouncesDrank === 0) {
//     this.thirsty = true;
//   } else if (this.ouncesDrank < 50) {
//     this.thirsty = false;
//     this.ouncesDrank += 10;
//   } else {
//     return "I'm too full to drink anymore!";
//   }
//  }
// };

class Vampire {
  constructor(name, pet) {
    this.name = name;
    this.ouncesDrank = 0;
    if (pet === undefined) {
      ///try (!pet) instead or pet || 'bat'
     this.pet = 'bat'
    } else {
     this.pet = pet;
    }
    this.thirsty = true;

 };
 drink() {
  if (this.ouncesDrank < 50) {
    this.thirsty = false;
    this.ouncesDrank += 10;
  } else {
    return "I'm too full to drink anymore!";
  }
 }
};

// class Vampire {
//   constructor(name, pet) {
//     this.name = name;
//     this.ouncesDrank = 0;
//     if (pet === undefined) {
//      this.pet = 'bat'
//     } else {
//      this.pet = pet;
//     }
//     this.thirsty = true;
//
//  };
// drink() {
//   for (var i = this.ouncesDrank; i <= 50; i+=10) {
//   if (i === 0) {
//     this.thirsty = true;
//   } else if (0 < i < 50) {
//     this.thirsty = false;
//   } else {
//     return "I'm too full to drink anymore!";
//    }
//   }
//  }
// };



module.exports = Vampire;
