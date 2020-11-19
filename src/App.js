import React, {useEffect,useState} from 'react';
import './App.css';

import Login from './components/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import {useStateProviderValues} from './StateProvider';
import Player from './components/Player';

const spotify = new SpotifyWebApi();

function App() {
  const [{user, token}, dispatch] = useStateProviderValues()


  useEffect(()=> {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;    

    if(_token){

      dispatch({
        type:"SET_TOKEN",
        token:_token
      })

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
  console.log("TOKEN", token)
  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify}/>
        ) : (
          <Login/>
        )
      }
    </div>
  );
}

export default App;
