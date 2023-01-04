export const plottedPoints=(state=[],action)=>{
    switch(action.type){
        case 'plotpoints':
            return state.push(action.data)
        default:
            return state
    }
}

export const plotpoints=(data)=>{
    return{
        type:'plotpoints',
        data
    }
}