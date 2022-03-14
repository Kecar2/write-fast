// Estado de la APP
let STATE = {
    currentWord: "", // Aquí debemos guardar el resultado de getNextWord()
    currentProgressWord: 0, // indica cual es la siguiente posición del "currentWord" a procesar

    // Si le pasas una letra, te dice si esa letra va justamente en la posición 'currentProgressWord'
    isCorrectLetter: function (inputLetter) {
        return this.currentWord[STATE.currentProgressWord] == inputLetter;
    },

    // Nos indica si hemos escrito ya toda la letra
    isWordFinished: function () {
        return this.currentProgressWord == this.currentWord.length;
    }
}

// Paso 1: al hacer click en el botón empezar, obtener la primera palabra a procesar. (console.log) Debemos también ocultar el botón de empezar y mostrar el contenedor con la palabra a escribir.


// Al hacer clic en EMPEZAR-->

// Requisito 1: Ocultar el botón "Empezar"

let button = document.querySelector("#start-game button");

button.addEventListener("click", function () {

    // button.style.display = "none";
    button.classList.add("w3-hide");

    document.querySelector("#next-word-card").classList.remove("w3-hide");

    STATE.currentWord = getNextWord();

    document.querySelector("#next-word").textContent = STATE.currentWord;
})

// Requisito 2: Mostrar el contenedor con id="next-word-card"

// Requisito 3: Actualizar STATE.currentWord con el valor que devuelve getNextWord()

// Requisito 4. Actualizar la propiedad .textContent de id="next-word" con el valor de STATE.currentWord


// PASO 2: Escuchar el teclado

// Requisito 1: Añadir un listener para detectar las letras introducidas por el usuario (solo letras). Mostrar por console.log

// Requisito 2: Cada vez que el usuario pulsa una tecla:
   // A. Ver si la tecla pulsada, es la que toca: STATE.isCorrectLetter(teclaPulsadaPorElUsuario). Si NO es la que toca, terminar la función inmediatamente

   // B. Su ha escrito correctamente la letra que toca
      // 1. Actualizar +1 la variable STATE.currentProgressWord
      // 2. Comprobar si ya hemos terminado la palanbra con STATE.isWordFinished
      // 3. Actualizar la UX. Os ayudará el método substring o slice. Podeis usar <span> para este cometido; partiendo la STATE.currentWord por el índice de currentProgressWord https://oscarm.tinytake.com/msc/NjYyMTUyOF8xOTE2NDI1NQ








