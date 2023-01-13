import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MusicPlayer from './components/musicPlayer/MusicPlayer';
import { GlobalStyle } from './styles/global';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/player" element={<MusicPlayer />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
