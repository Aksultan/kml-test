import { createStore } from 'redux';
import { SET_KML }  from './actions';
const initialState = {
    kml: ``
}

const store = createStore(( state = initialState, action ) => {
    switch(action.type){
        case SET_KML:
            return {...state, kml: action.payload}
        default:
            return {...state}

    }
})


export default store;