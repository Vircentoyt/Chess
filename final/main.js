/* --------- FINAL EXAM VIRCENTO ------------ */

/* --------- FRÅGOR ------------ */

/* 

1. Vilka datatyper finns det i javascript?

Svar: string, number, bolean, null, undefined

2. Vad är en if sats?

Svar: Det förklarar vad ska hända om det är ett värde som matchar beskrivningen

3. Vad är en loop? 

Svar: ett kodblock som kan göra ett objekt flera gånger

4. Vad är en array? 

Svar: det är som en div om jag har förstått rätt array = ["soul master", "hornet", "soul warrior"]; 

5. Vad är ett object? 

Svar: 

vincent = {
    age: 13,
    name: "Snoofi"
}

6. Vilket specifikt matematiskt tecken i javascript för att få fram resten av en dividering
och när är det bra att använda detta. 

Svar: %. Det är bra när man ska kolla om något är jämnt eller inte

7. Ange minst 4 stycken jämförelse operatorer exempel är == eller >

Svar: <, >, ==, ===, !==, >=, <=, =>

8. Vad är skillnaden mellan == och ===

svar: om vi tar till exempel "5" == 5 så blir det false och 55, men om vi gör "5" === 5 så är det true.
*/

/* --------- ÖVNINGAR (HOLLOW KNIGHT TEMA) ------------ */

/* 

ÖVNING 1:  
Koppla javascript filen och style filen till html
Kontrollera att båda fungerar genom att printa / styla body (i css)

*/

/* 

ÖVNING 2: VARIABLER
Skapa två variabler för valfria hollow knight saker, en konstant och en som kan ändra på sig. 
Sen så ändra på en variabel. console.logga före och efter och ha med text i loggen så man kan se 
vilken som är före och efter. 

*/
/*
const hornet = "defeated by Vincent";
let soulMaster = "undefeated by Vincent";
console.log(hornet);
console.log(soulMaster);

soulMaster = "teleporting";
console.log(soulMaster);

/* 

ÖVNING 3: IF-ELSE
Skapa en boolean isSoulMasterHard som du sätter till valfritt booleanskt värde. 
Sen ska en if sats som beroende på om värdet är true eller false ska console.logga något i 
båda scenariona. 

*/
const isSoulMasterHard = true;
if (isSoulMasterHard === true) {
  console.log("Bro is hard to defeat");
} else {
  console.log("You is easy");
}

/* 

ÖVNING 4:  ELSE-IF
Skapa en variabel på hornets ålder. Sen så ska du villkorligt använda if, else if för att kolla om
hon får köra transport djuret i hollow knight, dvs om hon är över 18. Kolla även om hon fortfarande går
i förskolan genom att kolla ifall hon är likamed eller under 6 års ålder. Använd alert med bra meddelanden. 

*/
/*
const hornetAge = 14;
if (hornetAge >= 18) {
  alert("shaw!");
} else if (hornetAge <= 6) {
  alert("Tegale!");
} else if (hornetAge <= 17) {
  alert("Garama!");
}
/* 

ÖVNING 4: KOPPLA ELEMENT
Gör en variabel hollowKnightContainer och koppla sedan ihop det med en section html tag som du skapar i html. 
Kalla den vad du vill. 

*/
const hollowKnightContainer = document.querySelector("section");
console.log(hollowKnightContainer);
/* 

ÖVNING 5: SKAPA ELEMENT

1. Skapa ett html element (div) kallat huntersJournalEl i javascript och console.logga elementet. 
2. Lägg på en valfri klass 
3. Lägg på ett id
4. Skapa en paragraf element
5. Ändra texten på paragrafen till Zote the mighty
6. Lägg in denna paragraf inne i diven vi skapade tidigare
7. Lägg in huntersJournalEl inne i sektionsvariablen hollowKnightContainer

*/
const huntersJournalEl = document.createElement("div");
huntersJournalEl.classList.add("tiktik");
huntersJournalEl.id = "easyMob";

const letter = document.createElement("p");
letter.textContent = "tiktik";

huntersJournalEl.append(letter);

// section kallad hollowKnightContainer append div kallad hunterJournelEl
hollowKnightContainer.append(huntersJournalEl);

/* 

ÖVNING 6: EVENT LISTENER

1. Lägg på en event lyssnare som ett klick event på hollowKnightContainer sektion variabeln.
2. Ändra bakgrundsfärgen till rött varje gång man klickar. 

*/
hollowKnightContainer.addEventListener("click", () => {
  hollowKnightContainer.style.backgroundColor = "red";
});
/* 

ÖVNING 7: LOOP

1. Gör en for loop for(), om du glömmer syntax googla bara. 
2. console.logga i / index inne i loopen

*/
for (i = 0; i <= 12; ++i) {
  console.log(i);
}

/* 

ÖVNING 8: OBJECT

1. Skapa ett object som heter hornet, och skriv in minst tre egenskaper av tre olika datatyper. Sen console.loggar du dessa egenskaper. 

*/

const hornet = {
    saysShaw: true,
    color: "red",
    numberOfShaws: 97
};
console.log(hornet)

/* 

ÖVNING 9: ARRAY

1. Skapa en array med alla bossar du möt i hollow knight som strängar
2. Loopa igenom dessa med forEach. 
3. Console.logga dessa. 

*/

const bosses = ["false knight", "hornet", "soul master", "green bug thing"]

bosses.forEach((bosses) => console.log (bosses));
