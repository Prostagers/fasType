import { useContext, useState } from 'react';
import {
    Card, CardFooter, Button, CardTitle, CardBody
} from 'reactstrap';

import SignUp from '../Component/SignUp';
import Login from '../Component/Login';
import { validateLogin, validateSignup } from '../Component/Validator';
import GlobalContext from '../Context/GlobalContext';

const DisplayAuthentication = ({name}) => {
    const [signupData, setSignupData] = useState({});
    const [loginData, setLoginData] = useState({});
    const context = useContext(GlobalContext);

    const HandleClick = () => {
        context.resetSignupValidator();
        context.resetLoginValidator();
        
        if(name === 'Login') 
            validateLogin(loginData, context);
        else
            validateSignup(signupData, context);
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
                    <Button onClick={HandleClick} size='lg' id='signup'>{name}</Button>
                </div>
            </CardFooter>
        </Card>
        </div>
    );
}

export default DisplayAuthentication;