


export const iniciarContadores = () => {
    sessionStorage.setItem('sesionJugador', sessionStorage.getItem('sesionJugador') || 0);
    sessionStorage.setItem('sesionComputadora', sessionStorage.getItem('sesionComputadora') || 0);
    localStorage.setItem('globalJugador', localStorage.getItem('globalJugador') || 0);
    localStorage.setItem('globalComputadora', localStorage.getItem('globalComputadora') || 0);

    actualizarUI();
}

const actualizarUI = () => {
    const sesionJugador     = document.querySelector("#sesionJugador");
    const sesionComputadora = document.querySelector("#sesionComputadora");
    const globalJugador     = document.querySelector("#globalJugador");
    const globalComputadora = document.querySelector("#globalComputadora");

    if (sesionJugador && sesionComputadora && globalJugador && globalComputadora) {
        sesionJugador.innerText = sessionStorage.getItem('sesionJugador');
        sesionComputadora.innerText = sessionStorage.getItem('sesionComputadora');
        globalJugador.innerText = localStorage.getItem('globalJugador');
        globalComputadora.innerText = localStorage.getItem('globalComputadora');
}
}

export const registrarVictoria = ( puntosJugador, puntosComputadora ) => {
    if( puntosComputadora === puntosJugador ) {
        alert('Nadie gana :(');
        return; // No sumamos nada si hay empate
    } 
    else if ( puntosJugador > 21 ) {
        alert('Computadora gana');
        sumarVictoria('Computadora');
    } 
    else if( puntosComputadora > 21 ) {
        alert('Jugador gana');
        sumarVictoria('Jugador');
    } 
    else {
        alert('Computadora gana');
        sumarVictoria('Computadora');
    }
}

const sumarVictoria = (ganador) => {
    let sesionKey = `sesion${ganador}`;
    let globalKey = `global${ganador}`;

    sessionStorage.setItem(sesionKey, parseInt(sessionStorage.getItem(sesionKey)) + 1);
    localStorage.setItem(globalKey, parseInt(localStorage.getItem(globalKey)) + 1);

    actualizarUI();
}

