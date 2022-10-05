
// function mouseOver() {
//     document.getElementByClass("first-header").style.color = "pink";
//   }

// function mouseOut() {
//      document.getElementByClass("first-header").style.color = "red";

// resource: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmouseover_html


const h1 = document.getElementsByClassName("first-header")
console.log(h1[0])

h1[0].addEventListener("mouseover", (event) => {
    if (h1[0].style.color === "orange") {
        h1[0].style.color = "green"
    }
    else { h1[0].style.color = "orange"; }
    console.log(h1[0])
})



