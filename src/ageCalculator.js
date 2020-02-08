export class Person {

  constructor(age) {
    this.age = age;
  } 
  
  calculateMercuryAge() {
    let age = this.age;
    let mercuryAge = ((age * 0.24));
    return mercuryAge;
  };
  
}