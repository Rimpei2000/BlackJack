import { Card } from "./Card";

export class Deck {
    deck: Card[];

    constructor() {
        this.deck = [];
        this.createDeck();
        this.shuffle();
    }

    setCards(deck: Card[]): void {
        this.deck = deck;
    }

    getCards(): Card[] {
        return this.deck;
    }

    addAnotherCardToDeck(newCard: Card): void {
        this.deck.push(newCard);
    }

    createDeck(): void {
        const suits = ["H", "D", "C", "S"];
        const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

        for (const suit in suits) {
            for (const rank in ranks) {
                this.addAnotherCardToDeck(new Card(suit, rank));
            }
        }
    }

    shuffle(): void {
        for (let i = this.deck.length - 1; i >= 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        }
    }

    resetDeck(): void {
        this.createDeck();
    }

    drawOne(): Card | void {
        if (this.deck.length > 1) {
            return this.deck.pop();
        }
        return;
    }

    printDeck(): void {
        for (let i = 0; i < this.deck.length; i++) {
            console.log(this.deck[i]);
        }
    }
}

// const deck = new Deck();
// deck.createDeck();
// deck.printDeck();
// console.log("shuffle");
// deck.shuffle();
// deck.printDeck();
// for (let i = 0; i < 5; i++) {
//     console.log(deck.drawOne());
// };
