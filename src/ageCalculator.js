export class Person {

  constructor(age) {
    this.age = age;
  };
  
  calculateMercuryAge(age) {
    let mercuryAge = parseInt(Math.round(age / 0.24));
    return mercuryAge;
  };

  calculateVenusAge(age) {
    let venusAge = parseInt(Math.round(age / 0.62));
    return venusAge;
  };
  
  calculateMarsAge(age) {
    let marsAge = parseInt(Math.round(age / 1.88));
    return marsAge;
  };
  
  calculateJupiterAge(age) {
    let JupiterAge = parseInt(Math.round(age / 11.86));
    return JupiterAge;
  };
  
  calcEarthLifeSpan() {
    const earthLE = 78;
    const leftToLive = (earthLE - this.age);
    const livedPast = (this.age - earthLE);
      if (this.age <= earthLE) {
        return "Stay strong " + leftToLive;
      } else {
        return "Good job " + livedPast;
      };
  }

  calcMercuryLifeSpan() {
    const earthLE = 78;
    const leftToLive = parseInt(Math.round(earthLE - this.age) / 0.24);
    const livedPast = parseInt(Math.round(this.age - earthLE) / 0.24);
      if (this.age <= earthLE) {
        return "Stay strong " + leftToLive;
      } else {
        return "Good job " + livedPast;
      };
  }
}