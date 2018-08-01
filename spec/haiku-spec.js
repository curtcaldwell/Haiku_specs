import { Haiku } from './../src/haiku.js';

describe('Haiku', function() {
    it('should return to lowercase', function() {
      let haiku = new Haiku("WHEY", "Hey", "TO");
      haiku.propsToLower();
      expect(haiku.line1).toEqual("whey");
      expect(haiku.line2).toEqual("hey");
      expect(haiku.line3).toEqual("to");
    });
    it('should return only letters', function() {
      let haiku = new Haiku("WHEY-", "Hey", "TO");
      expect(haiku.propsOnlyLetters()).toEqual(false);
    });
    it('should count and return all vowels in line', function() {
      let haiku = new Haiku("apple", "ball", "cat");
      expect(haiku.vowelFinder()).toEqual(2);
    });
    it('should count diphthongs as single syllable', function() {
      let haiku = new Haiku("yeah", "ball", "cat");
      expect(haiku.diphthongFinder()).toEqual(1);
    });
    it('should still count diphthongs as single syllable', function() {
      let haiku = new Haiku("great", "ball", "cat");
      expect(haiku.dip2()).toEqual(1);
    });
});
