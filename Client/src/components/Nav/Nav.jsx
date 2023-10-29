import SearchBar from '../SearchBar/SearchBar'
import { useState } from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import style from "./nav.module.css"




const Nav = (props) => {
    const {onSearch, randomize, clear,logOut} = props

    //Menu
    const [menu, setMenu] = useState(false)

    const menuDesplegable = () =>{
        setMenu(!menu)
    }
    const plegarMenu = () =>{
        setMenu(!menu)
    }

    const location = useLocation()

    if(location.pathname === `/` || location.pathname === `/favorites` || location.pathname === `/about` || location.pathname.startsWith('/Detail')){ //starwith oculta el nav en la url que empieza por /Detail/
        return null
    }

    return (

        <div className={style.container}>
            <div className={style.logOut}>
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
            {location.pathname === "/home" && (
        <div className={style.containerDiv2}>
            <SearchBar onSearch={onSearch}/>
            <button onClick={randomize} className={style.botonCard}>Random</button>
            <button onClick={clear} className={style.botonCard}>Clear</button>
        </div>
            )}

    </div>
    )
}

export default Nav


