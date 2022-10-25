const firstState = {
    newsState:[]
}

export default function reducer(state=firstState, action){
    switch(action.type){
        case 'NEWS':
            return {
                ...state,
                newsState: action.payload
            }
        default:
            return state
    }
}