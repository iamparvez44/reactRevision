import {createStore} from "redux"


const initialState = 0



function reducer(state= initialState, action){

    if(action.type=="increment"){
        return state+1
    }
    else if(action.type=="decremnet"){
        return state-1
    }
    else if(action.type=="reset"){
        return 0
    }
    else if(action.type=="incrementBy"){
        return state+action.payload
    }
    else{
        return state
    }

}


function increment(){
    return {
        type: "increment"
    }
}

function decremnet(){
    return {
        type: "decremnet",
    }
}

function reset(){
    return {
        type: "reset"
    }
}

function incrementBy(type, payload){
    return {
        type: type,
        payload: payload

    }
}


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(incrementBy("incrementBy", 211));
console.log(store.getState())
