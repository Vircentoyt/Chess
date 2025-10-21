import { boardGeneratorArray } from "./data.js";

const boardSection = document.querySelector("section");

let selectedIndex = null;

const whitePlayer = "white";
const blackPlayer = "black";

let activePlayer = whitePlayer;

function render() {
  boardSection.innerHTML = "";
  boardGeneratorArray.forEach((square, i) => {
    const squareEl = document.createElement("div");
    squareEl.className = square.pieceClass;
    squareEl.dataset.idx = i;
    squareEl.id = square.id;

    if (square.src) {
      const img = document.createElement("img");
      img.className = square.imgClass || "piece";
      img.src = square.src;
      img.alt = square.alt || "";
      squareEl.append(img);
    }

    squareEl.addEventListener("click", onSquareClick);
    boardSection.append(squareEl);
  });
}

function onSquareClick(e) {
  const id = e.currentTarget.id;
  const idx = Number(e.currentTarget.dataset.idx);

  if (selectedIndex === null) {
    if (boardGeneratorArray[idx].src) {
      console.log("does id include w: ", id.includes("w"), id);
      if (activePlayer === whitePlayer && id.includes("w")) {
        selectedIndex = idx;
        e.currentTarget.classList.add("selected");
      } else if (
        activePlayer === blackPlayer &&
        id.includes("b") &&
        !id.includes("w")
      ) {
        selectedIndex = idx;
        e.currentTarget.classList.add("selected");
      }
    }
    return;
  }

  if (idx !== selectedIndex) {
    const from = boardGeneratorArray[selectedIndex];
    const to = boardGeneratorArray[idx];

    boardGeneratorArray[idx] = {
      ...to,
      src: from.src,
      alt: from.alt,
      imgClass: from.imgClass,
      id: from.id,
    };
    boardGeneratorArray[selectedIndex] = {
      ...from,
      src: null,
      alt: null,
      imgClass: from.imgClass,
      id: from.id,
    };
  }

  selectedIndex = null;
  if (activePlayer === whitePlayer) {
    activePlayer = blackPlayer;
    const span = document.querySelector("span");
    span.textContent = blackPlayer;
  } else {
    activePlayer = whitePlayer;
    const span = document.querySelector("span");
    span.textContent = whitePlayer;
  }

  render();
}

render();

/* 

1. Lägga till siffrorna och bokstäver på rätt ställen igen...

2. Göra så att du inte kan ta dina egna pjäser.

3. Göra så att den inte byter vems tur det är när du klickar på en pjäs två gånger.

4. Göra så att du inte kan ta dina egna pjäser.

5. Lägga till hur pjäser rör sig.

6. Gör så att du inte kan gå över pjäser.

7. Göra så att kungar inte kan röra varandra och så att du måste blockera/ta/flytta kungen under attack.
*/
