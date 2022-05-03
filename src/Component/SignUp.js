import { Form } from "reactstrap";
import GlobalContext from '../Context/GlobalContext';

import InputFields from './InputFields';

const SignUp = ({data, setData}) => (
    <GlobalContext.Consumer>{({signupValidator}) => (
        <Form>
            <InputFields type='text' id='username' label='Username' placeholder='Username' valid={signupValidator.usernameValid}
                invalid={signupValidator.usernameInvalid} validMessage = "Username available!!" value={data.username}
                    onChange={(e) => setData({...data, username: e.target.value})} 
                        invalidMessage="Invalid!! Username" />

            <InputFields type="email" id="Email" label="Email" placeholder='Email' invalid={signupValidator.emailInvalid}
                value={data.email} invalidMessage="Invalid Email!!"
                    onChange={(e) => setData({...data, email: e.target.value})} />

            <InputFields type="tel" id="Phone" label="Phone" placeholder='Phone' invalid={signupValidator.phoneInvalid}
                value={data.phone} invalidMessage="Invalid!! Phone Number"
                    onChange={(e) => setData({...data, phone: e.target.value})} />

            <InputFields type="password" id="Password" label="Password" placeholder='Password' invalid={signupValidator.passwordInvalid}
                value={data.password} invalidMessage="Weak Password!! (Minimum 8 characters)" 
                    onChange={(e) => setData({...data, password: e.target.value})}/>

            <InputFields type="password" id="ConfirmPassword" placeholder='Confirm Password' label="Confirm Password" 
                value={data.confirmPassword} invalid={signupValidator.passwordMatch} invalidMessage="Password does not match!!"
                    onChange={(e) => setData({...data, confirmPassword: e.target.value})} />
        </Form>
    )}</GlobalContext.Consumer>
);

export default SignUp;