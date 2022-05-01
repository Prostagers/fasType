import { useState } from 'react';
import { Form } from "reactstrap";

import InputFields from './InputFields';

const Login = ({data, setData}) => {
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [passwordInvalid, setPasswordInvalid] = useState(false);

    return (
        <Form>
            <InputFields type="email" id="Email" label="Username/Email" placeholder='Username/Email' 
                invalid={emailInvalid} invalidMessage="Input Field can not be Empty!!" value={data.username}
                    onChange={(e) => setData({...data, username: e.target.value})} />

            <InputFields type="password" id="Password" label="Password" placeholder='Password' 
                invalid={passwordInvalid} invalidMessage="Input Field can not be Empty!!" value={data.password}
                onChange={(e) => setData({...data, password: e.target.value})} />
        </Form>
    );
};

export default Login;