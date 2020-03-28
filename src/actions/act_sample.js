export const SIMPLE_ACTION_TYPES = {
    SIMPLE_ACTION : 'SIMPLE ACTION'
}

export const simpleAction = () =>{
    return{
        type:SIMPLE_ACTION_TYPES.SIMPLE_ACTION,
        payload:'I am payload from simple action'
    }
}