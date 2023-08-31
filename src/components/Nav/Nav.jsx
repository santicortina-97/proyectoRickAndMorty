import SearchBar from '../SearchBar/SearchBar'
import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
/* import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom' */
/* import "./Nav.css" */
import style from "./nav.module.css"



const Nav = (props) => {
    const {onSearch, randomize, clear} = props
    //Menu
    const [menu, setMenu] = useState(false)

    const menuDesplegable = () =>{
        setMenu(!menu)
    }

    const location = useLocation()

    if(location.pathname === `/`){
        return null
    }


/*     return (
        <div className='nav'>
            <div className='link'>
                <Link to="/"><button className='botonHome'>Log Out</button></Link>
                <Link to="/home"><button className='botonHome'>Home</button></Link>
                <Link to="/about"><button className='botonAbout'>About</button></Link>
                <Link to="/favorites"><button className='botonAbout'>Favorites</button></Link>
            </div>
            <div className='navSearch'>
                <SearchBar onSearch={onSearch} />
                <button onClick={randomize} className="button">Random</button>
                <button  className="button" onClick={clear}>Clear</button>
            </div>
        </div>
    ) */
    return (
        <div className={style.container}>
            <div className={style.containerDiv1}>
                <NavLink to="/"><button className={style.boton}>Log Out</button></NavLink>
            <div className={style.dropdown}>
                <button onClick={menuDesplegable} className={style.boton}>Menu</button>
                {menu && (
                <div className={style.dropdownContent}>
                    <NavLink to="/home"><p>Home</p></NavLink>
                    <NavLink to="/about"><p>About</p></NavLink>
                    <NavLink to="/favorites"><p>Favorites</p></NavLink>
                </div>
                )}
            </div>
            </div>
            <div className={style.containerDiv2}>
                <SearchBar onSearch={onSearch} />
                <button onClick={randomize} className={style.boton}>Random</button>
                <button onClick={clear} className={style.boton}>Clear</button>
            </div>
        </div>
    )
}

export default Nav


