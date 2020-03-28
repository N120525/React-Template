import {SIMPLE_ACTION_TYPES} from '../actions/act_sample'

const initialState = {
    message:''
}

export const sampleReducer = (state = initialState,action) =>{
    switch(action.type){
        case  SIMPLE_ACTION_TYPES.SIMPLE_ACTION :
            return {
                ...state,
                message:action.payload
            }
        default:
            return state
    }

}