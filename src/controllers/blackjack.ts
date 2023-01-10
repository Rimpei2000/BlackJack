import { Deck } from "../models/Deck";
import { Table } from "../models/Table";
import { GameBoard } from "../views/pages/gameBoard";
import { GameSettingPage } from "../views/pages/gameSetting";

export class Controller {
    static displayGameSettingPage() {
        GameSettingPage.createGameSettingPage(new Table());
    }

    static startBlackJack(table: Table) {
        const userName = "get from userInput";

        table.setPlayers(userName);
        table.setDeck(new Deck());
        table.assignTwoCardsToPlayers();
        GameBoard.createGameBoardPage(table);
    }

    static bettingPhase(table: Table) {

    }

    static setActionPhase(table: Table) {

    }

    static async actingPhase(table: Table) {

    }

    static userAction(table: Table) {

    }

    static displayRoundResultModal(table: Table) {

    }

    static displayGameResultModal(table: Table) {

    }

    static playAnotherRound(table: Table) {

    }

    static playNewGame(table: Table) {

    }    

    static goHome() {

    }
}