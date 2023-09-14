const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

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

}


