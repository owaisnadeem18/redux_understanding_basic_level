
import { createStore } from "redux"

// Step 01:
// Creating a store: 


// Step 02:
// Create Reducers: 
// The basic purpose of reducer is to update our state:


// Syntax of reducer 

// -----------------------

// function ( state , action ) {
    // return something
// }

// -----------------------

// Reducer # 01 (To Deposit the cash)
 
// const cashDeposit = (state = 100 , {type , payload}) => {
//     if (type == "cashdeposit") {
//         return state + payload
//     }
//     return state
// }

// // Calling this function: 

// const backStore = createStore(cashDeposit)

// backStore.dispatch({type:"cashdeposit" , payload: 20})

// console.log(backStore.getState())

// Reducer # 02: 
// Let's create another reducer in order to withdraw the money 

// const withdrawMoney = (state = 34000 , {type , payload}) => {
//     if (type == "withdrawMoney") {
//         return state - payload
//     }
//     return state
// }

// const bankStore = createStore(withdrawMoney)

// bankStore.dispatch({type: "withdrawMoney" , payload: 4000})

// console.log(bankStore.getState())


// Reducer # 03: 
// Let's create another reducer in order to just show the bank balance


const showBalance = (state = 45600 , {type , payload}) => {
    if (type == "showBalance") {
        return state
    }
}

const backStore = createStore(showBalance)

backStore.dispatch({type: "showBalance"})

console.log(backStore.getState())