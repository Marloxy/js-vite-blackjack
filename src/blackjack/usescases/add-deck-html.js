
import _ from 'underscore';

const crearDeckAleatorio = () => {
    let deckImagenes = [
        'Abandoned_Deck',
        'Anaglyph_Deck', 
        'Black_Deck', 
        'Blue_Deck', 
        'Checkered_Deck', 
        'Erratic_Deck', 
        'Ghost_Deck', 
        'Green_Deck', 
        'Magic_Deck', 
        'Nebula_Deck', 
        'Painted_Deck', 
        'Plasma_Deck', 
        'Zodiac_Deck',
    ];

    return _.shuffle(deckImagenes);
}

const crearDeckHTML = (deckImagenes) =>{

    const imagen = deckImagenes[0];

    // Crea la imagen de la carta
    const imgDeck = document.createElement("img");
    imgDeck.src = `assets/decks/${ imagen }.webp`;
    imgDeck.classList.add('deckImagen');

    return imgDeck;
}

export const addDeck = (divDeckHTML) => {
    const deckImagenes = crearDeckAleatorio();
    const imgDeck = crearDeckHTML(deckImagenes);
    divDeckHTML.replaceChildren( imgDeck );
}