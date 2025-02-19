
import { combineReducers, createStore } from "redux"

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


// const showBalance = (state = 45600 , {type , payload}) => {
//     if (type == "showBalance") {
//         return state
//     }
// }

// const backStore = createStore(showBalance)

// backStore.dispatch({type: "showBalance"})

// console.log(backStore.getState())

// 19-Feb-2025 
// Let's Learn about merge reducers

// const cashDeposit = (state = 100 , {type , payload}) => {
//     if (type == "cashDeposit") {
//         return state + payload
//     }
//     return state
// }

// const withdrawMoney = (state = 50 , {type , payload}) => {
//     if (type == "withdrawMoney") {
//         if (state < payload) {
//             return "Sorry , you have lesser amount in bank ..."
//         }
//         else {
//             return state - payload
//         }
//     }
//     return state
// }

// const checkBalance= (state = 200 , {type}) => {
    
//     if (type == "checkBalance") {
//         return state
//     }
//     return state
// }   


// Now let's call all these reducers separately 

// const bankStore = createStore(withdrawMoney)

// bankStore.dispatch({type: "withdrawMoney" , payload: 50})

// console.log(bankStore.getState())

// Now , If I want to combinely call all of them: 

// const mergeReducers = combineReducers({
//     BalanceCheck : checkBalance , 
//     deposit: cashDeposit,
//     withdraw: withdrawMoney
// })

// const bankStore = createStore(mergeReducers)

// bankStore.dispatch({type:"cashDeposit" , payload: 500})
// bankStore.dispatch({type:"withdrawMoney" , payload: 40})
// bankStore.dispatch({type: "checkBalance"})

// console.log(bankStore.getState())

// --------------------------------- Dynamic state

// Now, we have to create a dynamic state in redux 

// Initial State
// const initialState = {
//     cash: 500
// };

// const checkBalance = (state = initialState , {type}) => {
//     if (type== "check") {
//         return state
//     }
//     return state
// }

// const cashDeposit = (state = initialState , {type , payload}) => {
//     if (type == "deposit") {
//         return {
//             cash: state.cash + payload
//         }
//     }
//     return state
// }

// const withdrawMoney = (state = initialState  , {type , payload}) => {
//     if (type == "withdraw") {
//         if (state.cash < payload) {
//             return "Sorry , you have lesser amount in bank ..."
//         }
//         else {
//             return {                
//                 cash: state.cash - payload
//             }
//         }
//     }
//     return state
// }

// const mergeReducers = combineReducers({
//     check : checkBalance , 
//     deposit : cashDeposit , 
//     withdraw : withdrawMoney 
// })

// const bankStore = createStore(mergeReducers)

// bankStore.dispatch({type:"check"})
// // bankStore.dispatch({type: "deposit" , payload : 50000 })
// // bankStore.dispatch({type: "withdraw" , payload: 340 })

// console.log(bankStore.getState())

const ProductCart = (state=[] , {type , payload}) => {
    switch(type) {
        case "addProduct": 
            return [ ...state , payload ]
        case "deleteProduct": 
            return state.filter((item) => item.id !== payload)
        case "showProducts": 
            return state;
        default:
            return state
    }
}

const mergeReducers = combineReducers({
    productCart : ProductCart
})

const store = createStore(mergeReducers)

store.dispatch({type: "addProduct" , payload: {id: 1 , name: "Samsung S21"}})

store.dispatch({type: "addProduct" , payload: {id: 2 , name: "Samsung S22"}})

store.dispatch({type: "deleteProduct" , payload: 2})

store.dispatch({type: "showProducts"})

console.log(store.getState())

// ------------------ End of basics of redux ------------------