// In this file I will write the neat and clean code for counter app in react js using reducer

import { combineReducers, createStore } from "redux";

const counterValues = {
    count: 0
}

// create a reducer:

const countReducer = (state = counterValues , {type}) => {
    switch(type) {
        case 'inc':
            return { ...state , count: state.count + 1}
        case 'dec':
            return {...state , count: state.count - 1}
        default: 
            return state
    }
}

const CombineReducers = combineReducers({
    countREDUCER : countReducer
})

const counter = createStore(CombineReducers)

counter.dispatch({type: "inc"})
counter.dispatch({type: "inc"})
counter.dispatch({type: "inc"})
counter.dispatch({type: "inc"})
counter.dispatch({type: "inc"})
counter.dispatch({type: "dec"})
counter.dispatch({type: "dec"})
counter.dispatch({type: "dec"})

console.log(counter.getState())


// Completion of a very simple counter app using redux