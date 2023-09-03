export const ADD_FAV = "ADD_FAV"
export const REMOVE_FAV = "REMOVE_FAV"
export const FILTER = "FILTER"
export const ORDER = "ORDER"


export function addFav(character){
    return{
        type: ADD_FAV,
        payload: character
    }
}

export function removeFav(id){
    return{
        type: REMOVE_FAV,
        payload: id
    }
}

export function filterCards(gender){
    return{
        type: FILTER,
        payload: gender
    }
}

export function orderCards(order){
    return{
        type: ORDER,
        payload: order
    }
}

//import axios from "axios"

// export const getCharacter = () =>{
//?     Le aclaramos a la funcion que es asincrona y recibe dispatch
//     return async function(dispatch){
//?                          Espera a la consukta (pasamos el url de la API)
//         let response = await axios.get(`https://rym2-production.up.railway.app/api/character/${id}?key=henrym-santicortina-97`)
//         return dispatchEvent({type:GET_CHARACTERS, payload: Response.data})
//     }
// }


// export const getDetail = (id) =>{
//     //Le aclaramos a la funcion que es asincrona y recibe dispatch
//     return function(dispatch){
//                         //Espera a la consukta (pasamos el url de la API)
//         fetch(`https://rym2-production.up.railway.app/api/character/${id}?key=henrym-santicortina-97`)
//         .then(respone => Response.json())
//         .then(data => dispatch({type:GET_DETAIL, payload: data}))
//     }
// }