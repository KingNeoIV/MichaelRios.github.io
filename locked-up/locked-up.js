/* ================================
   Card Back
================================ */
const CARD_BACK = "assets/card/Back_4.png";

/* ================================
   Locked-Up! Deck Builder
================================ */
function buildLockedUpDeck() {
    const deck = [];

    const clubs = ["2","3","4","5","6","7","8","9","10","J","Q","K","ACE"];
    clubs.forEach(rank => deck.push(`assets/card/club/Clubs_${rank}.png`));

    const diamonds = ["3","4","5","6","7","8","9","10","J","Q","K","ACE"];
    diamonds.forEach(rank => deck.push(`assets/card/diamonds/Diamonds_${rank}.png`));

    const hearts = ["3","4","5","6","7","8","9","10","J","Q","K","ACE"];
    hearts.forEach(rank => deck.push(`assets/card/hearts/Hearts_${rank}.png`));

    const spades = ["2","3","4","5","6","7","8","9","10","J","Q","K","ACE"];
    spades.forEach(rank => deck.push(`assets/card/spades/Spades_${rank}.png`));

    deck.push("assets/card/spades/Joker_1.png");
    deck.push("assets/card/spades/Joker_2.png");

    return deck;
}

let deck = buildLockedUpDeck();

/* ================================
   Shuffle
================================ */
function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

/* ================================
   Deal a Card to Any Hand
================================ */
function dealCardToHand(handId, cardImage, index) {
    const hand = document.getElementById(handId);
    const table = document.querySelector(".table-surface");

    const card = document.createElement("div");
    card.classList.add("card", "dealing");
    card.style.backgroundImage = `url('${cardImage}')`;

    table.appendChild(card);
    card.style.position = "absolute";

    // Base deck position
    const deckPos = document.getElementById("visual-deck").getBoundingClientRect();
    const tablePos = table.getBoundingClientRect();

    let startX = deckPos.left - tablePos.left + deckPos.width / 2 - 35;
    let startY = deckPos.top - tablePos.top + deckPos.height / 2 - 47;

    // ============================
    // INDIVIDUAL STARTING OFFSETS
    // ============================
    const playerOffsetX = 20;
    const playerOffsetY = 0;

    const partnerOffsetX = 20;
    const partnerOffsetY = 0;

    const opp1OffsetX = 20;
    const opp1OffsetY = 0;

    const opp2OffsetX = 20;
    const opp2OffsetY = 0;

    // Apply offsets per group
    if (handId === "player-hand") {
        startX += playerOffsetX;
        startY += playerOffsetY;
    }
    if (handId === "partner-hand") {
        startX += partnerOffsetX;
        startY += partnerOffsetY;
    }
    if (handId === "opponent1-hand") {
        startX += opp1OffsetX;
        startY += opp1OffsetY;
    }
    if (handId === "opponent2-hand") {
        startX += opp2OffsetX;
        startY += opp2OffsetY;
    }

    // Apply starting position
    card.style.left = `${startX}px`;
    card.style.top = `${startY}px`;

    // Get hand box position
    const handPos = hand.getBoundingClientRect();
    const handX = handPos.left - tablePos.left;
    const handY = handPos.top - tablePos.top;

    // ============================
    // Fan direction per player
    // ============================
    let targetX = handX;
    let targetY = handY;

    if (handId === "player-hand" || handId === "partner-hand") {
        targetX = handX + index * 25;
    }

    if (handId === "opponent1-hand" || handId === "opponent2-hand") {
        targetY = handY + index * 25;
    }

    // Animate into position
    requestAnimationFrame(() => {
        card.style.left = `${targetX}px`;
        card.style.top = `${targetY}px`;

        if (handId === "opponent1-hand") {
            card.style.transform = "rotate(-90deg)";
        }
        if (handId === "opponent2-hand") {
            card.style.transform = "rotate(90deg)";
        }
    });
}


/* ================================
   Deal All 52 Cards (13 each)
================================ */
function dealAllCards() {
    deck = buildLockedUpDeck(); // fresh deck
    shuffleDeck();

    const hands = [
        "player-hand",
        "partner-hand",
        "opponent1-hand",
        "opponent2-hand"
    ];

    for (let i = 0; i < 52; i++) {
        const handId = hands[i % 4]; // rotate players
        const cardIndex = Math.floor(i / 4); // 0–12

        setTimeout(() => {
            dealCardToHand(handId, deck.pop(), cardIndex);
        }, i * 150);
    }
}

/* ================================
   Shuffle Button
================================ */
document.getElementById("shuffle-btn").addEventListener("click", () => {
    dealAllCards();
});
