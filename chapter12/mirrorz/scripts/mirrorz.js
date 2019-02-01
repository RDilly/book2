document.querySelector("#message").addEventListener("keyup", function (event) {
    document.querySelector("#txt-one").innerHTML = event.target.value
    document.querySelector("#txt-two").innerHTML = event.target.value
})