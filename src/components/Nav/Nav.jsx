import SearchBar from '../SearchBar/SearchBar'
import { useState } from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom'
/* import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom' */
/* import "./Nav.css" */
import style from "./nav.module.css"




const Nav = (props) => {
    const {onSearch, randomize, clear,logOut} = props
/*     const {id} = useParams()
    console.log(id) */
    //Menu
    const [menu, setMenu] = useState(false)

    const menuDesplegable = () =>{
        setMenu(!menu)
    }
    const plegarMenu = () =>{
        setMenu(!menu)
    }

    const location = useLocation()

    if(location.pathname === `/` || location.pathname === `/favorites` || location.pathname === `/about` || location.pathname === `/Detail/1`){
        return null
    }

    return (

        <div className={style.container}>
{/*         <div className={style.containerDiv1}> */}
            <div className={style.logOut}>
            <button onClick={logOut} className={style.boton}>Log Out</button>
            </div>
            
            <div className={style.dropdown}>
                <button onClick={menuDesplegable} className={style.boton}>Menu</button>
                {menu && (
                <div className={style.dropdownContent}>
                    <NavLink to="/home" style={{textDecoration: "none"}} onClick={plegarMenu}><p>Home</p></NavLink>
                    <NavLink to="/about" style={{textDecoration: "none"}} onClick={plegarMenu}><p>About</p></NavLink>
                    <NavLink to="/favorites" style={{textDecoration: "none"}} onClick={plegarMenu}><p>Favorites</p></NavLink>
                </div>
                )}
            </div>
{/*         </div> */}
            {location.pathname === "/home" && (
        <div className={style.containerDiv2}>
            <SearchBar onSearch={onSearch}/>
            <button onClick={randomize} className={style.botonCard}>Random</button>
            <button onClick={clear} className={style.botonCard}>Clear</button>
        </div>
            )}
{/* {(location.pathname === "/about" || location.pathname === "/favorites") && (
    <button>Back</button>
)} */}

    </div>
    )
}

export default Nav


