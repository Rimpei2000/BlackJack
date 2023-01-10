import { GameDecision } from "./GameDecision";
import { Card } from "./Card";

enum PlayerStatus {
    BETTING,
    READY_FOR_ACTION,
    DONE_WITH_ACTION,
    BUST,
    BROKE
}

export class Player {
    private name: string;
    private chip: number;
    private type: string;
    private hand: Card[];
    private gameDecision: GameDecision;
    private playerStatus: PlayerStatus;

    constructor(name: string, type: string, chip: number = 400, ps: PlayerStatus = PlayerStatus.BETTING) {
        this.name = name;
        this.chip = chip;
        this.type = type;
        this.hand = [];
        this.gameDecision = <GameDecision>{};
        this.playerStatus = ps;
    }

    setName(name: string): void {
        this.name = name;
    }

    setChip(chip: number): void {
        this.chip = chip;
    }

    setHand(hand: Card[]): void {
        this.hand = hand;
    }

    setType(type: string): void {
        this.type = type;
    }

    setGameDecision(gd: GameDecision): void {
        this.gameDecision = gd;
    }

    setPlayerStatus(ps: PlayerStatus): void {
        this.playerStatus = ps;
    }

    getName(): string {
        return this.name;
    }

    getType(): string {
        return this.type;
    }

    getChip(): number {
        return this.chip;
    }

    getHand(): Card[] {
        return this.hand;
    }

    getPlayerStatus(): PlayerStatus {
        return this.playerStatus;
    }

    getGameDecision(): GameDecision {
        return this.gameDecision;
    }

    houseNextAction(secondCard: Card): string {
        const handLen = this.hand.length;
        const handScore = this.getHandScore();
        const secondScore = secondCard.getRankNumber();
        let nextAction = "";

        if (handLen === 2) {
            if (handScore === 21) {
                nextAction = "blackjack";
            } else {
                // "A"
                if (secondScore === 11) {
                    if (handScore === 17) nextAction = "stand";
                    if (handScore === 16 || nextAction === "") nextAction = "hit";
                } else {
                    if (handScore >= 17) nextAction = "stand";
                    if (handScore >= 13 && handScore <= 16 && secondScore <= 6) nextAction = "stand";
                    if (handScore === 12 && secondScore >= 3 && secondScore <= 6) nextAction = "stand";

                    if (handScore === 16 && secondScore === 10) nextAction = "surrender";
                    if (handScore === 15 && secondScore >= 9) nextAction = "surrender";

                    if (handScore === 11) nextAction = "double";
                    if (handScore === 10 && secondScore >= 9) nextAction = "double";
                    if (handScore === 9 && secondScore >= 3 && secondScore <= 6) nextAction = "double";

                    if (nextAction === "") nextAction = "hit";
                }
            }
        }
        if (handLen >= 3) {
            if (handScore < 17) nextAction = "hit";
            else nextAction = "stand";
        }

        return nextAction;
    }

    // actions -> bet, surrender, stand, hit, double
    draw(card: Card): void {
        this.hand.push(card);
    }

    getHandScore(): number {
        let score = 0;
        for (let i = 0; i < this.hand.length; i++) {
            score += this.hand[i].getRankNumber();
        }
        return score;
    }

    isPlayerBusted(): boolean {
        if (this.getHandScore() > 21) return true;
        return false;
    }
}