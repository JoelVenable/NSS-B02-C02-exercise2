# NSS-B02-C02-exercise2


## Setting and Accessing Values on Objects

There are two ways to access the values stored inside of an object. One is called dot notation, and the other is square bracket notation.

### Dot Notation

To obtain the value inside an object, and you know the name of the key, you can use dot notation. Here's the pattern.

```js
variableContainingTheObject.keyName
```

Given the following object...

```js
const lassie = {
    age: 7,
    breed: "Collie",
    color: "White and Brown"
}
```

To output the string "Collie" to the console, you would use the following code.

```js
console.log(`Lassie's breed is ${lassie.breed}`)
```

To output the integer 7 to the console, you would use the following code.

```js
console.log(`Lassie's age is ${lassie.age}`)
```

> **Lightning Exercise:** Given the object below, output each of the values to the console using dot notation.

```js
const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}
```

You can also use dot notation to create a new key on an object if you need to.

```js
wardrobe.material = "Cedar"
```

You just added a new key to the object stored in the `wardrobe` variable. If you output it to the console, you will see it along with the others that were already defined.

```js
console.log(wardrobe)

> contents: (5) ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"]
depth: 38
height: 80
manufacturer: "Killibrew & Sons"
material: "Cedar"
width: 50
```

### Square Bracket Notation

Square bracket notation is most often used when the key name is stored in a variable. The basic mechanics of it are similar to dot notation, you just use square brackets with the key name inside.

Above you saw how to access the `breed` key on the object below with dot notation.

```js
const lassie = {
    age: 7,
    breed: "Collie",
    color: "White and Brown"
}
```

Using square bracket notation, here's the syntax.

```js
// Square bracket notation for key access
lassie["breed"]
> "Collie"

// Dot notation for key access
lassie.breed
> "Collie"
```

That's the basics, but you need to see how square is actually used in an application. Here's what it looks like when using a variable to look up a key on an object.

```js
// Breed is the key you want to get the value of in the object below
const keyToLookup = "breed"

// First, make JavaScript evaluate the variable and give us its value
console.log(keyToLookup)
> "breed"
```

Now that you know that `keyToLookup` evaluates to `"breed"`, you can use the variable to lookup the value with square bracket notation.

```js
const lassie = {
    age: 7,
    breed: "Collie",
    color: "White and Brown"
}

// Use the value of `keyToLookup` to get the value you want
const lassiesBreed = lassie[keyToLookup]
> "Collie"
```

> **Instructor Note:** Talk about how expressions get evaluated from right to left, instead of the other way.

### Lightning Exercises

Time to practice dot and square-bracket notation. Use the following object to complete the lightning exercises below.

```js
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
```

> **Lightning Exercises 1:** Use dot notation to output all of the dimensions of the Empire State Building to the console.

> **Lightning Exercises 2:** Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables first with the keys as their values. Use those variables to look up the values.

## Arrays as Values

So far, you've been largely accessing string and integer values in an object. However, values can be anything in the JavaScript language - including arrays. Consider this example.

```js
const kennel = {
    name: "Nashville North Kennels",
    address: "100 Demonbreun Road",
    manager: "Harper Frankstone",
    capacity: 50,
    currentAnimals: ["Jet", "Snickers", "Blue", "Jacks", "Flap", "Barnum"]
}
```

If you want to display all of the animals that are currently being boarded, you first have to access the array. You can use dot notation to get that value.

```js
const boardedAnimals = kennel.currentAnimals

for (let i = 0; i < boardedAnimals.length: i++) {
    console.log(boardedAnimals[i])
}

> "Jet"
> "Snickers"
> "Blue"
> "Jacks"
> "Flap"
> "Barnum"
```

If you wanted to pull a single animal form the array, and display it, you can use the index value. To show the fourth animals in that array, you would use the following code.

```js
console.log(kennel.currentAnimals[3])

> "Jacks"
```

### Lightning Exercise

Examine the object below.

```js
const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}
```

> **Lightning Exercise 1:** Output the names of the part-time instructors followed by the names of the full-time instructors in the console.

> **Lightning Exercise 2:** Output only Andy and Zoe in the console.

