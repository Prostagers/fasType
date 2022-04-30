import {
    Card, CardFooter, Button, CardTitle, CardBody
} from 'reactstrap';

import SignUp from './SignUp';
import Login from './Login';

const DisplayAuthentication = ({name, onClick}) => {
    return (
        <div className='p-sm-5 w-sm-50 m-auto'>
        <Card className='Card'>
            <CardTitle className='text-center'>
                <h2>{name}</h2>
            </CardTitle>
            <CardBody>
                { name === 'Login' ? <Login /> : <SignUp /> }
            </CardBody>
            <CardFooter>
                <div className='text-center'>
                    <Button onClick={onClick} size='lg' id='signup'>{name}</Button>
                </div>
            </CardFooter>
        </Card>
        </div>
    );
}

export default DisplayAuthentication;