
// I want you to create two functions:
// first function create a dollFactory that accepts an array as an argument
// -pass each item into the second function.
// second function hairMachine that accepts an item as an argument and adds hair to the item.
// - if the item has green or brown eyes add the property hairColor with the value "Brown"
// - if blue eyes "blonde"
// also change the hasHair value appropriately

const dollBin = [
    { name: "Jessica", eyeColor: "Green", hasHair: false },
    { name: "Meg", eyeColor: "Brown", hasHair: false },
    { name: "Steve", eyeColor: "Blue", hasHair: false }
]

const dollFactory = dolls => {
dolls.forEach(doll => {
    hairMachine(doll)
})
return dolls
}

const hairMachine = doll => {
    doll.hasHair = true
  if (doll.eyeColor === "Green" || doll.eyeColor === "Brown") {
    doll.hairColor = "Brown"
  } else {
    doll.hairColor = "Blonde"
  }
}
