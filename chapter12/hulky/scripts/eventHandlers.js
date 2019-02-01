let outputEl = document.getElementById("output-target")
let articleEl = document.getElementsByClassName("article-section")
let header = document.querySelector("#page-header")

/*
    JavaScript, in the browser, automatically send the source
    event to the handler function for the event.
*/
function handleSectionClick (event) {
    console.log(event)
}

for (let i = 0; i < articleEl.length; i++) {
    articleEl.item(i).addEventListener("click", handleSectionClick)
}






function handleHeaderMouseOver (event) {
    outputEl.innerHTML = "You moved your mouse over me"
}

function handleHeaderMouseOut(event) {
    outputEl.innerHTML = "Why u leave me?"
}






header.addEventListener("mouseover", handleHeaderMouseOver)
header.addEventListener("mouseout", handleHeaderMouseOut)






let fieldEl = document.getElementById("keypress-input")

fieldEl.addEventListener("keyup", function (event) {
    outputEl.innerHTML = event.target.value
})






let guineaPig = document.getElementById("guinea-pig")

function toggleClass (newClass) {
  guineaPig.classList.toggle(newClass)
  console.log("guineaPig.classList", guineaPig.classList)
}

document.getElementById("add-color").addEventListener("click", function() {
    toggleClass("blue")
})

document.getElementById("make-large").addEventListener("click", function() {
    toggleClass("large")
})

document.getElementById("add-border").addEventListener("click", function() {
    toggleClass("bordered")
})

document.getElementById("add-rounding").addEventListener("click", function() {
    toggleClass("rounded")
})









// document.querySelector("body").addEventListener("click", function(event) {
//     console.log("You clicked on the body of the DOM")
// })