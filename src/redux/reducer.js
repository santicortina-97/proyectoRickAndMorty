import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";


const initialState = {
    myFavorites: [],
    allCharacters: []
}

export default function rootReducer(state = initialState, action){
    let ordenados;
    switch (action.type) {
/*         case ADD_FAV:
            return{
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                //Copia del estado para no modificar el original
                allCharacters: [...state.myFavorites, action.payload]
            } */
            case ADD_FAV:
                return { 
                    ...state, 
                    myFavorites: action.payload, 
                    allCharacters: action.payload 
                };

        case REMOVE_FAV:
/*             return{
                ...state,
                myFavorites: state.myFavorites.filter(characters => characters.id !== Number(action.payload))
            } */
            return { 
                ...state, 
                myFavorites: action.payload,
                allCharacters: action.payload  
            };
        case FILTER:
            //Opcion para mostrar a todos
            if(action.payload === "All"){
                return{
                    ...state,
                    myFavorites:state.allCharacters
                }
            }else{
                return{
                    ...state,
                    //Filtramos la copia del estado para no perder la informacion original
                    myFavorites: state.allCharacters.filter(characters => characters.gender === action.payload),
                }
            }
        case ORDER:
            if(action.payload === "Ascendente"){ //Si a > b dejo a en la posicion 1, sino en la posicion -1
                ordenados= state.myFavorites.sort((a,b) => (a.id > b.id  ? 1 : -1))
            }else{
                ordenados= state.myFavorites.sort((a,b) => (b.id > a.id  ? 1 : -1))
            }
            return{
                ...state,
                myFavorites: [...ordenados]
            }
        default:
            return {...state}
    }
}


//Caso getcharacter
// case GET_CHARACTERS:
//     return{
//         ...state,
//         characters:action.payload
//     }









