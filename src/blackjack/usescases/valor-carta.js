
/**
 * Obtener valor de la carta
 * @param {String} carta 
 * @returns {Number} Valor de la carta
 */

export const valorCarta = ( carta, puntos ) => {
    const valor = carta.substring(0, carta.length - 1);

    return ( isNaN( valor ) ) ?
        ( valor === 'A' ) ? (puntos <= 10 ? 11 : 1) : 10
            : valor * 1;
}

