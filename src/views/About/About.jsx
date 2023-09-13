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
            <div className={style.card}>
            <img src="https://images7.alphacoders.com/633/633262.png" alt="" />
            <h2>Santiago Manuel Cortina</h2>
            </div>
            </div>
        </div>
    )
}

export default About