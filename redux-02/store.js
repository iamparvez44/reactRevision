import { productList } from "./productList.js";
import {createStore} from "redux"

const initialState = {
    products: productList,
    cartItems: [],
    wishList: []
}

function reducer(state = initialState, action){

switch(action.type){
    case "cart/addItem":
        return {...state, cartItems: [...state.cartItems, action.payload]}

    case "cart/removeItem":
        return {...state, cartItems: state.cartItems.filter((item)=>{
            return item.productId !==action.payload.productId
        })}

        default:
            return state
}

}

const store = createStore(reducer)

store.dispatch({type:"cart/addItem", payload: {productId: 1, quantity: 1}})
store.dispatch({type:"cart/addItem", payload: {productId: 2, quantity: 1}})
store.dispatch({type:"cart/addItem", payload: {productId: 7, quantity: 1}})
store.dispatch({type:"cart/addItem", payload: {productId: 12, quantity: 1}})
store.dispatch({type:"cart/removeItem", payload: {productId: 2} })

console.log(store.getState())
