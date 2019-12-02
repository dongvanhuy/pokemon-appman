import { combineEpics } from 'redux-observable';
import pokeListEpic from '../component/pokemon-list/pokemon-list-epic';


const epics = [
    pokeListEpic,
];

const rootEpic = combineEpics(...epics);


export default rootEpic;
