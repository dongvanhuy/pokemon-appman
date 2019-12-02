import pokedexReducer from '../component/pokedex/pokedex-reducer';
import pokemonListReducer from '../component/pokemon-list/pokemon-list-reducer';

import { combineReducers } from 'redux';

export default combineReducers({
    dataPokedex: pokedexReducer,
    dataPokemonList: pokemonListReducer
});