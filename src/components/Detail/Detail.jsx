import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "./Detail.css"

const Detail = () => {
  const {id} = useParams()
  const [character, setCharacter] = useState({})



    useEffect(() => {
      document.body.style.backgroundImage = `url("https://w.forfun.com/fetch/03/03fdb791c0c8753db54348da091ba79b.jpeg")`;

      return() =>{
        document.body.style.backgroundImage = null
      }
    }, []);



  useEffect(() => {
    axios(`https://rym2-production.up.railway.app/api/character/${id}?key=henrym-santicortina-97`).then(({ data }) => {
      if (data.name) {
          setCharacter(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
    });
    return setCharacter({});
  }, [id]);


  return (
    <div className='detailConteiner'>
      <div className='detail'>
          <img src={character.image} alt="" />
          <h2>{character.name}</h2>
          <h2>{character.status}</h2>
          <h2>{character.species}</h2>
          <h2>{character.gender}</h2>
          <h2>{character.origin?.name}</h2>
      </div>
    </div>
  )
}

export default Detail