const validateSignup = (data, {setSignupValidator, setIsValid}) => {
    // Username
    if(data.username == null || data.username === '') {
        setSignupValidator.setUsernameInvalid(true)
        return false;
    }
    // Email
    if(data.email == null || data.email === '' ||
         data.email.indexOf('@') === -1 || data.email.indexOf('.') === -1) {

        setSignupValidator.setEmailInvalid(true)
        return false;
    }
    // Phone
    if(data.phone == null || data.phone === '' || data.phone.length !== 10 || data.phone === "[0-9]") {
        setSignupValidator.setPhoneInvalid(true)
        return false;
    }
    // Password
    if(data.password == null || data.password === '' || data.password.length < 8) {
        setSignupValidator.setPasswordInvalid(true)
        return false;
    }
    // Confirm Password
    if(data.confirmPassword == null || data.confirmPassword === '' || data.confirmPassword !== data.password) {
        setSignupValidator.setPasswordMatch(true)
        return false;
    }

    return true;
}

const validateLogin = (data, {setLoginValidator, setIsValid}) => {
    // Username
    if(data.username == null || data.username === '') {
        setLoginValidator.setIsEmailEmpty(true)
        return false;
    }
    // Password
    if(data.password == null || data.password === '') {
        setLoginValidator.setIsPasswordEmpty(true)
        return false;
    }

    return true;
}

export { validateLogin, validateSignup };