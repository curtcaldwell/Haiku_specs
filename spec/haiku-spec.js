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
      let haiku = new Haiku("great meek", "ball", "cat");
      expect(haiku.dip2()).toEqual(2);
    });
    it('should count words with silent e as one syllable', function() {
      let haiku = new Haiku("time", "ball", "cat");
      expect(haiku.silentEend()).toEqual(1);
    });
    it('should count words with silent e as one syllable', function() {
      let haiku = new Haiku("silent", "ball", "cat");
      expect(haiku.silentE()).toEqual(1);
    });
    it('should count 5 syllables in line 1', function() {
      let haiku = new Haiku("yeah page great apple shine", "ball", "cat");
      expect(haiku.masterF()).toEqual(6);
    });
});
// for (let i = 0; i < strr.length; i++){
//   if ((vowelss.indexOf(strr[i])) != -1 &&  strr[i+2] === strr.length-1 && strr.length-1 === vowelss[1]){
//     beat++;
//   }
