import { useState } from 'react';
// import { MDBCol, MDBAnimation, MDBCard, MDBCardBody, MDBIcon, MDBInput, MDBBtn, MDBView, MDBMask, MDBContainer, MDBRow} from 'mdbreact';
// import "../App.css"
// import {withRouter} from 'react-router-dom';
// #test

function Login({setCurrentUser, history}){
    const [ username, setUsername] = useState("")
    const [ password, setPassword] = useState("")
    // const [ login, setLogin ] = useState(true)
    
    function handleLogin(e){
        e.preventDefault();
        const loginUser = {
            username: username,
            password: password
        }
        console.log(loginUser)
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

    function toggleForm(e){
        if (e.target.textContent === "Login"){
            e.target.textContent = "Signup";
        } else {
            e.target.textContent = "Login";
        }
    }


    return (
        <div className="login-form-div">   
            <form className="login-form" onSubmit={handleLogin}>
                <h1 className="login-h1" onClick={(e)=>toggleForm(e)}>Login</h1>
                <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Username"/>
                <br></br>
                <br></br>
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password"/>
                <br></br>
                <br></br>
                <input className="submit-button" type="submit" />
            </form> 
        </div> 
    );
}

export default Login;


