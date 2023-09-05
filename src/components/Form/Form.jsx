import React from 'react'
import { validation } from '../../utils/validation'
import { useState, useEffect } from 'react'
import style from "./Form.module.css"
/* import "./Form.css" */




/* const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validation(userData){
    let errors = {};

    if(!userData.email){
        errors.email= "Escribe tu email para continuar"
    }
    if(!regexEmail.test(userData.email)){
        errors.email= "Por favor, ingresá el email"
    }
    if(userData.email.length >= 35){
        errors.email= "El email no puede superar los 35 caracteres"
    }

    if(!/\d/.test(userData.password)){
        errors.password= "La contraseña debe contener un número"
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password= "La contraseña debe contener entre 6 y 10 caracteres"
    }
    
    return errors

} */




const Form = ({login}) => {
    const [showGif, setShowGif] = useState(false);
    
    const [userData, setUserData] = useState({
        email:"",
        password:""
    })

    const [errors, setErrors] = useState({
        email:"",
        password:""
    })

    function handleChange(event){
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(
            validation({
                ...userData,
                [event.target.name]: event.target.value
            })
        )
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!errors.email && !errors.password) {
            setShowGif(true); // Mostrar el GIF animado
            setTimeout(() => {
                setShowGif(false); // Ocultar el GIF después de 1 segundo
                login(userData);
            }, 2000); // Redirigir después de ocultar el GIF
        }
    }

    useEffect(() => {
        document.body.style.backgroundImage = `url("https://i.pinimg.com/originals/ee/b0/6d/eeb06d7f03ab560ddc2487638ee566de.jpg")`;

        return() =>{
        document.body.style.backgroundImage = null
        }
    }, []);

/* <img src="https://64.media.tumblr.com/c632c64e01e2098d596854fff0739a2b/tumblr_pdbo3togim1xd0gvgo1_1280.gif" alt="Loading GIF" className='gif'/> */
    return (
/*         <div className='contenedorForm'>
            {showGif ? (
                <img src="https://media.giphy.com/media/i2tLw5ZyikSFdkeGHT/giphy.gif" alt="Loading GIF" className='gif'/>
                
            ) : (
                <form className='form' onSubmit={handleSubmit}>
                    <img src="https://occ-0-2433-990.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABdlsO0LP022AtLRcPlik-5uWGqVS90oIr1Wy70ULe7-qyaW-Y3a9zUgndw6Q6KuHX2gH_Vd3Nxnl6EOU38_ep9ApNbNfn2Krr6hLj6fhs_eZ.png?r=976" alt="" />
                    <label htmlFor="">Email:</label>
                    <input type="text" className='input' name='email' value={userData.email} onChange={handleChange} placeholder='Email'/>
                    {errors.email && <span className='errorSpan'>{errors.email}</span>}
                    <label htmlFor="">Password</label>
                    <input type="text" className='input' name='password' value={userData.password} onChange={handleChange} placeholder='Password'/>
                    {errors.password && <span className='errorSpan'>{errors.password}</span>}
                    <button className="btn" onClick={handleSubmit}>Submit</button>
                </form>
            )}
        </div> */
            <div className={style.container}>
                {showGif ? (
                    <img src="https://media.giphy.com/media/i2tLw5ZyikSFdkeGHT/giphy.gif" alt="Loading GIF" className={style.gif}/>
                    
                ) : (
                    <form className={style.form} onSubmit={handleSubmit}>
                        <img src="https://occ-0-2433-990.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABdlsO0LP022AtLRcPlik-5uWGqVS90oIr1Wy70ULe7-qyaW-Y3a9zUgndw6Q6KuHX2gH_Vd3Nxnl6EOU38_ep9ApNbNfn2Krr6hLj6fhs_eZ.png?r=976" alt="" />
                        <label htmlFor="">Email:</label>
                        <input type="text" className={style.input} name='email' value={userData.email} onChange={handleChange} placeholder='Email'/>
                        {errors.email && <span className={style.error}>{errors.email}</span>}
                        <label htmlFor="">Password</label>
                        <input type="text" className={style.input} name='password' value={userData.password} onChange={handleChange} placeholder='Password'/>
                        {errors.password && <span className={style.error}>{errors.password}</span>}
                        <button className={style.btn} onClick={handleSubmit}>Submit</button>
                    </form>
                )}
            </div>
    )
}

export default Form