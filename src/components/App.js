import { Route, Switch, withRouter } from 'react-router-dom';
import { useState , useEffect} from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from './Header'
import Login from './Login'

function App(props) {
  const [ currentUser,setCurrentUser ] = useState(null)

    useEffect(() => {
      fetch("http://localhost:3001/me")
        .then((r) => r.json())
        .then((user) => {
          setCurrentUser(user);
        });
    }, []);

  return (
    <div className="App">
      <Header />
      <Switch >
        <Route exact path="/">
          <Login history={props.history} setCurrentUser={setCurrentUser}></Login>
        </Route>
        <Route path="/artwork">
          <h1>Welcome to your artwork</h1>
          //ArtPage Component 
        </Route>
        <Route path="/favorites">
          <h1>Welcome to your favorites</h1>
          //FavPage Component 
        </Route>
        <Route path="/fullscreen">
          <h1>Welcome to fullscreen</h1>
          //Fullscreen Component 
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
