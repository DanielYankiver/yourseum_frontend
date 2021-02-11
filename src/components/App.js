import { Route, Switch, withRouter } from 'react-router-dom';
import { useState , useEffect} from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from './Header';
import Login from './Login';
import ArtPage from './ArtPage';

function App(props) {
  const [ currentUser,setCurrentUser ] = useState(null);
  const [ artworks, setArtworks ] = useState([]);
    
  useEffect(() => {
      fetch("http://localhost:3001/me")
        .then((r) => r.json())
        .then((user) => {
          setCurrentUser(user);
        });
      fetch("http://localhost:3001/arts")
      .then(r => r.json())
      .then(artworkArray => {
        setArtworks(artworkArray);
      })
    }, []);

  return (
    <div className="App">
      <Header />
      <Switch >
        <Route exact path="/">
          <Login history={props.history} setCurrentUser={setCurrentUser}></Login>
        </Route>
        <Route path="/artwork">
          <ArtPage artworks={artworks} history={props.history} />
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
