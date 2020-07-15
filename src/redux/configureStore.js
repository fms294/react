import {createStore } from 'redux';
import {Reducer, initialState, initialiState} from './reducer';


export const ConfigureStore = () =>{
    const store = createStore(
        Reducer,
        initialiState
    );
    return store;
};