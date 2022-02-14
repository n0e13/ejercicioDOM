console.log("Funciona");
//alert("Funciona");

const style = "background-color: green; color:white";


// ID
console.log("%c **** Imprimir todos los párrafos por id ****", style);
console.log(document.getElementById("dos").innerHTML);

// Selectores
console.log("%c **** Imprimir todos los párrafos por selector ****", style);
console.log(document.getElementsByTagName("p")[1].innerHTML);
const pLength = document.getElementsByTagName("p").length;
for (let i = 0; i < pLength; i++) {
    console.log(document.getElementsByTagName("p")[i].innerHTML);
}

// Clase 
console.log("%c **** Imprimir todos los párrafos por clase ****", style);
console.log(document.getElementsByClassName("claseP")[1].innerHTML);
const pLengthClass = document.getElementsByClassName("claseP").length;
for (let i = 0; i < pLengthClass; i++) {
    console.log(document.getElementsByClassName("claseP")[i].innerHTML);
}

console.log(" %c **** Eventos ****", style);
document.getElementById("btn1").addEventListener('click', function () {
    document.getElementById("result").innerHTML = "Gracias por el bizcocho. De bien nacido es ser agradecido";
})

// Al elemento del DOM se le asocia un listerner del evento "click" y se lanza
// una función de callback (anónima, porque no tiene nombre) con la tarea a realizar
document.getElementById("btn2").addEventListener('click', function () {
    let lista = document.getElementById("result2");
    if (lista.innerHTML == "") {
        lista.innerHTML = `
        <ul>
            <li>Cerveza</li>
            <li>Vermut</li>
            <li>Pizza</li>
        </ul>`;
    }
    else {
        lista.innerHTML = "";
    }
})


// QuerySelector --> selectores modernos
console.log(" %c **** QuerySelector ****", style);
//document.querySelector('ul#lista > li');
//document.querySelectorAll('ul#lista > li');
//document.querySelectorAll('ul#lista > li')[0].innerHTML;

// QuerySelector--> selectores modernos
// Devuelve el contenido de todos los LIs
const listLength = document.querySelectorAll('ul#lista > li').length;
for (let i = 0; i < listLength; i++) {
    console.log(document.querySelectorAll('ul#lista > li')[i].innerHTML);
}
console.log(document.querySelectorAll('ul#lista > li.item'))
console.log(document.querySelectorAll('.item'))
console.log(document.querySelectorAll('p'))
console.log(document.querySelectorAll('p.claseP'))


// Crear elementos en el DOM con JS

let newLi = document.createElement("li");
let txt = document.createTextNode("This is new.");
newLi.appendChild(txt);
newLi.className = "item";

document.getElementById("lista").appendChild(newLi);

//Reemplazar
const parent = document.getElementById("lista"); // padre

let newLi2 = document.createElement("li");
let txt2 = document.createTextNode("----> Este es el reemplazo <----");
newLi2.appendChild(txt2); // nuevo elemento

let child = document.querySelectorAll('ul > li')[1]; // hijo a cambiar

parent.replaceChild(newLi2, child);



// Cambiar estilos
// A todos los elementos DOM .tems se le asocia un listerner del evento "click" y se lanza
// una función de callback (no anónima) con la tarea a realizar
console.log(" %c **** Cambiar estilos ****", style);

let aItems = document.getElementsByClassName("item");

// Para cambiar los estilos del item
const fStyleItems = (event) => {
    event.target.classList.toggle("item_selected");
}
// const fResetItems = (event) => {
//    event.target.classList.toggle("item_selected");
// }


// A todos los elemento DOM .item se le asocia un listener del evento "click", 
// y se lanza una función de callback (NO anónima) con la tarea a realizar

for (let i = 0; i < aItems.length; i++) {
    aItems[i].addEventListener("mouseover", fStyleItems);
    aItems[i].addEventListener("mouseout", fStyleItems);
}



