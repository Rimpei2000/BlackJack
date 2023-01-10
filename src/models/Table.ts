import { Deck } from "./Deck";
import { Player } from "./Player";

export class Table {
    private deck: Deck;
    private players: Player[];

    constructor() {
        this.deck = new Deck();
        this.players = [];
    }

    setDeck(deck: Deck): void {
        this.deck = deck;
    }

    setPlayers(userName: string): void {
        let players: Player[] = [];
        players.push(new Player('HOUSE', 'HOUSE'));
        players.push(new Player(userName, 'user'));

        this.players = players;
    }

    getDeck(): Deck {
        return this.deck;
    }

    getPlayers(): Player[] {
        return this.players;
    }

    assignTwoCardsToPlayers(): void {
        this.players.map((player) => {
            for (let i = 0; i < 2; i++) {
                player.draw(this.deck.drawOne()!);
            }
        })
    }
}