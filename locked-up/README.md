# **Locked‑Up! — Prison‑Rules Spades**

**Locked‑Up!** is a custom-built web card game based on a prison‑style Spades variant.  
It features a modified 52‑card deck, Joker trump rules, and the signature **Walk‑the‑2♣ instant win** mechanic.  
This project is part of the **KingNeoIV.github.io** portfolio.

---

## 🎴 **Game Overview**

Locked‑Up! is a fast, high‑tension Spades variant designed around:

- A **modified deck**  
- **Big Joker / Little Joker** trump hierarchy  
- **Strict follow-suit rules**  
- **Instant win condition** when walking the 2♣  
- Classic Spades bidding and scoring  

The game is implemented as a standalone web app using HTML, CSS, and JavaScript.

---

## 🃏 **Deck Rules**

Locked‑Up! uses a **52‑card deck**:

### **Included**
- Big Joker (highest trump)  
- Little Joker  
- All Spades A–2  
- All Clubs A–2  
- All Hearts A–3 (2♥ removed)  
- All Diamonds A–3 (2♦ removed)

### **Removed**
- 2♥  
- 2♦  

### **Trump Ranking (High → Low)**

1. Big Joker  
2. Little Joker  
3. A♠  
4. K♠  
5. Q♠  
6. J♠  
7. 10♠ → 3♠  
8. 2♠ (lowest trump)

---

## 🔥 **Special Rule: Walking the 2♣**

If a player **leads** the 2♣ and it wins the trick:

### 👉 **Their team instantly wins the entire game.**

Conditions:
- Must be the **lead card**  
- No one cuts with spades or Jokers  
- No higher club is played  

This rule creates high‑risk, high‑reward gameplay and defines the Locked‑Up! identity.

---

## 🧠 **Bidding Rules**

Locked‑Up! uses standard Spades bidding:

- 0–13 per player  
- Nil = 50  
- Blind Nil = 100  
- Blind 6+ = 60  
- No talking  
- No signals  
- No reneging  

---

## 🎮 **Gameplay Rules**

- Jokers count as spades (trump)  
- Spades cannot be led until broken  
- Must follow suit  
- If you cannot follow suit → cut or throw off  
- Highest card of suit led wins unless trump is played  

---

## 📊 **Scoring**

- Make your bid → 10 points per book  
- Bags → +1 each  
- 10 bags → –100  
- Miss your bid → –10 per book you bid  
- **Walking the 2♣ ends the game immediately**  

---

## 🖥️ **Project Structure**

```
locked-up/
│
├── index.html        # Game UI
├── locked-up.js      # Game logic + engine
├── locked-up.css     # Styling for the game
├── README.md         # Documentation
│
└── assets/           # Card art, textures, audio, etc.
```

---

## 🚀 **Future Features**

- Online multiplayer  
- Custom card art  
- Sound effects  
- Animations (Joker slam, Walk‑the‑2♣ moment)  
- Mobile-friendly layout  
- AI difficulty levels  

---

## 👤 **Author**

Created by **Michael Rios (KingNeoIV)**  
Hosted at: **[https://kingneoiv.github.io/locked-up/](https://kingneoiv.github.io/locked-up/)**
