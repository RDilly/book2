let fieldEl = document.getElementById("catCopy")
let bbox = document.querySelector("#brown")
let pbox = document.querySelector("#yungPurp")
let outputEl = document.getElementsByClassName("mir__box")

fieldEl.addEventListener("keyup", function (event) {
    pbox.textContent = event.target.value
    bbox.textContent = event.target.value
})
