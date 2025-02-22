import _ from 'underscore';
import {crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCartaHTML, addDeck, Gradient} from './usescases/index'



let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');
const divDeckHTML          = document.querySelector('#deck-central');

const puntosHTML = document.querySelectorAll('small');


deck = crearDeck(tipos, especiales);
btnPedir.disabled   = true;
btnDetener.disabled = true;

let gradient = new Gradient()
gradient.initGradient('#gradient-canvas');




// Eventos
btnPedir.addEventListener('click', () => {

    puntosJugador = pedirCarta(deck, puntosHTML[0], puntosJugador, divCartasJugador);
    

    if ( puntosJugador > 21 ) {
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, puntosComputadora, deck );

    } else if ( puntosJugador === 21 ) {
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, puntosComputadora, deck );
    }

});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;

    turnoComputadora( puntosJugador,  puntosHTML[1], divCartasComputadora, puntosComputadora, deck );
});


btnNuevo.addEventListener('click', () => {

    console.clear();
    deck = [];
    deck = crearDeck(tipos, especiales);

    puntosJugador     = 0;
    puntosComputadora = 0;
    
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

    addDeck(divDeckHTML);

    for (let i = 0; i < 2; i++){
        puntosJugador = pedirCarta(deck, puntosHTML[0], puntosJugador, divCartasJugador);
    }

    puntosComputadora = pedirCarta(deck, puntosHTML[1], puntosComputadora, divCartasComputadora);

});

