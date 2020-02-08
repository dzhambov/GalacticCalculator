export class Person {

  constructor(age) {
    this.age = age;
  };
  
  calculateMercuryAge(age) {
    let mercuryAge = parseInt(Math.round(age * 0.24));
    return mercuryAge;
  };

  calculateVenusAge(age) {
    let venusAge = parseInt(Math.round(age * 0.62));
    return venusAge;
  };
  
  calculateMarsAge(age) {
    let marsAge = parseInt(Math.round(age * 1.88));
    return marsAge;
  };
  
  calculateJupiterAge(age) {
    let JupiterAge = parseInt(Math.round(age * 11.86));
    return JupiterAge;
  };
  
}