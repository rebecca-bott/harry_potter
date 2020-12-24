export const HOUSE = [
  "Gryffindor",
  "Slytherin",
  "Ravenclaw",
  "Hufflepuff",
] as const;

export type House = typeof HOUSE[number];

export interface CharactersData {
  name: string,
  species: string,
  gender: string,
  house: string,
  dateOfBirth: string,
  yearOfBirth: number,
  ancestry: string,
  eyeColour: string,
  wand: {},
  patronus: string,
  hogwartsStudent: boolean,
  hogwartsStaff: boolean,
  actor: string,
  alive: boolean,
  image: string
}

export interface PotionsData {
  Name: string,
    Ingredients: string,
    Effect: string,
    Characteristics: string,
    DifficultyLevel: string
}

export interface SpellData {
  key: string,
  value: string
}

