import React from 'react'
import { Link } from 'react-router-dom'
import style from "./about.module.css"

const About = () => {
    return (
        <div className={style.container}>
            <div className={style.button}>
            <Link to={"/home"}><button>⬅Back</button></Link>
            </div>
            <div className={style.about}>
            <h1>About</h1>
            </div>
        </div>
    )
}

export default About