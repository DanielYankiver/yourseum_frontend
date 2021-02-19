import { useState } from 'react';

function SignUp({setCurrentUser, history}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    function handleSignUp(e){
        e.preventDefault();
        const newUser = {
            username: username,
            password: password
        }
        fetch('https://mighty-sea-97245.herokuapp.com/signup',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then((r) => r.json())
        .then((newUser) => {
            if (newUser.errors){
                setErrors(newUser.errors)
            } else {
                const { user, token } = newUser;
                localStorage.setItem("token", token);
                setCurrentUser(user);
                history.push('/artwork')
            }
         }); 
    }

    return (
        <form className="login-form" onSubmit={handleSignUp} autoComplete="off">
            <input 
                type="text" 
                name="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Enter Username"/>
                <br></br>
                <br></br>
            <input 
                type="password" 
                name="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Enter Password"
            />
                <br></br>
                <br></br>
            {errors.map((error) => {
                return <p key={error}>{error}</p>;
            })}
            <input className="submit-button" type="submit" value="SignUp"/>
        </form>
    );
}   

export default SignUp;