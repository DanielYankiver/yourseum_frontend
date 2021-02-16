import { Route, Switch, withRouter } from 'react-router-dom';
import { useState , useEffect} from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from './Header';
import Login from './Login';
import ArtPage from './ArtPage';
import FavPage from './FavPage';

function App(props) {
  const [ currentUser,setCurrentUser ] = useState(null);
  const [ artworks, setArtworks ] = useState([]);
  const [ favArtworks, setFavArtworks ] = useState([]);
    
  useEffect(() => {
      fetch("http://localhost:3001/me")
        .then((r) => r.json())
        .then((user) => {
          setCurrentUser(user);
        });
      fetch("http://localhost:3001/arts")
      .then(r => r.json())
      .then(artworkArray => {
        // const newArr = artworkArray.map((artwork) => {
        //   return {...artwork, starred: false}
        // })
        // setArtworks(newArr);
        setArtworks(artworkArray);
      })
    }, []);

    if (!currentUser){ 
      return <h2 className="loading" style={{color:"red"}}>Loading Masterpieces... </h2>
    }

  return (
    <div className="App">
      <Header history={props.history}/>
      <Switch >
        <Route exact path="/">
          <Login history={props.history} setCurrentUser={setCurrentUser}></Login>
        </Route>
        <Route path="/artwork">
          <ArtPage 
            artworks={artworks} 
            history={props.history} 
            favArtworks={favArtworks} 
            setFavArtworks={setFavArtworks} 
            setArtworks={setArtworks} 
            currentUser={currentUser}
          />
        </Route>
        <Route path="/favorites">
          <FavPage />
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

