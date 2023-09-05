import React from 'react'
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import Form from './components/Form/Form';

import { useState, useEffect } from 'react'
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


import "./App.css"
import About from './views/About/About';
import Detail from './components/Detail/Detail';
import ErrorPage from './views/Error/ErrorPage';
import Favorites from './views/Favorites/Favorites';




export const App = () => {

    let navigate= useNavigate()
    const [access, setAccess] = useState(false)
    let EMAIL = "santicortina@hotmail.com";
    let PASSWORD = "santi97";




    function login(userData){
        if (userData.password === PASSWORD && userData.email === EMAIL) {
            setAccess(true);
            navigate('/home');
        }
    }
    useEffect(() => {
        !access && navigate('/');
    }, [access]);

    function logOut(){
        setAccess(false)
        useNavigate("/")
    }

    const [characters, setCharacters] = useState([])

    //* Usar esta direccion:
    // https://rym2-production.up.railway.app/api/character/${id}?key=henrym-santicortina-97


    function onSearch(id) {
            let memoria = [];

            if (id >= 827 || id <= 0 || isNaN(id)) {
                return window.alert('¡No hay personajes con este ID!');
            }

            if (!memoria.includes(id)) {
                if (!characters.some(character => character.id == id)) {
                    axios(`https://rym2-production.up.railway.app/api/character/${id}?key=henrym-santicortina-97`)
                    .then(({ data }) => {
                        if (data.name) {
                            setCharacters((oldChars) => [...oldChars, data]);
                            memoria.push(id);
                        }
                    });
                }else{
                alert("Ese Personaje ya esta incluido")
            }
            }
        }


        //!Buscamos un personaje random
        function randomHandler(){

            let memoria = []

            let randomId = (Math.random()*826).toFixed(); //=> Generamos un id random que este dentro de los 826 => toFixed se queda con la parte positiva
            randomId = Number(randomId); // => toFixed devuelve un String, aca lo pasamos a number

            if(!memoria.includes(randomId)){
                memoria.push(randomId)
                axios(`https://rym2-production.up.railway.app/api/character/${randomId}?key=henrym-santicortina-97`).then(({ data }) => {
                    if (data.name) {
                        setCharacters((oldChars) => [...oldChars, data]);
                    } else {
                        window.alert('¡No hay personajes con este ID!');
                    }
                    });
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
                <Route path='/' element={<Form login={login}/>}/>
                <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/detail/:id" element={<Detail/>}/>
                <Route path="/favorites" element={<Favorites onClose={onClose}/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </div>
    )
}

