import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import perfilImage from "./perfil.jpeg"
import style from "./about.module.css"

const About = () => {

    //!Mostrar info
    const [info, setInfo] = useState(false)
    
    const infoDesplegable = () =>{
        setInfo(!info)
    }
/*     const plegarInfo = () =>{
        setInfo(!info)
    } */

    return (
/*         <div>
            <div>
            <Link to={"/home"}><button>⬅Back</button></Link>
            </div>
            <div className={style.container}>
            <div className={style.card}>
                <p>Hello everyone! I am Santiago and I am 26 years old, I live in Buenos Aires, Argentina</p>
                <div className={style.cardContainer}>
                    <h2>Santiago Manuel Cortina</h2>
                </div>
            </div>
            </div>
        </div> */
        <div className={style.container}>
            <div>
            <Link to={"/home"}><button className={style.back}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32"><path fill="#ffffff" d="m2.36 11.23l8.31 7.57c.61.56 1.6.12 1.6-.71v-3.63c0-.35.29-.64.64-.64h15.86c.66 0 1.19-.53 1.19-1.19V8.42c0-.66-.53-1.19-1.19-1.19H12.91c-.35 0-.64-.29-.64-.64V2.96c0-.83-.99-1.27-1.6-.71L2.36 9.82a.946.946 0 0 0 0 1.41Zm13.97 17.53l-2.54-6.95c-.16-.49-.62-.81-1.13-.81c-.51 0-.97.32-1.12.79l-2.57 6.98c-.18.48.07 1 .55 1.18c.1.03.21.05.32.05c.37 0 .73-.23.86-.6l.41-1.13c.04.01.08.01.12.01h2.87c.03 0 .07 0 .1-.01l.41 1.12c.18.48.7.73 1.18.55c.47-.17.71-.7.54-1.18Zm-4.54-2.32l.87-2.38l.86 2.38h-1.73Zm-3.56-2.73c0 .53-.15 1.02-.41 1.43a2.7 2.7 0 0 1 1.07 2.15c0 1.38-1.05 2.54-2.4 2.69c-.04.01-.09.02-.13.01c-.06.01-.12.01-.18.01H2.92a.92.92 0 0 1-.92-.93v-7.16c0-.5.41-.91.92-.91h2.6c.1 0 .19 0 .27.01a7.905 7.905 0 0 0 .19.03c1.28.22 2.25 1.34 2.25 2.67Zm-2.7-.87H3.84v1.74h1.68c.48 0 .88-.39.88-.87a.87.87 0 0 0-.87-.87Zm-1.69 3.57v1.74h2.35a.87.87 0 0 0 0-1.74H3.84Zm18.76 1.94a3.308 3.308 0 0 1-6.17-1.66v-2.38c0-1.83 1.48-3.31 3.31-3.31c1.18 0 2.28.64 2.87 1.65c.26.44.1 1-.33 1.26c-.44.26-1 .11-1.26-.33a1.5 1.5 0 0 0-1.28-.74c-.8 0-1.47.66-1.47 1.47v2.38c0 .81.67 1.47 1.47 1.47c.53 0 1.01-.28 1.28-.74c.26-.43.81-.59 1.26-.33c.42.26.58.82.32 1.26Zm4.63-3.48l2.6 3.68c.29.42.2.99-.23 1.29c-.42.29-.99.19-1.28-.22l-2.41-3.42l-.69.69v2.2c0 .51-.41.92-.92.92s-.92-.41-.92-.92v-7.17c0-.51.41-.92.92-.92s.92.41.92.92v2.37l3.01-3.02c.36-.36.94-.36 1.3 0c.36.36.36.94 0 1.3l-2.3 2.3Z"/></svg></button></Link>
            </div>
            <div className={style.containerCard}>
                <div className={style.card}>
                    <img className={style.image} src={perfilImage} alt="" />
                    <div>
                        <h2>Santiago Manuel Cortina</h2>
                    </div>
                    <p onClick={infoDesplegable} className={style.arrow}>{info ? <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 50 50"><g><path fill="currentColor" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15z"/><path fill="currentColor" d="M33.3 26.7L25 18.4l-8.3 8.3l-1.4-1.4l9.7-9.7l9.7 9.7z"/><path fill="currentColor" d="M24 17h2v17h-2z"/></g></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 50 50"><g transform="rotate(180 25 25)"><path fill="currentColor" d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15z"/><path fill="currentColor" d="M33.3 26.7L25 18.4l-8.3 8.3l-1.4-1.4l9.7-9.7l9.7 9.7z"/><path fill="currentColor" d="M24 17h2v17h-2z"/></g></svg>}</p>
                    {info && (
                        <div>
                            <div className={style.infoCard}>
                                <p className={style.info}>Hello everyone! My name is Santiago and I am 26 years old. I am from Buenos Aires, Argentina. I hope you like my presentation. Have a good day!</p>
                            </div>
                            <div className={style.redes}>
                                <a href="https://github.com/santicortina-97" target='blank'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg></a>
                                <a href="https://www.linkedin.com/in/santiago-cortina-153446122/" target='blank'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"/></svg></a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default About