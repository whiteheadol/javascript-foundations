class Fairy {
  constructor(nameInput) {
    this.name = nameInput;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
  };

  receiveBelief() {
    this.dust++
  }

  believe() {
    this.dust += 10;
  }

makeDresses() {
  for (let i = 0; i < arguments.length ; i++) {
    this.clothes.dresses.push(i);
  }
  console.log(this.clothes.dreses);
}

  // makeDresses(...arguments) {
  //   for (let arguments[i] of arguments) {
  //     // return this.clothes.dresses += i;
  //     this.clothes.dresses.push(i);
  //   }
  //   console.log(this.clothes);
  // };

  // makeDresses([]) {
  //   for (var i = 0; i < arguments.length; i++) {
  //     this.clothes.dresses.push(arguments[i]);
  //   }
  //   return(this.clothes.dresses);
  // }

//   makeDresses(...flowers) {
//     for (var i = 0; i < flowers.length; i++) {
//       this.clothes.dresses.push(flowers[i]);
//   }
// };

//   var print_names = function(...names) {
//     for (let i=0; i<names.length; i++) console.log(names[i]);
// }
}

module.exports = Fairy;
