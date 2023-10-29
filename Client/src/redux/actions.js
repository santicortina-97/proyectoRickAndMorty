import axios from 'axios';
export const ADD_FAV = "ADD_FAV"
export const REMOVE_FAV = "REMOVE_FAV"
export const FILTER = "FILTER"
export const ORDER = "ORDER"



export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try {
            const {data} = await axios.post(endpoint, character)
                if(data){
                        return dispatch({
                            type: ADD_FAV,
                            payload: data,
                        })
                    }
            } catch (error) {
                    console.log(error)
                }
    };
}



export function removeFav(id){
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) =>{
        try {
            const {data} = await axios.delete(endpoint);
            if(data){
                return dispatch({
                    type: REMOVE_FAV,
                    payload: data,
                })
            }
        } catch (error) {
            console.log(error)
        }
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
