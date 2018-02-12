let initialState = [];
const  START_NEW_GAME = 'START_NEW_GAME';
const RESET_GAME = 'RESET_GAME';

export default (state=initialState, action) => {
    let { type, payload } = action;

    switch(type) {
        case START_NEW_GAME: 
            return [...state, payload];
        case RESET_GAME:
            return [...state, payload];

        default: 
            return state;
    }
}