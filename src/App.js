import logo from './logo.svg';
import './App.css';
import { CLIENT_ID, REDIRECT_URL } from './helpers/fetchService';
import { useEffect } from 'react';

function App() {
  const getCode = () => {
    window.location = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URL}`;
  };

  useEffect(() => {
    try {
      const getAlbum = async () => {
        const spotifyData = window.localStorage.getItem('spotify');
        if (spotifyData) {
          const params = JSON.parse(spotifyData);
          const accessToken = params.access_token;
          if (accessToken) {
            console.log(accessToken);
            const res = await fetch('https://api.spotify.com/v1/browse/new-releases', {
              headers: {
                'Authorization': `Bearer ${accessToken}`
              }
            });
            const data = await res.json();
            console.log(data);
          }
        }
      };

      getAlbum();
    } catch (error) {
      console.error('Error while getting albums: ', error);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type="button" onClick={getCode}>
          Log in
        </button>
      </header>
    </div>
  );
}

export default App;
