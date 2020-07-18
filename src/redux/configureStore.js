import {createStore } from 'redux';
import {Reducer, initialiState} from './reducer';


export const ConfigureStore = () =>{
    const store = createStore(
        Reducer,
        initialiState
    );
    return store;
};