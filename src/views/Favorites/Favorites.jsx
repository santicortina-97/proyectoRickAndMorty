import React from 'react'
import { connect } from 'react-redux'
import Cards from '../../components/Cards/Cards'

const Favorites = ({favorites}) => {
    console.log(favorites)
    return (
        <div>
            <h1>Favorites</h1>
            <Cards characters={favorites}/>
        </div>
    )
}


const mapStateToProps = (state) =>{
    return{
        favorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)


