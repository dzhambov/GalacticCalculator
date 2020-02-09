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
    expect(userPerson.calculateMercuryAge(45)).toEqual(11);
  });

  test('should show how old is the person on Venus', () => {
    expect(userPerson.calculateVenusAge(45)).toEqual(28);
  });

  test('should show how old is the person on Mars', () => {
    expect(userPerson.calculateMarsAge(45)).toEqual(85);
  });
  
  test('should show how old is the person on Jupiter', () => {
    expect(userPerson.calculateJupiterAge(45)).toEqual(534);
  });

  test('should show how many years the user has left to live or has lived past the life expectancy', () => {
    expect(userPerson.calcEarthLifeSpan()).toEqual("Stay strong 33");
  });

  test('should show how many years the user has left to live or has lived past the life expectancy on Mercury', () => {
    expect(userPerson.calcEarthLifeSpan()).toEqual("Stay strong 8");
  });

});