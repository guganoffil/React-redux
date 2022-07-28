import {ADD_TO_CART,REMOVE_FROM_CART} from '../Constant'
const initialState={
    cardData:[]
}
export default function cardItems(state=[],Action){
    switch(Action.type){
        case ADD_TO_CART:
            // console.warn('reducer',Action)
            return [
                ...state,
                {cardData:Action.data}
            ]
            case REMOVE_FROM_CART:
                state.pop()

                // console.warn('reducer',Action)
                return [
                    ...state,

                ]
            default:
                return state
    }
}