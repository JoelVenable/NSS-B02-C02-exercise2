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


