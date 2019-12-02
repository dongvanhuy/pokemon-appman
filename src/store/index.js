import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import 'rxjs';
import rootReducer from '../reducers';
import rootEpic from '../epics';
import ajaxSetup from '../ajax';


const initialState = {};

const enhancers = [];
const epicMiddleware = createEpicMiddleware();

if (process.env.NODE_ENV === 'development') {
    const { devToolsExtension } = window;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}

const composedEnhancers = compose(
    applyMiddleware(epicMiddleware),
    ...enhancers,
);

const store = createStore(rootReducer, initialState, composedEnhancers);
epicMiddleware.run(rootEpic);

ajaxSetup(store);

export default store;
