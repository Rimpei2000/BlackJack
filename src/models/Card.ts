export class Card {
    private suit: string;
    private rank: string;

    constructor(suit: string, rank: string) {
        this.suit = suit;
        this.rank = rank;
    }

    getRankNumber(): number {
        if (this.rank === "J" || this.rank === "Q" || this.rank === "K") {
            return 10;
        } else if (this.rank === "A") {
            // A can be either 1 or 11, but for now it'll return 11
            return 11;
        } else {
            return +this.rank;
        }
    }

    printCard(): void {
        console.log(this.suit, this.rank);
    }
}