import { createStore } from "redux"

// Let's create a reducer now.....

let initialState = {
    count: 0
}

const getState = (state = initialState , {type , payload}) => {
    if (type == "cashDeposit") {
        return { ...state , count: state.count + payload}
    }
    return state
}

// Let's create dispatch now: 

const bankStore = createStore(getState)

bankStore.dispatch({type: "cashDeposit" , payload: 400})

console.log(bankStore.getState())