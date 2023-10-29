import React from 'react'
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';

import { useState, useEffect } from 'react'
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


import "./App.css"
import About from './views/About/About';
import Detail from './components/Detail/Detail';
import Favorites from './views/Favorites/Favorites';
import Landing from './views/Landing/Landing';



export const App = () => {

    const [characters, setCharacters] = useState([])

    //* Usar esta direccion:
    // https://rym2-production.up.railway.app/api/character/${id}?key=henrym-santicortina-97

    useEffect(() =>{
        const initialCharacters = async () =>{
            const {data} = await axios.get(`https://rickandmortyapi.com/api/character/`)
            if(data){
                const firstThreeCharacters = data.results.slice(0,2)
                setCharacters(firstThreeCharacters)
            }
        } 
        initialCharacters()
    }, [])


        async function onSearch(id){
            try {
            let memoria = [];
            if (id >= 827 || id <= 0 || isNaN(id)) {
                throw new Error('¡No hay personajes con este ID!');
            }
            if(!memoria.includes(id)){
                if (!characters.some(character => character.id == id)) {
                    const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
                    if(data.name){
                        setCharacters((oldChars) => [...oldChars, data]);
                        memoria.push(id);
                        }
                    }else{
                        throw new Error("Ese Personaje ya esta incluido")
                    }
                }
            }catch (error) {
                alert(error)
            }
        }

        async function randomHandler(){
            try {
                let memoria = [];
                let randomId = (Math.random()*826).toFixed(); //=> Generamos un id random que este dentro de los 826 => toFixed se queda con la parte positiva
                randomId = Number(randomId); // => toFixed devuelve un String, aca lo pasamos a number
                if(!memoria.includes(randomId)){
                    memoria.push(randomId)
                    const {data} = await axios(`http://localhost:3001/rickandmorty/character/${randomId}`)
                    if(data.name){
                        setCharacters((oldChars)=> [...oldChars, data])
                    }else {
                        window.alert('¡No hay personajes con este ID!');
                    }
                }
            } catch (error) {
                console.log(error)
            }
        }

    function onClose(id){
        const filterCharacter = characters.filter(
            (character) => character.id !== Number(id)
        )
        setCharacters(filterCharacter)
    }

    function clear(){
        setCharacters([])
    }


    return (
        <div className='App'>
            <Nav onSearch={onSearch} randomize={randomHandler} clear={clear}/>
            <Routes>
                <Route path='/' element={<Landing/>}/>
                <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/detail/:id" element={<Detail/>}/>
                <Route path="/favorites" element={<Favorites onClose={onClose}/>}/>
            </Routes>
        </div>
    )
}

