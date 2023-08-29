import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import "./Nav.css"



const Nav = (props) => {
    const {onSearch, randomize, clear} = props

    const location = useLocation()

    if(location.pathname === `/`){
        return null
    }



    return (
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
    )
}

export default Nav


