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
    it('should count first 3 vowels of string as 1 syllable', function() {
      let haiku = new Haiku("yeah", "ball", "cat");
      expect(haiku.diphthongFinder()).toEqual(1);
    });
    it('should count 2 consecutive vowels as 1 syllable', function() {
      let haiku = new Haiku("great meek", "ball", "cat");
      expect(haiku.dip2()).toEqual(2);
    });
    it('should count words with silent e and the end of string as one syllable', function() {
      let haiku = new Haiku("time", "ball", "cat");
      expect(haiku.silentEend()).toEqual(1);
    });
    it('should count words with silent e as one syllable in any part of string', function() {
      let haiku = new Haiku("silent", "ball", "cat");
      expect(haiku.silentE()).toEqual(1);
    });
    it('should count 5 syllables in line 1', function() {
      let haiku = new Haiku("many is your name heliot", "ball", "cat");
      expect(haiku.masterF()).toEqual(8);
    });
});
// dip2(){
//   let syl = 0;
//   let reg = /[aeiouy]/gi;
//   let vowels = ["a", "e", "i", "o", "u", "y"];
//   let str = this.line1.split("");
//
//   for (let i = 0; i < str.length; i++){
//     if ((vowels.indexOf(str[i])) != -1 && vowels.indexOf(str[i+1]) != -1){
//       syl++;
//       //console.log(str);
//     }
//   }
//   //console.log(syl);
//   return syl;
// }
