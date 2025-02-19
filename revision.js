// Let's revise all this concept of redux , before creating the mini projects to master the concept of redux

import { combineReducers, createStore } from "redux";

// Initial values 

const initialState = {
    amount: 0
}

const bankReducer = (state = initialState , {type , payload}) => {
    if (type == "show") {
        return {amount: state.amount}
    }
    else if (type == "deposit") {
        return {amount: state.amount + payload }
    }

    else if (type == "withdraw") {
        return {amount: state.amount - payload}
    }

    return state
}

const bankStore = createStore(bankReducer)

bankStore.dispatch({type: "deposit" , payload: 5000})
bankStore.dispatch({type: "deposit" , payload: 5000})
bankStore.dispatch({type: "withdraw" , payload: 1000})
bankStore.dispatch({type: "show"})

console.log(bankStore.getState())