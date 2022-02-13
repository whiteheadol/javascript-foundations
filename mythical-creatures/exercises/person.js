class Person {
  constructor(personName, mood) {
    this.name = personName;
    this.mood = mood || 'frightened';
  }
};

module.exports = Person;
