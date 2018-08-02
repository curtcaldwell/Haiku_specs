export class Haiku {
  constructor(line1) {
    console.log(line1);
    this.line1 = line1;
  }
  propsToLower() {
    this.line1 = this.line1.toLowerCase();
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
      if ((vowel[i] == "a") || (vowel[i] == "e") || (vowel[i] == "i") || (vowel[i] == "o") || (vowel[i] == "u") || (vowel[i] == "y")) {
        answer++;
      }
    }
    return answer;
  }
  diphthongFinder(){
    let syll = 0;
    let vowels = /[aeiouy]/gi;
    let line = this.line1.split("");
    for (let i = 1; i <= line.length-2; i++) {
      if( line[i] && line[i + 1] && line[i - 1] && line[i].match(vowels)){
        syll++;
      }
      return syll;
    }
  }
  dip2(){
    let syl = 0;
    let reg = /[aeiouy]/gi;
    let vowels = ["a", "e", "i", "o", "u", "y"];
    let str = this.line1.split("");

    for (let i = 0; i < str.length; i++){
      if((vowels.indexOf(str[i - 1])) === -1 && vowels.indexOf(str[i+2]) === -1
      && (vowels.indexOf(str[i])) != -1 && vowels.indexOf(str[i+1]) != -1){
        syl++;
      }
    }
    return syl;
  }
  silentEend(){
    let beat = 0;
    let regg = /[aeiouy]/gi;
    let vowelss = ["a", "e", "i", "o", "u", "y"];
    let strr = this.line1.split("");

    for (let i = 0; i < strr.length; i++){
      if ((vowelss.indexOf(strr[i])) != -1 && strr[i+2] === vowelss[1] && (i+2) === strr.length-1){
        beat++;
      }
    }
    return beat;
  }
  silentE(){
    let beat = 0;
    let regg = /[aeiouy]/gi;
    let vowelss = ["a", "e", "i", "o", "u", "y"];
    let strr = this.line1.split("");

    for (let i = 0; i < strr.length; i++){
      if ((vowelss.indexOf(strr[i])) != -1 && strr[i+2] === vowelss[1] && strr.length-1){
        beat++;
      }
    }
    return beat;
  }
  masterF(){
    console.log("MASTER IS CALLED");
    let beat = this.silentE();
    let answer = this.dip2();
    let dip = this.diphthongFinder();
    let counter = this.vowelFinder();
    let end = this.silentEend();

    console.log(counter);
    console.log(dip);
    console.log(answer);
    console.log(beat);
    console.log(end);
    return counter - (beat + end + answer + dip*2);
  }
}
