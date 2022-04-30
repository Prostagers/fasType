import { useState } from 'react';
import { Form } from "reactstrap";

import InputFields from './InputFields';

const Login = () => {
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [passwordInvalid, setPasswordInvalid] = useState(false);

    return (
        <Form>
            <InputFields type="email" id="Email" label="Username/Email" invalid={emailInvalid}
                invalidMessage="Input Field can not be Empty!!"/>
            <InputFields type="password" id="Password" label="Password" invalid={passwordInvalid}
                invalidMessage="Input Field can not be Empty!!"/>
        </Form>
    );
};

export default Login;