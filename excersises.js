/* Övningsuppgifter för Vircento, om du ej kan svaren googla eller använd AI */

/* Hur deklarerar man en variabel i JavaScript? Ge exempel med let och const. */
/* 
Svar: let age = 13 
age = 25
const age = 13
age = 25 (Won't work)
*/

/* Skriv ner typerna som finns i javascript exempel: number. */
/* Svar: number, string, boolean, null, undefined.  */

/* Vad finns det för olika sätt att skriva kommentarer på? */
// Svar: singular row(//), multiple row(/* */)

/* Vad gör console.log(), och när kan man använda det? */
// Svar: Det visar en script som till exempel: console.log("Vincent's age", age), man kan i inspektorn eller via node

/* Vad händer om du försöker använda en variabel innan du har deklarerat den? */
// Svar: Den kommer inte att fungera.

/* Vad betyder if i programmering? När används det? */
/* Svar: if betyder om i programmering och om du gör ett pvp spel så kan du använda if så här:
    if (health >= 0) {
        doDamage = false
        console.log("what a fuck damage yeah")
    }

    if (health >= 0) doDamage
    hello
*/

/* 🧩 Övning 1 – Hej världen

Skriv en rad kod som visar texten

Hello World!  */

console.log("Hello world!");

/* 🧩 Övning 2 – Variabler

Skapa en variabel namn och ge den ditt namn.

*/

const name = "vincent";

/* Skapa en variabel ålder och ge den din ålder (som ett tal).

Skriv ut texten: 

!Bonus kolla upp vad backticks är och använd detta
*/

let age = 13;

/* 
🧩 Övning 3 – Enkel matte

Skapa två variabler tal1 och tal2.

Skriv ut summan, skillnaden och produkten: */

const tal1 = 4;
const tal2 = 6;
const sumOfNumbers = tal1 + tal2;
const differenceBetweenNumbers = tal2 - tal1;
const productOfNumbers = tal1 * tal2;

console.log(
  `sum of number: ${tal1} and ${tal2} is ${sumOfNumbers} and difference is ${differenceBetweenNumbers} and the product is ${productOfNumbers}`
);

/* 🧩 Övning 4 – Avancerad if-sats (beslutslogik)

Skapa ett litet program som avgör vilket meddelande som ska visas beroende på ålder, valfritt vad du vill ha för villkor: 

Ändra age och se hur svaret förändras. Använd kommandot alert() exempel: if (age > 18) alert("you are allowed to drive") */

let myAge = 13;

myAge = 16;
/* if (myAge > 15) alert("We will test this first");
if (myAge == 15) alert("You are 15");
if (myAge < 15) alert("You are below 15"); */


if (myAge > 15) {
    console.log("We will test this first");
    console.log("isildur is extremely overweight")
    console.log("you gotdam right")
} else if (myAge == 15) {
    alert("You are 15") 
} else if (myAge < 15) {
    alert("You are below 15");
}

/* ⭐ Övning 5 – Kombinera flera villkor

Skapa ett program som kontrollerar två saker:

om användaren har ett körkort (harKorkort = true)

och om personen är över 18  */

let randomAge = 17;

let hasLicesne = true;
randomAge = 18;

/* 
 && = och
 || = eller
*/

/* if (randomAge >= 18 && hasLicesne === true) {
    alert("You can drive a car");
} else {
    alert("You are too young to drive");
}
     */