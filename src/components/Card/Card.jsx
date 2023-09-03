import React from "react";
import { Link } from "react-router-dom";
//!REDUX
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import style from "./Card.module.css"




function Card(props) {
   const {character, onClose, addFav, removeFav, favorites} = props
   
   const [isfav, setIsfav] = useState(false)
   const location = useLocation()

/*    const [closeBtn, setCloseBtn] = useState(false)
   useEffect(() =>{
      if(!onClose){
         setCloseBtn(false)
      }
   }, []) */


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

      <div className={style.container}>
         <div className={style.imgButton}>
            <img src={character.image} alt={character.name} />
         </div>
         <div className={style.info}>
            <Link to={`/Detail/${character.id}`} style={{textDecoration: "none"}}><h2>{character.name}</h2></Link>
               <div className={style.data}>
                  <h3>{character.status === 'Alive' ? '🟢 Alive' : character.status === "Dead" ? '🔴 Dead' : "Unknown"}</h3>
                  <h3>ID: {character.id}</h3>
               </div>
         </div>
         <div className={style.heartId}>
            <div className={style.id}>
               {location.pathname !== "/favorites" && <button onClick={onClose} className={style.close}>❌</button>}
            </div>
            <div className={style.heart}>
               {
                  <button onClick={() => handleFavorite(character)} className={style.heart}>{isfav ? "❤️" : "🤍"}</button>
               }
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




