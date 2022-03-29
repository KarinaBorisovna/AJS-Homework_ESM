import Game, { GameSavingData as saveGame, readGameSaving as readGame, writeGameSaving as writeGame } from './game.js';
import './domain.js';

const game = new Game();
game.start();