let age = 13;

console.log("This is Vincent's age:", age);

age += 82;

console.log("This is Vincent's age after we have changed it:", age);

const matthiasAge = 37; // this is called a camelCase

/* 
    There are multiple types of variables. 
    1. number
    2. string
    3. boolean (true/false)
    4. null (the developer can set null by themself: Item does not exist)
    5. undefined (does not exist)
*/

let name;

console.log("is named defined:", name);

let isMatthiasFat = false;

console.log("is Matthias fat:", isMatthiasFat);

isMatthiasFat = true;

console.log("Is Matthias fat after eating a hamburgir?", isMatthiasFat);

console.log(typeof name);

let numberOfApples = 12;
let numberOfOranges = 93;
let amountOfFruits = numberOfApples + numberOfOranges;

/* 
    greater than > 
    lesser than <
    greater or equal to >=
        lesser or equal to <=
*/

console.log(12 > 8);

console.log(12 < 8);

console.log(8 >= 8);

console.log(4339 <= 49);

// single file line

/* */

// const, let

// Du kan ändra en let variabel men inte en const (constant)

// number, string, boolean, null, undefined

93478 % 292387;

// 29%2 = 1

// <, >, =, <=, >=, ==, ===

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
  console.log("click");
  blackKing.style.backgroundColor = "#008B8B";
});

console.log(blackKing.id);

console.log(blackKing);

/* om age är 18 eller högre = You're over 18 you fat ass pig. 
    om den är 12 || under logga "Fuck you"
    om den är 6 || under = logga baby
*/

//Funktioner

const section = document.querySelector("section");
section.addEventListener("click", () => {
  console.log(section);
});

for (let i = 0; i <= 12; i++) {
  console.log(i);
}

const oppa = document.querySelectorAll("div");

oppa.forEach((square) => {
  console.log(square);
});

const braNamnFunctionWithArguments = (numberOne, numberTwo) => {
  const sumOfNumbers = numberOne + numberTwo;
  console.log("with arg", sumOfNumbers);
};

const braNamnFunctionWOArguments = () => {
  const sumOfNumbers = 4 + 6;
  console.log("wo:", sumOfNumbers);
};

// funktioner kan kallas för sig själva
// funktioner kan också ta argument/parametrar utifrån, lättare att återanvända

/* 

1. göra funktion som räknar ut en summa av två tal och console.loggar summan
2. passerar in talen som argument
3. kallar på funktionen med argumenten

*/

braNamnFunctionWithArguments(12, 13);
braNamnFunctionWithArguments(-942189, 13);
braNamnFunctionWithArguments(12312321321, 13);
braNamnFunctionWOArguments();
braNamnFunctionWOArguments();

generatePiecesFunction();

const createPieceWithLetter = (square, position, imgSrc, alt) => {
  const letter = document.createElement("p");
  letter.classList.add(position);
  letter.textContent = position;

  const image = document.createElement("img");
  image.classList.add("piece");
  image.src = `pieces/${imgSrc}.png`;
  image.alt = alt;

  square.append(letter, image);
};

const createPieceWithLetterAndNumber = (square) => {
  square.id = "a1";
  square.classList.add("number-letter");
  const letter = document.createElement("p");
  const number = document.createElement("p");
  letter.classList.add("a");
  number.classList.add("one");
  letter.textContent = "a";
  number.textContent = "1";

  const wrImg = document.createElement("img");
  wrImg.classList.add("piece");
  wrImg.src = "pieces/wr.png";
  wrImg.alt = "a rook but white";

  square.append(letter, number, wrImg);
};

const generatePiecesFunction = () => {
  for (let i = 1; i <= 64; i++) {
    const square = document.createElement("div");

    square.classList.add(i);

    if (i % 2 === 0) {
      square.classList.add("square-green");
    } else {
      square.classList.add("square-white");
    }

    if (i > 57) {
      square.classList.add("letter");
    }

    if (i === 57) {
      createPieceWithLetterAndNumber(square);
    } else if (i === 58) {
      createPieceWithLetter(square, "b", "wn", "A white horseman");
    } else if (i === 59) {
      createPieceWithLetter(square, "c", "wb", "A holy guy");
    } else if (i === 60) {
      createPieceWithLetter(square, "d", "wq", "Happy wife, happy life");
    } else if (i === 61) {
      createPieceWithLetter(square, "e", "wk", "Royalty");
    } else if (i === 62) {
      createPieceWithLetter(square, "f", "wb", "Holy guy x2");
    } else if (i === 63) {
      createPieceWithLetter(square, "g", "wn", "Headless horseman");
    } else if (i === 64) {
      createPieceWithLetter(square, "h", "wr", "Twin Towers");
    }

    boardSection.appendChild(square);
    /*     console.log(square); */
  }
};

/* 

Uppgift: Generera hela brädet via javascript, kolla hur vår html ser ut.

1. Skapa sektionen för hela brädet, koppla mot html X
2. Gör en funktion med bra namn för att generera allting X
3. Gör en loop med ett index på 64 rutor X
4. Inne i loopen så skapa divar X
5. Lägg på alla divar på sektionen X
6. Kalla på funktionen X
7. Se till att logga på ställen som är relevanta för att debugga X

// NU BLIR DE AVANCERAT

8. Addera klasser på divarna inne i loopen så att de får den stylingen vi vill ha
9. Skapa och lägg till paragraph taggar med siffror inne på de index platser de ska vara
10. Lägg även till letter då på div taggarna så vi har den klassen för styling
11. Lägg till ids på pieces t.ex. wr-a1 osv. 
12. Lägg in img på divs.
*/

/* Objects */

/* 
  1. Gör ett objekt med information om hornet, minst 3 olika datatyper
  2. console.loggar ett valfritt av dessa
*/

/* const hollowKnight = [
  {
    id: "wn-b1",
    pieceClass: "square-white",
    imgClass: "piece",
    src: "pieces/wn.png",
    alt: "a knight",
    letterClass: null,
    numberClass: null,
  },
  {
    id: "br-a8",
    pieceClass: "square-white number-letter",
    imgClass: "piece",
    src: "pieces/br.png",
    alt: "A black fucking rook",
    letterClass: "a",
    numberClass: "eight",
  },
];
 */
