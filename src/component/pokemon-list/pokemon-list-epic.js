
import { combineEpics } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import ApiService from '../../api/apiService';
import { Observable } from "rxjs";
import {
    POKEMON_LOAD,
} from '../../actions/actionType';
import {
    loadPokemonSuccess,
} from '../../actions';

export const loadPokemonEpic = action$ => action$.pipe(
    ofType(POKEMON_LOAD),
    mergeMap(() =>
        Observable.fromPromise(ApiService.loadPokemon().pipe(
            map(res => {
                console.log('res>>', res.data.cards);
                return loadPokemonSuccess(res.data.cards);
            })
      )
    )));

export default combineEpics(
    loadPokemonEpic,
);