// Duomenų išvedimo būdai

console.log("JS atskirame faile")

document.getElementById("heading1").innerHTML="Keičiame elemento turinį"

document.write("<h2>Rašome tiesiai į HTML dokumentą</h2>")

// window.alert("ALERT");

// statement - values, Keywords, Expresions, Comments, Operators

//Kintamieji

//Pirmas tipas
var firstName;

firstName = "Ricardas";
console.log(firstName)

//Antras tipas. Pagrindinis naudojamas
let lastName = "Jasas";

// Trečias tipas. Pagrinde masyvams
const PI = 3.14159;



firstName ="Jonas"
console.log (firstName);

let additionalHeading = "<h1>Title</1>";

document.write(additionalHeading);


//Duomenų tipai

//String (tikslus tekstas)
let string = "tekstas"

//Skaičiai
let number = 6;
let number2 = 6.59;

let sum = number + number2;

console.log(sum);



//Boolean

let z = true;
// let x = false;



//Operators

//Sudėtis (+) Atimtis (-) Daugyba (*) Dalyba (/) Increment(++(+1)) Decrement (--(-1))

console.log(string + " " + "papildomas tekstas");

console.log(number + string);

console.log(number*number2/89)

// number = number++;
// console.log(number)



//Assignment operators

// = reikšmei priskirti

let x = 5;

x = x + 10;

x+=10

// += -= *= /=

//Užduotis 
// Išvesti h1 į HTML su sakiniu "Mano vardas yra XXXXXX"
// Išvesti h1 į HTML su sakiniu "Mano vardas yra XXXXXX ir man yra YY metų"

firstName1 = "<h1>Ricardas</h1>";

let sakinys = "<h1>Mano vardas yra</h1>"

document.write(sakinys+firstName1)


let sakinys2 = "<h1>Mano vardas yra Ricardas</h1>"

document.write(sakinys2)


let sakinys3 = "<h1>ir man yra</h1>"

let sakinys4 = "<h1>metų</h1>"

let number3 = 31

document.write(sakinys2+sakinys3+number3+sakinys4)

document.write()

let part1 = "<h1>Mano vardas yra</h1>";
let space = " ";

document.write(part1+space+firstName1)

// Paskaičiuoti koks bus amžius po x metų;



// console.log(age+years)

// let ageAfter = number3+years;

// document.write("Po " + years + " man bus " + ageAfter)

// let sentence = "Po " + years + " man bus " + ageAfter;

// document.write(sentence)
// document.getElementById("heading1").innerHTML = sentence;
// console.log(sentence)

let a = "15";
let b = "10";
let c = a*b;
console.log(c);
console.log(a)

// Sąlygos - Condition

// IF ir SWITCH

if ("salyga") {
    //kodas kuris vykdomas jei salyga yra true

    
}
let age = 15;
let years = 33;

if (age<18) {
    console.log("Access denied")
}

if (years==30) {
    console.log("yes")
} else {
    console.log("no")
}

if (b<10) {
    console.log("true")
} else if (b>10) {
    console.log("b yra daugiau už 10");
} else {
    console.log("b yra lygus 10")
}