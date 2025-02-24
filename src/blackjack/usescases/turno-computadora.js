import { pedirCarta, valorCarta, crearCartaHTML, registrarVictoria} from './'

/**
 * Turno de la computadora
 * @param {String} puntosMinimos puntos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar los puntos
 * @param {Array<String>} deck 
 */

export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, puntosComputadora, deck = []) => {

    if ( !puntosMinimos ) throw new Error('puntosMinimos son necesarios');
    if ( !puntosHTML ) throw new Error('Argumento puntosHTML es necesario');

//
//    do {
//        if( puntosMinimos > 21 ) {
//            break;
//        }
//        puntosComputadora = pedirCarta(deck, puntosHTML, puntosComputadora, divCartasComputadora);
//
//    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );
//
//     setTimeout(() => {
//         registrarVictoria(puntosMinimos, puntosComputadora);
//     }, 500 );
//}

    const jugarTurno = () => {
        if ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21)) {
            setTimeout(() => {
                puntosComputadora = pedirCarta(deck, puntosHTML, puntosComputadora, divCartasComputadora);
            
                jugarTurno(); // Llamada recursiva para continuar el turno
            }, 1000);
        } else {
            setTimeout(() => {
                registrarVictoria(puntosMinimos, puntosComputadora);
        }, 300);
    }
};
jugarTurno();

};
