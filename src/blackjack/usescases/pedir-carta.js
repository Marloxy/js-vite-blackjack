import { valorCarta, crearCartaHTML  } from "./index";

/**
 * Esta función me permite coger una carta
 * @param {Array<String>} deck es un arreglo de string
 * @param {HTMLElement} puntosHTML 
 * @param {Number} puntos 
 * @param {HTMLElement} divCartas 
 * @returns {Number} Puntos sumados o totales
 */

export const pedirCarta = (deck, puntosHTML, puntos, divCartas) => {


    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    
    puntos = puntos + valorCarta( carta, puntos);
    puntosHTML.innerText = puntos;
    
    const imgCarta = crearCartaHTML(carta);
    divCartas.append( imgCarta );

    return puntos;
}
