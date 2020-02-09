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
    expect(userPerson.calculateMercuryAge(45)).toEqual(188);
  });

  test('should show how old is the person on Venus', () => {
    expect(userPerson.calculateVenusAge(45)).toEqual(73);
  });

  test('should show how old is the person on Mars', () => {
    expect(userPerson.calculateMarsAge(45)).toEqual(24);
  });
  
  test('should show how old is the person on Jupiter', () => {
    expect(userPerson.calculateJupiterAge(45)).toEqual(4);
  });

  test('should show how many years the user has left to live or has lived past the life expectancy', () => {
    expect(userPerson.calcEarthLifeSpan()).toEqual("Stay strong 33");
  });

  test('should show how many years the user has left to live or has lived past the life expectancy on Mercury', () => {
    expect(userPerson.calcMercuryLifeSpan()).toEqual("Stay strong 137");
  });

  test('should show how many years the user has left to live or has lived past the life expectancy on Venus', () => {
    expect(userPerson.calcVenusLifeSpan()).toEqual("Stay strong 53");
  });

  test('should show how many years the user has left to live or has lived past the life expectancy on Mars', () => {
    expect(userPerson.calcMarsLifeSpan()).toEqual("Stay strong 17");
  });

  test('should show how many years the user has left to live or has lived past the life expectancy on Jupiter', () => {
    expect(userPerson.calcJupiterLifeSpan()).toEqual("Stay strong 17");
  });

});