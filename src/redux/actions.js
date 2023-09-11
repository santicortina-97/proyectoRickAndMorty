import axios from 'axios';
export const ADD_FAV = "ADD_FAV"
export const REMOVE_FAV = "REMOVE_FAV"
export const FILTER = "FILTER"
export const ORDER = "ORDER"


/* export function addFav(character){
    return{
        type: ADD_FAV,
        payload: character
    }
} */
/* export function addFav(character){
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
        axios.post(endpoint, character).then(({ data }) => {
            return dispatch({
                type: ADD_FAV,
                payload: data,
            });
        });
    };
} */

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    try {
    return async (dispatch) => {
        const {data} = await axios.post(endpoint, character)
            if(data){
                return dispatch({
                    type: ADD_FAV,
                    payload: data,
                })
            }
        };
    } catch (error) {
        console.log(error)
    }
}


/* export function removeFav(id){
    return{
        type: REMOVE_FAV,
        payload: id
    }
} */
/* export function removeFav(id){
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
        axios.delete(endpoint).then(({ data }) => {
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
        });
        });
    };
} */

export function removeFav(id){
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    try {
        return async (dispatch) =>{
            const {data} = await axios.delete(endpoint);
            if(data){
                return dispatch({
                    type: REMOVE_FAV,
                    payload: data,
                })
            }
        }
    } catch (error) {
        console.log(error)
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