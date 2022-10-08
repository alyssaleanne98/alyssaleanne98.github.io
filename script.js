const h1 = document.getElementsByClassName("first-header")
console.log(h1[0])

h1[0].addEventListener("mouseover", (event) => {
    if (h1[0].style.color === "orange") {
        h1[0].style.color = "navy"
    }
    else { h1[0].style.color = "orange"; }
    console.log(h1[0])
})



