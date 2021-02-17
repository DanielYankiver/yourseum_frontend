import { useState } from 'react';
import Login from './Login'
import SignUp from './SignUp';

function AuthForm({setCurrentUser, history}){

    const [formRendered, setFormRendered] = useState(true)

    function renderLogin(){
        setFormRendered((formRendered) => formRendered = true);
    }

    function renderSignUp(){
        setFormRendered((formRendered) => formRendered = false);
    }

    return(
        <div className="login-form-div">
            <div className="login-sign-option">
                <span style={{color:'ivory'}} className="login-option" onClick={renderLogin}>LOGIN</span>
                <span style={{color:'ivory'}} className="login-option" onClick={renderSignUp}>SIGN UP</span>
                { formRendered ? <Login setCurrentUser={setCurrentUser} history={history}></Login> 
                : 
                <SignUp setCurrentUser={setCurrentUser} history={history}></SignUp>}
            </div>
        </div>
    );
}

export default AuthForm;