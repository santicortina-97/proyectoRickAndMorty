import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
/* import "./Detail.css" */
import style from "./Detail.module.css"

const Detail = () => {
  const {id} = useParams()
  const [character, setCharacter] = useState({})
/*   const [visible, setVisible] = useState(false) */
  console.log(character)

/*   useEffect(() =>{
    const delay= setTimeout(() =>{
      setVisible(true);
    }, 2000)
    return() => clearTimeout(delay)
  }, []) */

  useEffect(() => {
    document.body.style.backgroundImage = `url("https://w.forfun.com/fetch/03/03fdb791c0c8753db54348da091ba79b.jpeg")`;

    return() =>{
      document.body.style.backgroundImage = null
    }
  }, []);




  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      if (data.name) {
          setCharacter(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
    });
    return setCharacter({});
  }, [id]);


  return (
/*     <div className={style.container}>

      <div className={style.containerDetail}>
        <div className={style.containerHead}>
          <img src={character.image} alt="" />
          <h2>{character.name}</h2>
        </div>
          <h2><u>Specie</u>: {character.species}</h2>
          <h2><u>Gender</u>: {character.gender}</h2>
          <h2><u>Origin</u>: {character.origin?.name}</h2>
          <h2><u>Location</u>: {character.location?.name}</h2>
        <h2>{character.status}</h2>
        <h2>{character.id}</h2>
      </div>
    </div> */

    <div className={style.container}>
      <div className={style.containerDetail}>
        <div className={style.containerHead}>
          <div>
            <div className={style.image}>
              <img src={character.image} alt="" />
              <h2>{character.name}</h2>
            </div>
              <div className={style.containerText}>
                <h3><u>Specie</u>: {character.species}</h3>
                <h3><u>Gender</u>: {character.gender}</h3>
                <h3><u>Origin</u>: {character.origin?.name}</h3>
                <h3><u>Location</u>: {character.location?.name}</h3>
              </div>
          </div>
        </div>
        <div className={style.id}>
          <p>{character.status === 'Alive' ? '🟢 Alive' : character.status === "Dead" ? '🔴 Dead' : "Unknown"}</p>
          <p>ID: {id}</p>
        </div>
      </div>
  </div>
  )
}

export default Detail