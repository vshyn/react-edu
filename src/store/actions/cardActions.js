import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import {
    CREATE_CARD,
    REMOVE_CARDS,
    GET_CARDS,
    UPDATE_CARD,
    CHANGE_CARD_TICK,
} from './actionTypes';

export const ticked = (id, tick, isEdit) => ({
    type: CHANGE_CARD_TICK,
    payload: { id, tick, isEdit },
});

export const update = (title, info, id) => ({
    type: UPDATE_CARD,
    payload: { title, info, id },
});

export const create = () => ({
    type: CREATE_CARD,
});

export const remove = () => ({
    type: REMOVE_CARDS,
});

export const loadCards = () => (dispatch) =>
    axios
        .get(
            'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json'
        )
        .then((response) => {
            dispatch({
                type: GET_CARDS,
                payload: {
                    cards: response.data.slice(0, 15).map((line) => ({
                        id: uuidv4(),
                        title: line.Name,
                        info: line.About,
                        tick: false,
                    })),
                },
            });
        });
