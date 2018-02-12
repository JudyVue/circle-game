import uuid from 'uuid/v1';
const  START_NEW_GAME = 'START_NEW_GAME';
const RESET_GAME = 'RESET_GAME';

export const startNewGame = (isStartButtonPressed) => {
    return {
        type: START_NEW_GAME,
        payload: isStartButtonPressed,
    }
}

export const resetGame = (isRestButtonPressed) => ({
    type: RESET_GAME,
    payload: isRestButtonPressed,
})