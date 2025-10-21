import { boardGeneratorArray } from "./data";

const boardSection = document.querySelector("section");

const boardGenerationFunction = () => {
  boardGeneratorArray.forEach((piece, index) => {
    const pieceEl = document.createElement("div");
    pieceEl.classList.add(piece.pieceClass);
    pieceEl.id = piece.id;
    if (piece.src) {
      const pieceImage = document.createElement("img");
      pieceImage.src = piece.src;
      pieceImage.alt = piece.alt;
      pieceImage.classList.add(piece.imgClass);
      pieceEl.append(pieceImage);
    }
    if (piece.letterClass) {
      const letterEl = document.createElement("p");
      letterEl.classList.add(piece.letterClass);
      letterEl.textContent = piece.letterClass;
      pieceEl.append(letterEl);
    }
    if (piece.number) {
      const numberEl = document.createElement("p");
      numberEl.textContent = piece.number;
      pieceEl.append(numberEl);
    }
    boardSection.append(pieceEl);
  });
};

boardGenerationFunction();
