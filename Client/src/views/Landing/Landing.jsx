import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import style from "./Landing.module.css"

const Landing = () => {

    
    useEffect(() => {
        document.body.style.backgroundImage = `url("https://i.pinimg.com/originals/ee/b0/6d/eeb06d7f03ab560ddc2487638ee566de.jpg")`;

        return() =>{
        document.body.style.backgroundImage = null
        }
    }, []);
    return (
        <div className={style.container}>
            <img src="https://occ-0-2433-990.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABdlsO0LP022AtLRcPlik-5uWGqVS90oIr1Wy70ULe7-qyaW-Y3a9zUgndw6Q6KuHX2gH_Vd3Nxnl6EOU38_ep9ApNbNfn2Krr6hLj6fhs_eZ.png?r=976" alt="" />
            <Link to="/home" style={{textDecoration: "none"}}>
            <button className={style.button}>
                Ingresar
                <div className={style.icon}>
                    <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="currentColor"
                    ></path>
                    </svg>
                </div>
            </button>
            </Link>
        </div>
    )
}

export default Landing