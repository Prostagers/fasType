import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from "reactstrap";

import InputFields from './InputFields';

const SignUp = () => {
    const [usernameValid, setUsernameValid] = useState(false);
    const [usernameInvalid, setUsernameInvalid] = useState(false);
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [phoneInvalid, setPhoneInvalid] = useState(false);
    const [passwordInvalid, setPasswordInvalid] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(false);

    return (
        <Form>
            <InputFields type='text' id='username' label='Username' placeholder='User Name' valid={usernameValid}
                invalid={usernameInvalid} validMessage = "Username accepted!!" 
                    invalidMessage="Username already exists!!" />
            <InputFields type="email" id="Email" label="Email" placeholder="Email" invalid={emailInvalid}
                invalidMessage="Invalid Email!!"/>
            <InputFields type="tel" id="Phone" label="Phone" placeholder="Phone" invalid={phoneInvalid}
                invalidMessage="Invalid!! Phone Number"/>
            <InputFields type="password" id="Password" label="Password" placeholder="Password" invalid={passwordInvalid}
                invalidMessage="Weak Password!!"/>
            <InputFields type="password" id="ConfirmPassword" label="Confirm Password" placeholder="Confirm Password"
                invalid={passwordMatch} invalidMessage="Password does not match!!" />
        </Form>
    );
};

export default SignUp;