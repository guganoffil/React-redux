import {ADD_TO_CART, REMOVE_FROM_CART} from '../Constant'
export const addTocart =(data)=>{
    // console.warn('action',data)
    return {
        type:ADD_TO_CART,
        data:data
    }
}
export const removefromcart =(data)=>{
    // console.warn('action',data)
    return {
        type: REMOVE_FROM_CART,
        
    }
}