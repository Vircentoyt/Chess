const numberOne = document.getElementById("numberOne");
const numberOneQuery = document.querySelector(".number-one"); 
const allPieces = document.querySelectorAll("div");

/* numberOne.style.backgroundColor = "red" */

/* QuerySelector:

querySelector("section")
querySelector(".class")
querySelector("#id")

För flera så ha All

*/

const blackKing = document.getElementById("bk-e8");
const pieceImg = document.querySelector("#bk-e8 img");

blackKing.addEventListener("click", () => {
    console.log("click")
    blackKing.style.backgroundColor = "#008B8B"
})

console.log(blackKing.id)

console.log(blackKing);

const 
