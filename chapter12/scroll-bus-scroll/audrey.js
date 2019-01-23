const audrey = document.getElementById("audrey")
/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
window.addEventListener("scroll", function () {
    let y = (window.scrollY / 3)
    let x = (window.scrollY / 4)
    if (y >= 50) { 
        audrey.style.width = `${y}px`
    }
    if (x >= 100) {
        audrey.style.minHeight = `${x}px`
    }

/*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */



    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
})