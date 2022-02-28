var assert = require('chai').assert;
var Gear = require('../src/gear.js');

describe('Gear', function() {
  it('should have a type', function() {
    var food = new Gear('food');
    var ammunition = new Gear('ammunition');

    assert.equal(food.type, 'food');
    assert.equal(ammunition.type, 'ammunition');
  });

  it('should be able to have a quantity', function () {
    var food = new Gear('food', 10);
    var clothes = new Gear('clothes', 12);

    assert.equal(food.quantity, 10);
    assert.equal(clothes.quantity, 12);
  });

  // valid types are food, ammunition, and clothes
  it('should not be able to have an invalid type', function() {
    var ammunition = new Gear('ammunition');
    var food = new Gear('food');
    var clothes = new Gear('clothes');
    var invalid = new Gear('mp3 player');

    var validWhenChecked = ammunition.checkForValidity();
    var notValidWhenChecked = invalid.checkForValidity();

    assert.equal(validWhenChecked, 'Great, we\'ll need lots of ammunition!');
    assert.equal(notValidWhenChecked, 'I don\'t think a mp3 player will help us.');

    assert.equal(ammunition.type, 'ammunition');
    assert.equal(food.type, 'food');
    assert.equal(clothes.type, 'clothes');
    assert.equal(invalid.type, null);
  });
})
