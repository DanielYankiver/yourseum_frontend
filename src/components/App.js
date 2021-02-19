import { Route, Switch, withRouter } from 'react-router-dom';
import { useState , useEffect} from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from './Header';
import AuthForm from './AuthForm';
import ArtPage from './ArtPage';
import FavPage from './FavPage';

function App(props) {

  const [ currentUser,setCurrentUser ] = useState(null);
  const [ artworks, setArtworks ] = useState([]);
  const [ favArtworks, setFavArtworks ] = useState([]);
    
  useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        fetch("https://mighty-sea-97245.herokuapp.com/me",{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((r) => r.json())
          .then((user) => {
            setCurrentUser(user);
          });
        fetch("https://mighty-sea-97245.herokuapp.com/arts")
        .then(r => r.json())
        .then(artworkArray => {
          setArtworks(artworkArray);
        });
      }
    }, []);

    function handleLogOut(){
      localStorage.removeItem("token")
      setCurrentUser(null);
      props.history.push('/');
    }

  return (
    <div className="App">
      <Header history={props.history} currentUser={currentUser} handleLogOut={handleLogOut}/>
      <Switch >
        <Route exact path="/">
          <AuthForm history={props.history} setCurrentUser={setCurrentUser}></AuthForm>
        </Route>
        <Route path="/artwork">
          {currentUser ? <ArtPage 
            artworks={artworks} 
            history={props.history} 
            favArtworks={favArtworks} 
            setFavArtworks={setFavArtworks} 
            setArtworks={setArtworks} 
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
          />: null}
        </Route>
        <Route path="/favorites">
          <FavPage currentUser={currentUser}/>
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);

