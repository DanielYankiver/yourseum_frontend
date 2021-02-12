import { useState } from 'react';
// import {withRouter} from 'react-router-dom';

function Login({setCurrentUser, history}){
    const [ username, setUsername] = useState("")
    const [ password, setPassword] = useState("")

    
    function handleLogin(e){
        e.preventDefault();
        const loginUser = {
            username: username,
            password: password
        }
        fetch('http://localhost:3001/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginUser)
        })
        .then((r) => r.json())
        .then((user) => {
            setCurrentUser(user);
            history.push('/artwork')
         });    

    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <label 
                    htmlFor="username" 
                    placeholder="Enter Username"
                > 
                Username
                </label>
                <input 
                    type="text" 
                    name="username" 
                    value = {username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label 
                    htmlFor="password" 
                    placeholder="Enter Password"
                > 
                Password
                </label>
                <input 
                    type="password" 
                    name="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input type="submit" />
            </form> 
        </div>
    );
}

export default Login;