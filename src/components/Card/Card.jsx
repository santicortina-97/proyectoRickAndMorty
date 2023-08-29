import React from "react";
import { Link } from "react-router-dom";
//!REDUX
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./Card.css"




function Card(props) {
   const {character, onClose, addFav, removeFav, favorites} = props
   
   const [isfav, setIsfav] = useState(false)
   
   


   useEffect(() => {
      favorites.forEach((fav) => {
         if (fav.id === character.id) {
            setIsfav(true);
         }
      });
   }, [favorites]);
   
   function handleFavorite(character) {
      if (isfav === true) {
         setIsfav(false)
         removeFav(character.id)
      }else{
         setIsfav(true)
         addFav(character, onClose)
      }
   }
   
   return (
      <div className="tarjeta">
         <div className="card">
         <img src={character.image} alt={character.name} />
         <Link to={`/Detail/${character.id}`}><h2>Name: {character.name}</h2></Link>
         {/* <h2>Status: {character.status}</h2> */}
         <h2>{/* Status:  */}{character.status === 'Alive' ? 'Alive' : character.status === "Dead" ? ' Dead ♰' : "Unknown"}</h2>
         <h2>Specie: {character.species}</h2>
         <h2>Gender: {character.gender}</h2>
{/*          {
            isfav ? (
               <button onClick={() => handleFavorite(character.id)} className="heart">❤️</button>
            ) : (
               <button onClick={() => handleFavorite(character)} className="heart">🤍</button>
            )
         } */}
         {
            <button onClick={() => handleFavorite(character)} className="heart">{isfav ? "❤️" : "🤍"}</button>
         }
         <div  className="boton">
         <button onClick={onClose}>X</button>
         </div>
         </div>
      </div>
   );
}

//!REDUX


export const mapDispatchToProps = (dispatch) =>{
   return{
      addFav:(character)=> {
         dispatch(addFav(character))
      },
      removeFav: (id) => {
         dispatch(removeFav(id))
      }
   }
}

export const mapStateToProps = (state) =>{
   return{
      favorites: state.myFavorites
   }
}

export default connect (mapStateToProps, mapDispatchToProps)(Card)




