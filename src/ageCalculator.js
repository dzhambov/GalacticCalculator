export class Person {

  constructor(age) {
    this.age = age;
  } 
  
  constructorMercury() {
    let age = this.age;
    let mercuryAge = (age * .24);
    return mercuryAge;
  };
  
}