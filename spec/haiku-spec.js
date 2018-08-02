import { Haiku } from './../src/haiku.js';

describe('Haiku', function() {
    it('should return to lowercase', function() {
      let haiku = new Haiku("WHEY");
      haiku.propsToLower();
      expect(haiku.line1).toEqual("whey");
    });
    it('should return only letters', function() {
      let haiku = new Haiku("WHEY-");
      expect(haiku.propsOnlyLetters()).toEqual(false);
    });
    it('should count and return all vowels in line', function() {
      let haiku = new Haiku("apple");
      expect(haiku.vowelFinder()).toEqual(2);
    });
    it('should count first 3 vowels of string as 1 syllable', function() {
      let haiku = new Haiku("yeah");
      expect(haiku.diphthongFinder()).toEqual(1);
    });
    it('should count 2 consecutive vowels as 1 syllable', function() {
      let haiku = new Haiku("great meek");
      expect(haiku.dip2()).toEqual(2);
    });
    it('should count words with silent e and the end of string as one syllable', function() {
      let haiku = new Haiku("time");
      expect(haiku.silentEend()).toEqual(1);
    });
    it('should count words with silent e as one syllable in any part of string', function() {
      let haiku = new Haiku("silent");
      expect(haiku.silentE()).toEqual(1);
    });
    it('should count 5 syllables in line 1', function() {
      let haiku = new Haiku("happy birthday to you");
      expect(haiku.masterF()).toEqual(6);
    });
});
