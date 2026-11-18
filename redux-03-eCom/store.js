import { productList } from "./productList.js";
import { createStore } from "redux";



const initialState = {
    productList: productList,
    cartItem: [],
    wishList: []

}

function reducer(state = initialState, action){

    switch(action.type){
        case "cart/addItem":
            return {...state, 
              cartItem: [...state.cartItem, action.payload]
             }

        case "cart/removeItem":
            return {
                ...state, cartItem: state.cartItem.filter((item)=>{

                    return item.id !==action.payload.id

                })
            }
       case "cart/increase":
    return {
        ...state,
        cartItem: state.cartItem.map((item) => {
            if (item.id === action.payload.id) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                };
            }
            return item;
        })
    };
    
             default :
             return state
    }

}
const store = createStore(reducer)


store.dispatch({type:"cart/addItem", payload: {id: 1, quantity: 1}})
store.dispatch({type:"cart/addItem", payload: {id: 2, quantity: 1}})
store.dispatch({type:"cart/addItem", payload: {id: 3, quantity: 1}})

// console.log(store.getState());

// store.dispatch({type:"cart/removeItem", payload: {id: 2}})
// store.dispatch({type:"cart/removeItem", payload: {id: 3}})
// store.dispatch({type:"cart/removeItem", payload: {id: 1}})


store.dispatch({type: "cart/increase",payload: {id: 2}});

console.log(store.getState());
