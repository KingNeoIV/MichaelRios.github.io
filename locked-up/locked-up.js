/* ================================
   Card Back
   ================================ */
const CARD_BACK = "assets/card/Back_4.png";

/* ================================
   Locked-Up! Deck Builder (Correct Paths)
   ================================ */
function buildLockedUpDeck() {
    const deck = [];

    /* ---- CLUBS (13 cards) ---- */
    const clubs = [
        "2","3","4","5","6","7","8","9","10","J","Q","K","ACE"
    ];
    clubs.forEach(rank => {
        deck.push(`assets/card/club/Clubs_${rank}.png`);
    });

    /* ---- DIAMONDS (12 cards, remove 2♦) ---- */
    const diamonds = [
        "3","4","5","6","7","8","9","10","J","Q","K","ACE"
    ];
    diamonds.forEach(rank => {
        deck.push(`assets/card/diamonds/Diamonds_${rank}.png`);
    });

    /* ---- HEARTS (12 cards, remove 2♥) ---- */
    const hearts = [
        "3","4","5","6","7","8","9","10","J","Q","K","ACE"
    ];
    hearts.forEach(rank => {
        deck.push(`assets/card/hearts/Hearts_${rank}.png`);
    });

    /* ---- SPADES (13 cards + 2 Jokers = 15) ---- */
    const spades = [
        "2","3","4","5","6","7","8","9","10","J","Q","K","ACE"
    ];
    spades.forEach(rank => {
        deck.push(`assets/card/spades/Spades_${rank}.png`);
    });

    // Jokers
    deck.push("assets/card/spades/Joker_1.png");
    deck.push("assets/card/spades/Joker_2.png");

    return deck;
}

const deck = buildLockedUpDeck();
console.log("Locked-Up! deck size:", deck.length);
console.log(deck);
console.log("Card back:", CARD_BACK);
