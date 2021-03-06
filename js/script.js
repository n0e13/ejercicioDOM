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


/*************************************************************************************************************************************+*/

// 1 - Crear una lista. Añadir dos elementos <li> a un <ul>, y unirlos al DOM de tu página HTML. 
// El <ul> también se debe crear desde JS. La lista se crea cuando haces click en un botón 
// Usar:
//  	- innerHTML
//  	- appendChild()
//  	- createElement()
//  	- createAttribute()
//      - createTextNode()

/*************************************************************************************************************************************+*/

// Creamos los elementos
let eUL = document.createElement('ul');
let eLI1 = document.createElement('li');
let eLI2 = document.createElement('li');
let eTxt1 = document.createTextNode('Soy el primer elemento');
let eTxt2 = document.createTextNode('Soy el segundo elemento');

// Creamos los atributos de los li
const atributo = document.createAttribute('class');
atributo.value = "miListaDOM";
eUL.setAttributeNode(atributo);

// Los añadimos a sus padres
eLI1.appendChild(eTxt1);
eLI2.appendChild(eTxt2);
eUL.appendChild(eLI1);
eUL.appendChild(eLI2);

// Lo muestro en la web 
document.body.appendChild(eUL);
// Con innerHTML dejan de funcionar los botones
//document.body.innerHTML += eUL.innerHTML;


/*************************************************************************************************************************************+*/

// 2 - Hacer un boton que esconda/enseñe el texto de un parrafo cada vez que se pulsa el mismo boton. 
//     Por defecto, el párrafo debe estar visible

/*************************************************************************************************************************************+*/

document.getElementById("bParrafada").addEventListener('click', function () {
    // Creo variables del botón para cambiarle el texto y el párrafo
    let tBtn = document.getElementById("bParrafada").firstChild;
    let miParrafada = document.getElementById("miParrafada");

    if (window.getComputedStyle(miParrafada).display === "none") {
        tBtn.textContent = "Oculta el párrafo inferior"
        document.getElementById("miParrafada").style.display = "block"
    }
    else {
        tBtn.textContent = "Muestra el párrafo inferior"
        document.getElementById("miParrafada").style.display = "none";
    }
})



/*************************************************************************************************************************************+*/

// 3 - Hacer que con onmouseover y onmouseout, se muestre/esconda un parrafo escondido, cuando pases el raton sobre el otro parrafo

/*************************************************************************************************************************************+*/

let miParrafada = document.getElementById("miParrafada");
let eParrafada = document.getElementById("eParrafada");

const fOcultarMostrarParrafo = () => {
    if (window.getComputedStyle(eParrafada).display === "none") {
        document.getElementById("eParrafada").style.display = "block"
    }
    else {
        document.getElementById("eParrafada").style.display = "none";
    }
}

miParrafada.addEventListener("mouseover", fOcultarMostrarParrafo);
miParrafada.addEventListener("mouseout", fOcultarMostrarParrafo);



/*************************************************************************************************************************************+*/

// 4 - Hacer que cuando clickes un botón se borre la lista creada en el ejercicio 1 

/*************************************************************************************************************************************+*/

let bBorrar = document.getElementById("bBorrar");

bBorrar.addEventListener('click', function () {
    eUL.remove(); // Borra la lista
})


// Ejercicio con arrays, objetos, manejo del DOM
// Dado el siguiente array de objetos, pintar en el DOM tarjetas con los detalles de los siguientes libros. 
// Tenéis que buscar URL reales de los libros en internet o descargarlas

