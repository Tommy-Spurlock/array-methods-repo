const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")

planets.forEach(planet => {
    planetEl.innerHTML += `<h3>${planet}</h3>`
})

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const upperPlanets = planets.map(planet => {

let restOfWord = `${planet}`.slice(1)
console.log(restOfWord)


    return `${planet}`.split("")[0].toUpperCase() + restOfWord

})
console.log(upperPlanets)


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/


const planetsWithE = planets.filter(planet => {
    // console.log(`${planet}`.split(""))
   return  `${planet}`.split("").includes("e")? true:false
    
})

console.log(planetsWithE)