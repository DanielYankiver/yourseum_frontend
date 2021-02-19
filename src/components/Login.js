import { useState } from 'react';

function Login({setCurrentUser, history}){
    const [ username, setUsername] = useState("")
    const [ password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    function handleLogin(e){
        e.preventDefault();
        const loginUser = {
            username: username,
            password: password
        }
        fetch(`${process.env.REACT_APP_RAILS_URL}/login`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginUser)
        })
        .then((r) => r.json())
        .then((loggedUser) => {
            if (loggedUser.errors){
                setErrors(loggedUser.errors)
            } else {
                const { user, token } = loggedUser;
                localStorage.setItem("token", token);
                setCurrentUser(user);
                history.push('/artwork')
            }
         }); 
    }

    return (
            <form className="login-form" onSubmit={handleLogin} autoComplete="off">
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
                <input className="submit-button" type="submit" value="Login"/>
            </form> 
    );
}

export default Login;


