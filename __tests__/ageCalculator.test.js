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
  test('should show how old is the person on Venus', () => {
    expect(userPerson.calculateVenusAge(45)).toEqual(27.9);
  });
  test('should show how old is the person on Mars', () => {
    expect(userPerson.calculateMarsAge(45)).toEqual(84.6);
  });
  test('should show how old is the person on Jupiter', () => {
    expect(userPerson.calculateJupiterAge(45)).toEqual(533.6999999999999);
  });
});