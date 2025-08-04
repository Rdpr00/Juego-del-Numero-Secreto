let numSecreto;
let intentos;
let listaNumerosSorteados = [] ;
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos)
    if (numSecreto === numeroUsuario) {
        asignarTextoElemento('p',`Asertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (numeroUsuario > numSecreto) {
            asignarTextoElemento('p','El numero secreto es menor');
        } else {
            asignarTextoElemento('p','El numero secreto es mayor');
        } 
        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumero() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    
    // si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else { 

        // si el numero generado esta en la lista 
        if ( listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumero();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCaja() {
    document.getElementById('valorUsuario').value='';
 
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numSecreto = generarNumero();
    intentos = 1;
}

function reiniciarJuego() {
    // primero limpiamos la caja, para poder insertar nuevo numero
    limpiarCaja();
    // indicamos mensaje de intervalo de numeros
    condicionesIniciales();
    // deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();