import { Person } from '../src/ageCalculator.js';

describe ('Person', () => {
  let userPerson;
  
  beforeEach(() => {
    userPerson = new Person(45);
  });

  test('should show how old is the person on Earth', () => {
    expect(userPerson.age).toEqual(45);
  });
  test('should show how old is the person on Mercury', () => {
    expect(userPerson.calculateMercuryAge(45)).toEqual(10.799999999999999);
  });
});