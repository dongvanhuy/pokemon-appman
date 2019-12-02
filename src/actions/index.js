import { createAction } from 'redux-actions';
import {
    POKEMON_LOAD,
    POKEMON_LOAD_SUCCESS,
    POKEMON_LOAD_FAIL,
    REMOVE_POKEDEX,
} from './actionType';

export const loadPokemon = createAction(POKEMON_LOAD);
export const removePokedex = createAction(REMOVE_POKEDEX);
export const loadPokemonSuccess = createAction(POKEMON_LOAD_SUCCESS);
export const loadPokemonFail = createAction(POKEMON_LOAD_FAIL);