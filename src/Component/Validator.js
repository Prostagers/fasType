const validateSignup = (data, {setSignupValidator}) => {
    // Username
    if(data.username == null || data.username === '') {
        setSignupValidator.setUsernameInvalid(true)
    }
    // Email
    if(data.email == null || data.email === '' ||
         data.email.indexOf('@') === -1 || data.email.indexOf('.') === -1) {

        setSignupValidator.setEmailInvalid(true)
    }
    // Phone
    if(data.phone == null || data.phone === '' || data.phone.length !== 10) {
        setSignupValidator.setPhoneInvalid(true)
    }
    // Password
    if(data.password == null || data.password === '' || data.password.length < 8) {
        setSignupValidator.setPasswordInvalid(true)
    }
    // Confirm Password
    if(data.confirmPassword == null || data.confirmPassword === '' || data.confirmPassword !== data.password) {
        setSignupValidator.setPasswordMatch(true)
    }
}

const validateLogin = (data, {loginValidator, setLoginValidator}) => {
    console.log(data);
    console.log(loginValidator);
    // Email
    if(data.email == null || data.email === '') {
        setLoginValidator.setIsEmailEmpty(true)
    }
    // Password
    if(data.password == null || data.password === '') {
        setLoginValidator.setIsPasswordEmpty(true)
    }
    console.log(setLoginValidator);
}

export { validateLogin, validateSignup };