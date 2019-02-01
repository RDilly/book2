// <!-- I want you to put an event listener on the container div and when the font 
// button is clicked I want the font to change and when the color button is clicked
//  I want the text color to change. Make the necessary changes to the HTML to get it
//     to work. You will need to make a css file with 2 classes on it! -->
//     <div id="container">
//       <p>Hello World</p>
//       <button>font</button>
//       <button>color</button>
//     </div>

let container = document.getElementById("container")

function toggleClass (newClass) {
  container.classList.toggle(newClass)
  console.log("container.classList", container.classList)
}

document.getElementById("color").addEventListener("click", function() {
    toggleClass("color")
})

document.getElementById("font").addEventListener("click", function() {
    toggleClass("font")
})