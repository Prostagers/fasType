import { useState } from 'react';
import { Form } from "reactstrap";

import InputFields from './InputFields';

const SignUp = ({data, setData}) => {
    const [usernameValid, setUsernameValid] = useState(false);
    const [usernameInvalid, setUsernameInvalid] = useState(false);
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [phoneInvalid, setPhoneInvalid] = useState(false);
    const [passwordInvalid, setPasswordInvalid] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(false);

    return (
        <Form>
            <InputFields type='text' id='username' label='Username' placeholder='Username' valid={usernameValid} 
                invalid={usernameInvalid} validMessage = "Username accepted!!" value={data.username}
                    onChange={(e) => setData({...data, username: e.target.value})} 
                        invalidMessage="Username already exists!!" />

            <InputFields type="email" id="Email" label="Email" placeholder='Email' invalid={emailInvalid}
                value={data.email} invalidMessage="Invalid Email!!"
                    onChange={(e) => setData({...data, email: e.target.value})} />

            <InputFields type="tel" id="Phone" label="Phone" placeholder='Phone' invalid={phoneInvalid}
                value={data.phone} invalidMessage="Invalid!! Phone Number"
                    onChange={(e) => setData({...data, phone: e.target.value})} />

            <InputFields type="password" id="Password" label="Password" placeholder='Password' invalid={passwordInvalid}
                value={data.password} invalidMessage="Weak Password!!" 
                    onChange={(e) => setData({...data, password: e.target.value})}/>

            <InputFields type="password" id="ConfirmPassword" placeholder='Confirm Password' label="Confirm Password" 
                value={data.confirmPassword} invalid={passwordMatch} invalidMessage="Password does not match!!"
                    onChange={(e) => setData({...data, confirmPassword: e.target.value})} />
        </Form>
    );
};

export default SignUp;