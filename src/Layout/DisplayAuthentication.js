import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Axios from 'axios';
import {
    Card, CardFooter, Button, CardTitle, CardBody
} from 'reactstrap';

import SignUp from '../Component/SignUp';
import Login from '../Component/Login';
import GlobalContext from '../Context/GlobalContext';
import { validateLogin, validateSignup } from '../Component/Validator';

const DisplayAuthentication = ({name}) => {
    const [signupData, setSignupData] = useState({});
    const [loginData, setLoginData] = useState({});
    const context = useContext(GlobalContext);
    const navigate = useNavigate();

    const onSubmit = () => {
        context.resetSignupValidator();
        context.resetLoginValidator();
        
        var isValid = (name === 'Login') 
            ? validateLogin(loginData, context)
            : validateSignup(signupData, context);

        if(isValid) {
            Axios.post(`${process.env.REACT_APP_API_URL}/signup`, signupData)
                .then(({ data }) => {
                    console.log(data.StatusCode);
                    if(data.StatusCode === 200) {
                        navigate('/');

                        toast.success(data.Value, {
                            position: toast.POSITION.TOP_CENTER
                        });
                    }
                    else{
                        toast.error(data.Value?.detail, {
                            position: toast.POSITION.TOP_CENTER
                        });
                    }
                })
                .catch(error => {
                    toast.error('Error Occured!! while processing your request', {
                        position: toast.POSITION.TOP_CENTER
                    });
                });
        }
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
                    <Button onClick={onSubmit} size='lg' id='signup'>{name}</Button>
                </div>
            </CardFooter>
        </Card>
        </div>
    );
}

export default DisplayAuthentication;