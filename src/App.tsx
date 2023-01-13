import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Player from './components/player/Player';
import { GlobalStyle } from './styles/global';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/player" element={<Player />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
