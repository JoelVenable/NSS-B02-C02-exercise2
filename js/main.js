const lassie = {
  age: 7,
  breed: "Collie",
  color: "White and Brown"
}

console.log(`Lassie's breed is ${lassie.breed}`);

console.log(`Lassie's age is ${lassie.age}`);



//  Output each value to the console using dot notation:

const wardrobe = {
  height: 80,
  manufacturer: 'Killibrew & Sons',
  contents: ['Dress shirt', 'Jeans', 'Suit','Skirt','Tennis shoes'],
  depth: 38,
  width: 50
}

console.log(`height: ${wardrobe.height}`);
console.log(`Manufacturer: ${wardrobe.manufacturer}`);
console.log(`Contents: ${wardrobe.contents}`);
console.log(`Depth: ${wardrobe.depth}`);
console.log(`Width: ${wardrobe.width}`);

//  Add new key to object using dot notation

wardrobe.material = "Cedar";

console.log(`Material: ${wardrobe.material}`);

console.log(`Wardrobe: ${wardrobe}`);


//  Square Bracket notation

//  Circling back to lassie above

console.log(`Lassie's breed: ${lassie['breed']}`);

const keyToLookup = 'breed';
console.log(`key to lookup: ${keyToLookup}`);

const lassiesBreed = lassie[keyToLookup];



//  Lightning Exercises

const empireStateBuilding = {
  stories: 103,
  height: 1453,
  address: "350 Fifth Avenue, Manhattan, New York 10118",
  squareFeet: 2768591,
  constructionDate: 1931,
  cost: 40948900,
  owner: "Empire State Realty Trust",
  eastWestLength: 424,
  northSouthLength: 187,
  architect: "Shreve, Lamb & Harmon"
}

// Use dot notation to output all the dimensions of the Empire State Building to the console

console.log(`Stories: ${empireStateBuilding.stories}`);
console.log(`height: ${empireStateBuilding.height}`);
console.log(`square feet: ${empireStateBuilding.squareFeet}`);
console.log(`East-West Length: ${empireStateBuilding.eastWestLength}`);
console.log(`North South Length: ${empireStateBuilding.northSouthLength}`);

// Use square bracket notation to output the remaining 5 properties to console.

console.log(`address: ${empireStateBuilding['address']}`);
console.log(`Construction Date: ${empireStateBuilding['constructionDate']}`);
console.log(`cost: ${empireStateBuilding['cost']}`);
console.log(`owner: ${empireStateBuilding['owner']}`);
console.log(`Architect: ${empireStateBuilding['architect']}`);



//  Arrays as Values

const kennel = {
  name: "Nashville North Kennels",
  address: "100 Demonbreun Road",
  manager: "Harper Frankstone",
  capacity: 50,
  currentAnimals: ["Jet", "Snickers", "Blue", "Jacks", "Flap", "Barnum"]
}

// If you want all the animals currently being boarded, you have to access the array first:

const boardedAnimals = kennel.currentAnimals;

for (let i = 0; i < boardedAnimals.length; i++) {
  const animal = boardedAnimals[i];
  console.log(`${animal}`);  
}

// Get a Single animal from array:

console.log(`${kennel.currentAnimals[3]}`);