let libros = [
    {
        "author": "Chinua Achebe",
        "country": "Nigeria",
        "imageLink": "../assets/img/ThingsFallApart.jpeg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
        "pages": 209,
        "title": "Things Fall Apart",
        "year": 1958
    },
    {
        "author": "Hans Christian Andersen",
        "country": "Denmark",
        "imageLink": "../assets/img/FairyTales.jpeg",
        "language": "Danish",
        "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
        "pages": 784,
        "title": "Fairy tales",
        "year": 1836
    },
    {
        "author": "Dante Alighieri",
        "country": "Italy",
        "imageLink": "../assets/img/DivinaComedia.jpeg",
        "language": "Italian",
        "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
        "pages": 928,
        "title": "The Divine Comedy",
        "year": 1315
    },
    {
        "author": "Unknown",
        "country": "Sumer and Akkadian Empire",
        "imageLink": "../assets/img/FloodTablet.jpeg",
        "language": "Akkadian",
        "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
        "pages": 160,
        "title": "The Epic Of Gilgamesh",
        "year": -1700
    },
    {
        "author": "Unknown",
        "country": "Achaemenid Empire",
        "imageLink": "../assets/img/AleppoCodex.jpeg",
        "language": "Hebrew",
        "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
        "pages": 176,
        "title": "The Book Of Job",
        "year": -600
    }];

{/* <section>
    <article>
        <h3>Title:Things Fall Apart</h3>
        <p>Author: Chinua Achebe</p>
        <p>Country: Nigeria</p>
        <img src="imagen" alt="">
        <p>Language: English</p>
        <p>Año: 1958</p>
    </article>
</section> */}

// Forma corta de hacerlo con una plantilla
// const section = document.createElement('section');
// for (let i = 0; i < libros.length; i++) {
//     const article = document.createElement('article');
//     article.innerHTML = `<h3>Title: ${libros[i]['title']}</h3>
//                              <p>Author: ${libros[i]['author']}</p>
//                              <p>Country: ${libros[i]['country']}</p>
//                              <img src='${libros[i]['imageLink']}'>
//                              <p>Language: ${libros[i]['language']}</p>
//                              <p>Year: ${libros[i]['year']}</p>
//                              <p>Pages: ${libros[i]['pages']}</p>`;
//     section.appendChild(article)
// }
// body.appendChild(section);

// Creamos la sección y le ponemos una clase
let eSection = document.createElement('section');
let eSectionAtributo = document.createAttribute('class');
eSectionAtributo.value = "biblioteca";
eSection.setAttributeNode(eSectionAtributo);

for (let i = 0; i < libros.length; i++) {
    // En cada iteración creamos todos los elementos de nuevo
    let eArticle = document.createElement('article');
    let eTitulo = document.createElement('h3');
    let eAutor = document.createElement('p');
    let ePais = document.createElement('p');
    let eImg = document.createElement('img');
    let eLengua = document.createElement('p');
    let eYear = document.createElement('p');

    // los div para organizar el contenido dentro de cada tarjeta
    let eDivImg = document.createElement('div');
    let eDivTxt = document.createElement('div');

    // Creamos y añadimos el texto de cada elemento
    let eTituloTxt = document.createTextNode(`Titulo: ${libros[i].title}`);
    let eAutorTxt = document.createTextNode(`Autor: ${libros[i].author}`);
    let ePaisTxt = document.createTextNode(`País: ${libros[i].country}`);
    let eImgTxt = document.createTextNode(libros[i].imageLink);
    let eLenguaTxt = document.createTextNode(`Idioma: ${libros[i].language}`);
    let eYearTxt = document.createTextNode(`Año: ${libros[i].year}`);

    eTitulo.appendChild(eTituloTxt);
    eAutor.appendChild(eAutorTxt);
    ePais.appendChild(ePaisTxt);
    eImg.setAttribute("src", eImgTxt.textContent);
    eLengua.appendChild(eLenguaTxt);
    eYear.appendChild(eYearTxt);

    // Los atributos para el CSS 
    let eArticleAtributo = document.createAttribute('class');
    eArticleAtributo.value = "libro";
    eArticle.setAttributeNode(eArticleAtributo);

    let eDivImgAtributo = document.createAttribute('class');
    eDivImgAtributo.value = "libr_box_img";
    eDivImg.setAttributeNode(eDivImgAtributo);

    let eDivTxtAtributo = document.createAttribute('class');
    eDivTxtAtributo.value = "libr_box_txt";
    eDivTxt.setAttributeNode(eDivTxtAtributo);

    let eTituloAtributo = document.createAttribute('class');
    eTituloAtributo.value = "libro_titulo";
    eTitulo.setAttributeNode(eTituloAtributo);

    let eAutorAtributo = document.createAttribute('class');
    eAutorAtributo.value = "libro_autor";
    eAutor.setAttributeNode(eAutorAtributo);

    let ePaisAtributo = document.createAttribute('class');
    ePaisAtributo.value = "libro_pais";
    ePais.setAttributeNode(ePaisAtributo);

    let eImgAtributo = document.createAttribute('class');
    eImgAtributo.value = "libro_img";
    eImg.setAttributeNode(eImgAtributo);

    let eLenguaAtributo = document.createAttribute('class');
    eLenguaAtributo.value = "libro_lengua";
    eLengua.setAttributeNode(eLenguaAtributo);

    let eYearAtributo = document.createAttribute('class');
    eYearAtributo.value = "libro_year";
    eYear.setAttributeNode(eYearAtributo);

    // Rellenamos los DIV
    eDivImg.appendChild(eImg);

    eDivTxt.appendChild(eTitulo);
    eDivTxt.appendChild(eAutor);
    eDivTxt.appendChild(ePais);
    eDivTxt.appendChild(eLengua);
    eDivTxt.appendChild(eYear);

    // Rellenamos el artículo
    // eArticle.appendChild(eTitulo);
    // eArticle.appendChild(eAutor);
    // eArticle.appendChild(ePais);
    // eArticle.appendChild(eImg);
    // eArticle.appendChild(eLengua);
    // eArticle.appendChild(eYear);

    eArticle.appendChild(eDivImg);
    eArticle.appendChild(eDivTxt);

    // Añadimos el artículo a la sección
    eSection.appendChild(eArticle);
}

