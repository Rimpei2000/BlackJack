export class GameDecision {
    private action: string;
    private amount: number;

    constructor(action: string, amount: number) {
        this.action = action;
        this.amount = amount;
    }

    setAction(action: string): void {
        this.action = action;
    }

    setAmount(amount: number): void {
        this.amount = amount;
    }

    getAction(): string {
        return this.action;
    }

    getAmount(): number {
        return this.amount;
    }
}