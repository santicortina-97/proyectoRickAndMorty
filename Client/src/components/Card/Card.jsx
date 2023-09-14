import React from "react";
import { Link } from "react-router-dom";
//!REDUX
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import style from "./Card.module.css"




export default function Card(props) {
   const dispatch = useDispatch()
   const favorites = useSelector((state) => state.myFavorites)
   const {character, onClose} = props
   const [isfav, setIsfav] = useState(false)
   const location = useLocation()



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
         dispatch(removeFav(character.id))
      }else{
         setIsfav(true)
         dispatch(addFav(character, onClose))
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



