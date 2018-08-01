export class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  propsToLower() {
    this.line1 = this.line1.toLowerCase();
    this.line2 = this.line2.toLowerCase();
    this.line3 = this.line3.toLowerCase();
  }
  propsOnlyLetters(){
    let val = this.line1;
    let letters = /^[a-zA-Z]+$/;

    if (!val.match(letters))
    {
      alert('Only alphabets are allowed');
      return false;
    }
    return true;
  }
  vowelFinder(){
    let answer = 0;
    let vowel = this.line1.split("");
    for (let i = 0; i < vowel.length; i++) {
      if ((vowel[i] == "a") || (vowel[i] == "e") || (vowel[i] == "i") || (vowel[i] == "o") || (vowel[i] == "u")) {
        answer++;
      } //return index position of aeiou
    }
    // console.log(answer);
    return answer;
  }
  diphthongFinder(){
    let syll = 0;
    let vowels = /[aeiouy]/gi;
    //let vowels = ["a", "e", "i", "o", "u", "y"];
    let line = this.line1.split("");
    for (var i = 1; i <= line.length-2; i++) {
      if( line[i] && line[i + 1] && line[i - 1].match(vowels)){
        syll++;
      }
      // console.log(line.indexOf("a"));
      return syll;
      //if i, i+1 AND i-1 are all vowels.
      //if i AND i+1 are all vowels.
      //if i AND i-1 are all vowels.
      //if i is a vowel.
      // if( line[i] && line[i + 1] && line[i - 1].match(vowels[i])){
    }
  }
  dip2(){
    let syl = 0;
    let reg = /[aeiouy]/gi;
    let vowels = ["a", "e", "i", "o", "u", "y"];
    let str = this.line1.split("");
    let vowel_start = 0;

    for (var i = 0; i < str.length; i++){
      if ((vowels.indexOf(str[i])) != -1){
         vowel_start = i;

      } if (str[vowel_start] && str[vowel_start + 1].match(reg)) {
        console.log(vowel_start);

        syl++;
        console.log(syl);
      }
return syl;
    }


  }
}
