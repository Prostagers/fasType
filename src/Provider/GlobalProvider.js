import { useState } from "react";
import GlobalContext from "../Context/GlobalContext";

const Provider = props => {
    const [usernameValid, setUsernameValid] = useState(false);
    const [usernameInvalid, setUsernameInvalid] = useState(false);
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [phoneInvalid, setPhoneInvalid] = useState(false);
    const [passwordInvalid, setPasswordInvalid] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(false);

    const [isEmailEmpty, setIsEmailEmpty] = useState(false);
    const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);

    const resetSignupValidator = () => {
        setUsernameValid(false);
        setUsernameInvalid(false);
        setEmailInvalid(false);
        setPhoneInvalid(false);
        setPasswordInvalid(false);
        setPasswordMatch(false);
    }

    const resetLoginValidator = () => {
        setIsEmailEmpty(false);
        setIsPasswordEmpty(false);
        console.log(isEmailEmpty, isPasswordEmpty);
    }

    return (
        <GlobalContext.Provider value={{
            resetSignupValidator, resetLoginValidator,
            signupValidator: {
                usernameValid, usernameInvalid, emailInvalid, phoneInvalid, passwordInvalid, passwordMatch
            },
            setSignupValidator: {
                setUsernameValid, setUsernameInvalid, setEmailInvalid, setPhoneInvalid, setPasswordInvalid, setPasswordMatch
            },
            loginValidator: {
                isEmailEmpty, isPasswordEmpty
            },
            setLoginValidator: {
                setIsEmailEmpty, setIsPasswordEmpty
            }
        }} >
            {props.children}
        </GlobalContext.Provider>
    );
};

export default Provider;