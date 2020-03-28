export const SIMPLE_ACTION_TYPES = {
    SIMPLE_ACTION : 'SIMPLE ACTION'
}

export const simpleAction = () =>{
    console.log('call')
    return{
        type:SIMPLE_ACTION_TYPES.SIMPLE_ACTION,
        payload:'I am payload from simple action'
    }
}