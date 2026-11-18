
import { createStore } from "redux"

let reduxState = {
    count: 0,
    name : "parvez",
    age: "28"
}

const initialState = reduxState

function reducer(state = initialState, action){

    if(action.type=="increment"){

        return {...state, count: state.count+1}

    }

    else if(action.type=="decrement"){

        return {...state, count: state.count-1}

    }

    else if(action.type=="reset"){
        return {...state, count: 0}
    }

    else if(action.type=="incrementBy"){
        return {...state, count: state.count+action.payload}
    }

    else if(action.type=="decrementBy"){
        return {...state, count: state.count-action.payload}
    }

    else{
        return state
    }

    

}

// console.log(reduxState);

// reduxState = reducer(reduxState, {type:"increment"})
// reduxState = reducer(reduxState, {type:"increment"})
// reduxState = reducer(reduxState, {type:"increment"})
// reduxState = reducer(reduxState, {type:"increment"})

// console.log(reduxState)


// reduxState = reducer(reduxState, {type:"decrement"})
// console.log(reduxState)

// reduxState = reducer(reduxState, {type:"kjbkjhbkds"})
// console.log(reduxState)

// reduxState = reducer(reduxState, {type:"incrementBy", payload: 100})
// console.log(reduxState)

// reduxState = reducer(reduxState, {type:"decrementBy", payload: 30})
// console.log(reduxState)



const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store.dispatch({type:"increment"}));
console.log(store.getState());

console.log(store.dispatch({type:"increment"}));
console.log(store.getState());


console.log(store.dispatch({type:"increment"}));
console.log(store.getState());


console.log(store.dispatch({type:"increment"}));
console.log(store.getState());

console.log(store.dispatch({type:"incrementBy", payload: 1023}))
console.log(store.getState());