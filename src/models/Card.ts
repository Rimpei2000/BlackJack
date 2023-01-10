export class Card {

    constructor(public suit: string, public rank: string) {

    }

    public getRankNumber(): number {
        if (this.rank === "J" || this.rank === "Q" || this.rank === "K") {
            return 10;
        } else if (this.rank === "A") {
            // A can be either 1 or 11, but for now it'll return 11
            return 11;
        } else {
            return +this.rank;
        }
    }

    public printCard(): void {
        console.log(this.suit, this.rank);
    }
}