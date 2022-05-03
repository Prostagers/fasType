import { Form } from "reactstrap";
import GlobalContext from '../Context/GlobalContext';

import InputFields from './InputFields';

const Login = ({data, setData}) => (
    <GlobalContext.Consumer>{({loginValidator}) => (
        <Form>
            {console.log(loginValidator)}
            <InputFields type="email" id="Email" label="Username/Email" placeholder='Username/Email' 
                invalid={loginValidator.isEmailEmpty} invalidMessage="Input Field can not be Empty!!" value={data.username}
                    onChange={(e) => setData({...data, username: e.target.value})} />

            <InputFields type="password" id="Password" label="Password" placeholder='Password' 
                invalid={loginValidator.isPasswordEmpty} invalidMessage="Input Field can not be Empty!!" value={data.password}
                onChange={(e) => setData({...data, password: e.target.value})} />
        </Form>
    )}</GlobalContext.Consumer>
);

export default Login;