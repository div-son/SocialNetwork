export default function ValidateInfo(values){
    let errors = {}

    if(!values.firstName.trim()){
        errors.firstName = "First name is required"
    }

    if(!values.email){
        errors.email = "Email is required"
    }

    else if(!/^[A-Z0-9._%+-] + @[A-Z0-9.-] + \.[A-Z]{2, }$/i.test(values.email)){

    errors.email = "Email address is invalid"
    }

    if(!values.password){
        errors.password = "Password is required"
    }

    else if(values.password.length < 6){
        errors.password = "Password must be less than 6 characters or more."
    }

    if(!values.password2){
        errors.password2 = "Password is required"
    }
    else if(values.password2 !== values.password){
        errors.password2 = "Password do not match"
    }

    return errors
}