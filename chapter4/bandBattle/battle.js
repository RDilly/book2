let bandNumber = 1

const takeNumber = function (name) {
    return (`${bandNumber++}. ${name}`)
}

const scum = takeNumber("Galactic Scum")
console.log(scum)

const under = takeNumber("Underdogs")
console.log(under)  