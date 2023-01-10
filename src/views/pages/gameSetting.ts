import { Controller } from "../../controllers/blackjack";
import { Table } from "../../models/Table";

export class GameSettingPage {
    static createGameSettingPage(table: Table): void {
        const container: HTMLDivElement = document.getElementById("container") as HTMLDivElement;

        container.innerHTML = `
            <div class="flex justify-center items-center h-screen w-screen">
                <div class="w-6/12 rounded-2xl bg-white shadow-lg flex">
                    <img class="w-5/12 object-cover rounded-l-2xl" src="https://images.unsplash.com/photo-1511193311914-0346f16efe90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80">
                    <div class="w-7/12 p-12">
                        <form id="gameSettingForm">
                            <div class="mb-4">
                                <label class="block mb-2 font-bold text-gray-700">Name</label>
                                <input
                                    class="w-full px-3 py-2 border shadow rounded-xl focus:outline-teal-500"
                                    id="userName"
                                    type="text"
                                    placeholder="Name"
                                    required
                                >
                            </div>
                            <div class="mb-4">
                                <label class="block mb-2 font-bold text-gray-700">Select Game</label>
                                <select class="w-full px-3 py-2 border shadow rounded-xl focus:outline-teal-500" id="gameType">
                                    <option value="blackjack">Blackjack</option>
                                    <option value="porker" disabled>Porker - coming soon -</option>
                                    <option value="baccarat" disabled>Baccarat - coming soon -</option>
                                </select>
                            </div>
                            <div class="mb-8">
                                <label class="block mb-2 font-bold text-gray-700">Computer Player Speed</label>
                                <select class="w-full px-3 py-2 border shadow rounded-xl focus:outline-teal-500" id="computerPlayerSpeed">
                                    <option value="fast">Fast</option>
                                    <option value="middle">Middle</option>
                                    <option value="slow">Slow</option>
                                </select>
                            </div>
                            <button
                                class="w-full px-4 py-2 font-bold text-white bg-zinc-800 rounded-xl hover:bg-teal-500 focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                            GET STARTED
                            </button>
                        </form>
                    </div>
                </div>    
            </div>
        `;

        const gameSettingForm: HTMLFormElement = document.querySelector("#gameSettingForm") as HTMLFormElement;
        gameSettingForm.addEventListener("submit", (e) => {
            e.preventDefault();
            Controller.startBlackJack(table);
        })
    }
}