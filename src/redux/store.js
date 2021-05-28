import { createStore } from 'redux';
import { SET_KML, SET_POPUPSTATE }  from './actions';
const initialState = {
    kml: '',
    popupState: ''
}

const store = createStore(( state = initialState, action ) => {
    switch(action.type){
        case SET_KML:
            return {...state, kml: action.payload}
        case SET_POPUPSTATE:
            return {...state, popupState: action.payload}
        default:
            return {...state}

    }
})


export default store;