import React, { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{token}, dispatch] = useDataLayerValue();

  useEffect(()=>{
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if(_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })
      
      spotify.setAccessToken(_token)
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      });

      spotify.getUserPlaylists().then((playLists)=>{
        console.log(playLists)
        dispatch({
          type:'SET_PLAYLISTS',
          playLists: playLists
        });
      });  

      spotify.getPlaylist('37i9dQZEVXcJZyENOWUFo7').then((response)=>
        dispatch({
          type: 'SET_DISOVER_WEEKLY',
          discover_weekly: response,
        })
      )
    }
  }, []);
   
  return (
    <div className="app">
      {
        token ? (
         <Player />
        ):(
          <Login />
        )
      }
    </div>
  );
}

export default App;
