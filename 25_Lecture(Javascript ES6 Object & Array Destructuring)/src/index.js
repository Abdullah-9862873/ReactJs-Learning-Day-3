import animals, { useAnimals } from "./data";

let [cat, dog] = animals;

// Array destructuring

// console.log(cat);
// console.log(dog);

// Object destructuring inside array

// let { name, sound } = cat;
// console.log(cat.sound);

// The names written inside {} are the exact names that the cat object has... But we can assign them a different name too as we do in the case of array destructuring

// let { name: catName, sound: catSound } = cat;
// console.log(catName, catSound);

// Now I can have a system in which if the actual data contains a variable "name" then my code will take the name from there but if there is no "name" in the actual data then it will simply create one and set initial value to it

// let { name = "Fluffy", sound = "purr" } = cat;
// console.log(name, sound);

// Now I'll get "cat meow" as output because the actual data contains the predefined values
//__________________________________________________________________________

// Destructuring nested objects

let {
  name,
  sound,
  feedingRequirements: { food, water }
} = cat;

console.log(food);

//___________________________________________________________________________

const [animalName, makeSound] = useAnimals(cat);

console.log(animalName);
makeSound();

//_____________________________________________________________________________
