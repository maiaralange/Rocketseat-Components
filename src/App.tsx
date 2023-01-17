import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import albumCoverPng from './assets/album-cover.png';
import MusicPlayer from './components/musicPlayer/MusicPlayer';
import { GlobalStyle } from './styles/global';

export interface Song {
  title: string;
  artist: string;
  albumCover: string;
}

const App = () => {
  const song: Song = {
    title: 'Acorda Devinho',
    artist: 'Banda Rocketseat',
    albumCover: albumCoverPng
  };

  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/player" element={<MusicPlayer song={song} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
