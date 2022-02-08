class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.meals = 0;
    this.hungry = true;
  }
   greet() {
     return `Hi, ${this.rider}!`;
   }
   eat() {
     this.meals++;
      if (this.meals > 2) {
      this.hungry = false;
    } else {
      this.hungry = true;
    }
   }
 }



module.exports = Dragon;
