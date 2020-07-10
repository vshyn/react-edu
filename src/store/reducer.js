import { v4 as uuidv4 } from 'uuid';
import {
    CREATE_CARD,
    REMOVE_CARDS,
    GET_CARDS,
    UPDATE_CARD,
    CHANGE_CARD_TICK,
    CHANGE_MODE,
} from './actionTypes';

const initialState = {
    cards: [],
    readOnly: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_CARD:
            return {
                ...state,
                cards: [
                    {
                        id: uuidv4(),
                        title: 'Caption',
                        info: 'text',
                        tick: false,
                    },
                    ...state.cards,
                ],
            };
        case REMOVE_CARDS:
            return { ...state, cards: state.cards.filter((card) => !card.tick) };
        case GET_CARDS:
            return { ...state, cards: action.payload.cards };
        case UPDATE_CARD:
            return {
                ...state,
                cards: state.cards.map((card) =>
                    card.id === action.payload.id
                        ? {
                              ...card,
                              title: action.payload.title,
                              info: action.payload.info,
                              id: action.payload.id,
                          }
                        : card
                ),
            };
        case CHANGE_CARD_TICK:
            return {
                ...state,
                cards: state.cards.map((card) =>
                    card.id === action.payload.id
                        ? {
                              ...card,
                              tick: !action.payload.isEdit
                                  ? action.payload.isEdit
                                  : action.payload.tick,
                              id: action.payload.id,
                          }
                        : card
                ),
            };
        case CHANGE_MODE:
            return { ...state, readOnly: !state.readOnly };
        default:
            return state;
    }
};

export default reducer;
