import { handleActions } from 'redux-actions';
import {
    POKEMON_LOAD_SUCCESS,
} from '../../actions/actionType';

const initialState = {
    data: [],
};


const actions = {
    [POKEMON_LOAD_SUCCESS]: ((state = initialState, payload) => {
            const cards  = payload.payload;
            state.data = cards;
            return state;
        } 
    ),
};

export default handleActions(actions, initialState);