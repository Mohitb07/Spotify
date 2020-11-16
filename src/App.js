import React, {useEffect,useState} from 'react';
import './App.css';

import Login from './components/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import {useStateProviderValues} from './StateProvider';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{user}, dispatch] = useStateProviderValues()


  useEffect(()=> {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;    

    if(_token){
      setToken(_token);

      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        dispatch({
          type:'SET_USER',
          user,
        })

      })

    }

    console.log('I have a token', token);
  }, []);

  console.log(user)
  return (
    <div className="app">
      {
        token ? (
          <h1>I am logged in</h1>
        ) : (
          <Login/>
        )
      }
    </div>
  );
}

export default App;
