import React, { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { filterCards, orderCards } from '../../redux/actions'
import Cards from '../../components/Cards/Cards'
import style from "./Favorites.module.css"

const Favorites = () => {
    const dispatch = useDispatch();
    //Recibe un callBack, el cual tiene al estado (reducer) y de ese estado nos quedamos con (en este caso myFavorites)
    const favorites = useSelector((state) => state.myFavorites)
    console.log(favorites)

    
    const [aux, setAux] = useState(false)

    function handleOrder(e){
        dispatch(orderCards(e.target.value))
        setAux(true)
    }

    function handleFilter(e){
        if(e.target.value === "All"){
            dispatch(filterCards(e.target.value))
        }else{
            dispatch(filterCards(e.target.value))            
        }
    }



    return (

        <div className={style.container}>
            <Link to="/home"><button className={style.back}>Back</button></Link>
            <div className={style.containerOption}>
            <select name="" id="" onChange={handleOrder}>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>
            <select name="" id="" onChange={handleFilter}>
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>
            </div>
            <h1>Favorites</h1>
            <Cards characters={favorites}/>
        </div>
        
    )
}

export default Favorites

/* const mapStateToProps = (state) =>{
    return{
        favorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites) */


