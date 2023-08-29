import { ADD_FAV, REMOVE_FAV } from "./actions";


const initialState = {
    myFavorites: [],
    characters: []
}

export default function rootReducer(state = initialState, action){
    switch (action.type) {
        case ADD_FAV:
            return{
                ...state/* .myFavorites */,
                myFavorites: [...state.myFavorites, action.payload]
            }
        
            case REMOVE_FAV:
                return{
                    ...state,
                    myFavorites: state.myFavorites.filter(characters => characters.id !== Number(action.payload))
                }
        default:
            return {...state}
    }
}