document.body.appendChild(eSection);

// Metemos CSS


let aArticles = document.getElementsByClassName("libro");
eSection.style = "display: flex; flex-direction: row; flex-wrap: wrap";
for (let i = 0; i < aArticles.length; i++) {
    let aImg = document.getElementsByClassName("libro_img");
    let aDivImg = document.getElementsByClassName("libr_box_img");
    let aDivTxt = document.getElementsByClassName("libr_box_txt");

    aImg[i].style = "height: 250px; width:250px; border-radius: 50%";
    aDivImg[i].style = "width: 50%; align-self: center";
    aDivTxt[i].style = "width: 50%; margin: 0px 15px; align-self: center";
    aArticles[i].style = "width: 500px; margin: 0.75em; padding: 1em; display:flex; flex-direction:row; border: 2px dotted black";
}



// Validación de formularios
//document.querySelector("#form_rock") // si usara el ID
document.querySelector("form[name='form_rock']").addEventListener('submit', function (event) {
    // Dr strange
    event.preventDefault(); // Frena el envío de formulario

    const fname = event.target.fname.value;
    const lname = event.target.lname.value;
    const email = event.target.email.value;
    const checked = event.target.accept.checked;
    const radio = event.target.fav_genre.value;

    //Caja de aviso
    let eBox = document.getElementById("validation");
    let eBoxTxt = "";
    document.getElementById("eParrafada").style.display = "none"

    // para quitar espacios en blanco ponemos el .trim()
    if (!checked) {
        eBoxTxt = "debes aceptar los términos";
        eBox.style = "border: 2px solid orange";
    } else if (!radio) {
        eBoxTxt = "debes elegir un género";
        eBox.style = "border: 2px solid orange";
    } else if (fname.trim() != "" && lname.trim() != "" && email != "" && email.endsWith(".com")) {
        // aquí reanudo el envío del formulario
        // event.target.submit();

        eBoxTxt = "datos correctos";
        eBox.style = "border: 2px solid green";

    } else {
        eBoxTxt = "datos incorrectos";
        eBox.style = "border: 2px solid red";
    }

    document.getElementById("eParrafada").style.display = "block"
    eBox.innerHTML = eBoxTxt;
})




