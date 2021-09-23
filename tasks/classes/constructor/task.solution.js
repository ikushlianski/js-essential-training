export class Human_Solution {
  constructor(eyeColor) {
    this.eyeColor = eyeColor;
  }

  walk() {
    console.log('I am walking');
  }

  talk() {
    const sentence = `My eye color is ${this.eyeColor}`;

    return sentence
  }
}
