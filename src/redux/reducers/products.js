import {SET_PRODUCTS} from "../action-types";

const intialState={
    products:[]
}

export default (state=intialState, action)=>{
    switch (action.type){
        case SET_PRODUCTS:{
            return{... state, products: action.payload}
        }
        default:{
            return state;
        }
    }
}