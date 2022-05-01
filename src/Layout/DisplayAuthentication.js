import { useState } from 'react';
import {
    Card, CardFooter, Button, CardTitle, CardBody
} from 'reactstrap';

import SignUp from '../Component/SignUp';
import Login from '../Component/Login';

const DisplayAuthentication = ({name}) => {
    const [signupData, setSignupData] = useState({});
    const [loginData, setLoginData] = useState({});

    const SignUpClick = () => {
        console.log(signupData);
    }

    const LoginClick = () => {
        console.log(loginData);
    }

    return (
        <div className='p-sm-5 w-sm-50 m-auto'>
        <Card className='Card'>
            <CardTitle className='text-center'>
                <h2>{name}</h2>
            </CardTitle>
            <CardBody>
                { 
                    name === 'Login' 
                        ? <Login data={loginData} setData={setLoginData} /> 
                        : <SignUp data={signupData} setData={setSignupData} /> 
                }
            </CardBody>
            <CardFooter>
                <div className='text-center'>
                    <Button onClick={name === 'Login' ? LoginClick : SignUpClick} size='lg' id='signup'>{name}</Button>
                </div>
            </CardFooter>
        </Card>
        </div>
    );
}

export default DisplayAuthentication;